# 🌐 Multilingual FAQ Management System

A robust, production-ready FAQ management system with multi-language support, built with Node.js and Express.js. Features include real-time translation, rich text editing, and intelligent caching.

## ✨ Key Features

- **Multi-language Support**: Automatic translation to multiple languages using Google Cloud Translate API
- **Rich Text Editing**: Integrated WYSIWYG editor (CKEditor) for content management
- **Performance Optimized**: Redis caching for faster response times
- **Developer Friendly**: Comprehensive API documentation and testing suite
- **Production Ready**: Docker support, logging, and monitoring included
### Core Components

- **Backend Framework**: Node.js & Express.js
- **Database**: MongoDB 
- **Caching Layer**: Redis
- **Translation Service**: Google Cloud Translate API
- **Editor Integration**: CKEditor 5
- **Testing Framework**: Mocha & Chai
- **Containerization**: Docker & Docker Compose

## 🚀 Getting Started

### Prerequisites

- Node.js >= 22.x
- MongoDB >= 4.4
- Redis >= 6.0
- Docker & Docker Compose (optional)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rajaiswal6544/Multilanguage_support_faq.git
cd Multilanguage_support_faq
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development server:
```bash
npm run dev
```

### Docker Deployment

```bash
# Build and start services
docker-compose up -d

# View logs
docker-compose logs -f
```

## 📡 API Documentation

### Create FAQ

```http
POST /api/v1/faqs
Content-Type: application/json

{
  "question": "Will Raj be selected for BharatFd?",
  "answer": "Yes, he will because he dedicatedly completed the assignment.",
  "translations": {
    "hi": { "question": "क्या राज को Bharatfd के लिए चुना जाएगा?", "answer": "हां, वह समर्पित रूप से असाइनमेंट पूरा कर देगा।" },
    "bn": { "question": "রাজ কি নির্বাচিত হবে?", "answer": "হ্যাঁ, তিনি দায়িত্বশীলভাবে অ্যাসাইনমেন্ট সম্পন্ন করেছেন।" }
  }
}
```

### Retrieve FAQs

```http
GET /api/v1/faqs?lang=es&category=general

```


## 💾 Database Schema

### FAQ Document
```javascript
const mongoose = require("mongoose");

const FAQSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  translations: {
    hi: {
      question: String,
      answer: String
    },
    bn: {
      question: String,
      answer: String
    }
  }
});

module.exports = mongoose.model("FAQ", FAQSchema);

```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run specific test suite
npm test -- --grep "API Tests"

# Generate coverage report
npm run coverage
```

## 📈 Performance Monitoring

The system includes built-in monitoring for:
- API response times
- Cache hit/miss rates
- Translation API usage
- Database query performance

Access metrics at `/metrics` endpoint (protected).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Message Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only changes
- `style`: Changes that don't affect the code's meaning
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `perf`: Code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Raj Jaiswal** - _Initial work_ - [GitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- Google Cloud Platform for translation services
- MongoDB Team for the excellent database
- Redis Labs for caching solutions
- CKEditor Team for the rich text editor
