# Portfolio API with Chatbot

[![Docker](https://img.shields.io/badge/docker-ready-blue)](https://hub.docker.com/r/ken027/portfolio-api)
[![Demo](https://img.shields.io/badge/demo-online-brightgreen)](https://portfolio-api.ksoftdev.site/api-docs)

## Description

Portfolio API is a backend service that powers a personal portfolio and chatbot. It features an AI-powered chatbot using Retrieval-Augmented Generation (RAG) and MongoDB Vector Search for smart, context-aware responses. The API is built with Node.js, Express, TypeScript, and integrates with OpenAI for advanced conversational capabilities.

- **Live Demo & Docs:** [https://portfolio-api.ksoftdev.site/api-docs](https://portfolio-api.ksoftdev.site/api-docs)

## Features
- AI-powered chatbot (OpenAI, RAG, MongoDB Vector Search)
- RESTful API for portfolio data (projects, skills, experiences, certificates, etc.)
- Email sending endpoint
- Rate limiting and session management (Redis, PostgreSQL)
- Swagger (OpenAPI 3.0) documentation
- Docker & docker-compose support
- End-to-end and unit tests (Jest)

## Technologies Used
- Node.js, Express.js, TypeScript
- OpenAI API
- MongoDB (Vector Search)
- PostgreSQL (sessions)
- Redis (rate limiting)
- Docker, Docker Compose
- Jest (testing)

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or pnpm
- Docker & Docker Compose (optional, for containerized setup)

### Installation (Local)
```bash
# Clone the repository
git clone https://github.com/ken-027/portfolio-chatbot-api.git
cd portfolio-chatbot-api

# Install dependencies
npm install

# Build the project
npm run build

# Copy or create your .env file (see below for required variables)
cp .env.example .env

# Start the server
npm start
```

### Running with Docker
```bash
# Build and run all services (API, PostgreSQL, Redis)
docker-compose up --build
```
The API will be available at [http://localhost:5000](http://localhost:5000)

## Environment Variables
Create a `.env` file in the root directory with the following variables:

```env
PORT=5000
NODE_ENV=development
DB_URL=postgres://user:password@session_db:5432/dbname
TIMEZONE=Asia/Manila
REDIS_URL=redis://ratelimiter_cache:6379
MONGODB_URI=mongodb://localhost:27017/portfolio
OPENAI_API_KEY=your-openai-key
AI_MODEL=gpt-3.5-turbo
EMBEDDING_MODEL=text-embedding-ada-002
BASE_URL=https://portfolio-api.ksoftdev.site
BASE_URL_DEV=http://localhost:5000
SESSION_SECRET=your-session-secret
EJS_SERVICE_ID=your-emailjs-service-id
EJS_TEMPLATE_ID=your-emailjs-template-id
EJS_PUBLIC_KEY=your-emailjs-public-key
EJS_PRIVATE_KEY=your-emailjs-private-key
PUSHOVER_USER=your-pushover-user
PUSHOVER_TOKEN=your-pushover-token
HTTP_PROXY=
ALLOWED_ORIGINS_DEV=http://localhost:3000
ALLOWED_ORIGINS=https://portfolio.ksoftdev.site
```

## API Documentation
Interactive API docs are available at:
- [https://portfolio-api.ksoftdev.site/api-docs](https://portfolio-api.ksoftdev.site/api-docs)

The API follows RESTful conventions and is documented using OpenAPI 3.0 (Swagger).

## Main Endpoints
- `POST /api/v1/chat` — AI chatbot
- `GET /api/v1/portfolio/projects` — List all projects
- `GET /api/v1/portfolio/skills` — List all skills
- `GET /api/v1/portfolio/experiences` — List all experiences
- `GET /api/v1/portfolio/certificates` — List all certificates
- `POST /api/v1/email/send` — Send email

See the [API docs](https://portfolio-api.ksoftdev.site/api-docs) for full details.

## Author
**Kenneth Andales**
Passionate Software Developer. Experienced in full-stack web development, AI integrations, and building high-performance applications.

[Portfolio Website](https://portfolio.ksoftdev.site) | [GitHub](https://github.com/ken-027)
