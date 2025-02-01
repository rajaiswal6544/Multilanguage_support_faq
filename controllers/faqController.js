const FAQ = require("../models/FAQ");
const { translateText } = require("../utils/translate");

exports.createFAQ = async (req, res) => {
  try {
    let { question, answer } = req.body;

    // Translate both question and answer
    const question_hi = await translateText(question, "hi");
    const answer_hi = await translateText(answer, "hi");

    const question_bn = await translateText(question, "bn");
    const answer_bn = await translateText(answer, "bn");

    // Store all translations in the database
    const faq = new FAQ({ 
      question, 
      answer, 
      translations: {
        hi: { question: question_hi, answer: answer_hi },
        bn: { question: question_bn, answer: answer_bn }
      }
    });

    await faq.save();
    
    res.status(201).json(faq);
  } catch (error) {
    res.status(500).json({ message: "Error creating FAQ", error });
  }
};

exports.getFAQs = async (req, res) => {
  try {
    const lang = req.query.lang || "en"; // Default to English
    const faqs = await FAQ.find();

    const translatedFAQs = faqs.map((faq) => {
      if (lang === "hi" || lang === "bn") {
        return {
          id: faq._id,
          question: faq.translations[lang]?.question || faq.question, 
          answer: faq.translations[lang]?.answer || faq.answer
        };
      } else {
        return {
          id: faq._id,
          question: faq.question,
          answer: faq.answer
        };
      }
    });

    res.status(200).json(translatedFAQs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching FAQs", error });
  }
};

