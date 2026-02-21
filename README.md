<div align="center">

# 🛡️ PhishGuard: AI-Powered Phishing Detection

**An advanced, multi-layered security analysis tool designed to protect users from malicious links and social engineering emails using Live Reputation Checks, Static Heuristics, and AI-driven contextual analysis.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-Available_Now-success?style=for-the-badge&logo=render)](https://phishing-tool-frontend.onrender.com)

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
<img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" />
<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />

</div>

---

## 🚀 Live Deployment

The system is fully deployed and freely accessible on the public internet.

👉 **[Try PhishGuard Live](https://phishing-tool-frontend.onrender.com)**

---

## 📸 Project Showcase

Experience a beautifully crafted, highly intuitive user interface designed to break down complex technical threats into clear, actionable intelligence.

| Main Dashboard | Security Scanning |
| :---: | :---: |
| <img src="screenshots/Main Screen.png" alt="Home Page" width="400"/> | <img src="screenshots/Scanning.png" alt="Scanning Process" width="400"/> |

| High Risk Detection | Low Risk / Safe Analysis |
| :---: | :---: |
| <img src="screenshots/High Risk.png" alt="High Risk Result" width="400"/> | <img src="screenshots/Low Risk.png" alt="Low Risk Result" width="400"/> |

| Personal Scan History | Secure Authentication |
| :---: | :---: |
| <img src="screenshots/History.png" alt="History Page" width="400"/> | <img src="screenshots/Login-Signup.png" alt="Login/Register Page" width="400"/> |

---

## 🧠 The Complexity: Multi-Layered Detection Engine

PhishGuard doesn't rely on a single point of failure. It utilizes a highly complex, synchronous weighted scoring formula:

$$ Score = (W_{rep} \times S_{rep}) + (W_{heu} \times S_{heu}) + (W_{ai} \times S_{ai}) $$

1. **Reputation Engines (Highly Weighted)**
   * Real-time querying against **Google Safe Browsing** and **VirusTotal** APIs.
   * If any reputable vendor flags a URL as malicious, the system triggers an immediate critical override (Score: 100).
2. **Static Heuristics (Medium Weight)**
   * Deep technical inspection calculating risk based on structural red flags (e.g., raw IP addresses in URLs, suspicious TLDs like `.xyz`, punycode usage, target executables).
3. **AI Contextual Analysis (Puter.js Integration)**
   * Uses OpenAI's language models running on the frontend (via Puter.js) to semantically analyze the text content of emails or pages for urgency, authority, and scarcity cues often found in social engineering.

---

## 🏗️ System Architecture

The application is built using a modern, scalable, microservices-inspired architecture.

```mermaid
graph LR
    Client[React App / Vite] --HTTPS/REST--> API[NestJS API Gateway]
    API --Prisma ORM--> DB[(PostgreSQL on Neon)]
    API --HTTPS--> VT[VirusTotal API]
    API --HTTPS--> GSB[Google Safe Browsing]
    Client --Puter.js--> OpenAI[OpenAI Engine]
```

### Component Breakdown
*   **Frontend Client**: A blazing-fast Single Page Application (SPA) built with React 18, Vite, and styled with strict Tailwind CSS. Communicates securely with the backend.
*   **API Gateway & Backend**: A highly structured NestJS environment. It strictly enforces validation pipelines (Class-Validator), manages rate limiting to prevent abuse, handles JWT user authentication via pure-js bcryptjs, and orchestrates the complex scanning jobs.
*   **Data Persistence**: A fully relational PostgreSQL database hosted serverlessly on Neon, strictly typed and migrated through Prisma ORM.

### Cloud Infrastructure
*(Hosted on Render's Enterprise-Grade Platform)*
| Render Dashboard | Neon PostgreSQL Database |
| :---: | :---: |
| <img src="screenshots/Render Dashboard.png" alt="Render Infrastructure" width="400"/> | <img src="screenshots/Neon_Database_Tables.png" alt="Neon Database" width="400"/> |

---

## 🛠️ Getting Started (Local Development)

### Prerequisites
*   Node.js (v18+)
*   Git

### 1. Backend Setup
```bash
git clone https://github.com/farissalman12/PhisingDetectionTool.git
cd PhisingDetectionTool/backend

# Install dependencies
npm install

# Configure Environment Variables in a .env file
# DATABASE_URL="postgresql://user:password@localhost:5432/phishguard"
# JWT_SECRET="your-super-secret-key"
# VIRUSTOTAL_API_KEY="your-vt-api-key"

# Apply Database Migrations
npx prisma migrate dev

# Start the Backend Server
npm run start:dev
```

### 2. Frontend Setup
Open a new terminal window:
```bash
cd PhisingDetectionTool/frontend

# Install dependencies
npm install

# Start the Vite Dev Server
npm run dev
```

---

## 🛡️ Security Posture

* **Zero-Trust**: Robust API route protection using Passport JWT strategies.
* **Data Integrity**: Enforced database constraints and automatic DTO validation stripping out malicious payloads.
* **Environment Parity**: Infrastructure as Code via `render.yaml` ensuring that public production precisely mirrors local expectations.

> Designed and Developed by Faris Salman
