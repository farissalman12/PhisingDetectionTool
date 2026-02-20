<div align="center">
  <img src="screenshots/logo.png" alt="PhishGuard Logo" width="120" />
</div>

<h1 align="center">PhishGuard: AI-Powered Phishing Detection</h1>

<p align="center">
  <strong>Protect yourself from malicious links and social engineering emails using advanced AI, live reputation checking, and technical heuristics.</strong>
</p>

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
</div>

---

## 📸 Screenshots

| Home Page / Analyzer | Detailed Scan Result (Phishing) |
| :---: | :---: |
| <img src="screenshots/home.png" alt="Home Page" width="400"/> | <img src="screenshots/result.png" alt="Scan Result Page" width="400"/> |

| Scan History Dashboard | Secure User Registration |
| :---: | :---: |
| <img src="screenshots/history.png" alt="History Page" width="400"/> | <img src="screenshots/login.png" alt="Login/Register Page" width="400"/> |

*(Note: Add your screenshots to the `screenshots/` directory named `home.png`, `result.png`, `history.png`, and `login.png` to preview them here.)*

---

## 🚀 Features

*   **Multi-Layered Detection Engine**: Combines static heuristics, real-time reputation APIs (VirusTotal, Google Safe Browsing), and AI-driven contextual analysis.
*   **Intuitive Visual Reporting**: Breaks down complex technical threats into simple, color-coded gauges and plain-English explanations.
*   **Synchronous Processing**: Get immediate feedback via a blazing-fast NestJS API Backend.
*   **Personal Scan History**: Registered users can track, filter, and review their previously analyzed URLs.
*   **Zero-Trust Security**: Robust API rate limiting, strict DTO validation, bcrypt password hashing, and JWT authentication.

---

## 🏗️ Architecture Stack

PhishGuard is built using a modern, scalable, and type-safe architecture.

*   **Frontend**: React 18, Vite, TypeScript, Tailwind CSS, Shadcn UI, React Router v6.
*   **Backend**: NestJS, TypeScript, Prisma ORM, Class-Validator.
*   **Database**: PostgreSQL (Neon Database for production).
*   **Integrations**: VirusTotal API, OpenAI API (Simulated), Google Safe Browsing.

---

## 🛠️ Getting Started (Local Development)

### Prerequisites
*   Node.js (v18+)
*   PostgreSQL running locally (or a cloud provider like Neon)

### 1. Database Setup
Ensure you have a PostgreSQL database ready. Obtain the connection string.

### 2. Backend Setup
```bash
git clone https://github.com/farissalman12/PhisingDetectionTool.git
cd PhisingDetectionTool/backend

# Install dependencies
npm install

# Configure Environment Variables
# Create a .env file and add:
# DATABASE_URL="postgresql://user:password@localhost:5432/phishguard"
# JWT_SECRET="your-super-secret-key"
# VIRUSTOTAL_API_KEY="your-vt-api-key"

# Apply Database Migrations
npx prisma migrate dev

# Start the Backend Server
npm run start:dev
```
*Backend runs on `http://localhost:3000`*

### 3. Frontend Setup
Open a new terminal window:
```bash
cd PhisingDetectionTool/frontend

# Install dependencies
npm install

# Start the Vite Dev Server
npm run dev
```
*Frontend runs on `http://localhost:5173`*

---

## 🛳️ Deployment

This project is tailored for deployment on **Render.com**. It includes a `render.yaml` infrastructure-as-code file that provisions:
1.  A PostgreSQL Managed Database (`phishing-tool-db`)
2.  The NestJS Web Service Backend (`phishing-tool-backend`)
3.  The React Static Site Frontend (`phishing-tool-frontend`)

To deploy, simply connect this repository to Render and use the Blueprint deployment method.

---

## 🛡️ Security Posture & Documentation

Detailed engineering documentation is available in the `/docs` directory:
*   [Architecture Diagram & Data Flow](docs/architecture.md)
*   [Threat Model (STRIDE)](docs/threat_model.md)
*   [API Constraints & Contracts](docs/api.md)
*   [Weighted Scoring Engine Model](docs/scoring.md)

---
> Developed by Faris Salman
