# Internship Intelligence Platform

## Project Documentation

---

| **Field**        | **Details**                                      |
| ---------------- | ------------------------------------------------ |
| Project Title    | Internship Intelligence Platform                 |
| Academic Year    | 2025–2026                                        |
| Team Members     | *(add your names here)*                          |
| Guide / Mentor   | *(add faculty name here)*                        |
| Department       | *(add department name, e.g. Computer Science)*   |
| College          | *(add college name here)*                        |

---

## Table of Contents

1. [Abstract](#1-abstract)
2. [Introduction](#2-introduction)
3. [Problem Statement](#3-problem-statement)
4. [Objectives](#4-objectives)
5. [Scope of the Project](#5-scope-of-the-project)
6. [Literature Survey](#6-literature-survey)
7. [System Architecture](#7-system-architecture)
8. [Technology Stack](#8-technology-stack)
9. [System Requirements](#9-system-requirements)
10. [Module Description](#10-module-description)
11. [Database Design](#11-database-design)
12. [AI Ranking Engine](#12-ai-ranking-engine)
13. [System Flow Diagrams](#13-system-flow-diagrams)
14. [Implementation Details](#14-implementation-details)
15. [Testing](#15-testing)
16. [Screenshots](#16-screenshots)
17. [Advantages and Limitations](#17-advantages-and-limitations)
18. [Future Enhancements](#18-future-enhancements)
19. [Conclusion](#19-conclusion)
20. [References](#20-references)

---

## 1. Abstract

The **Internship Intelligence Platform** is a centralized, AI-powered web application designed to address the fragmented and time-consuming nature of the internship search process faced by students. Currently, students must manually browse multiple job portals, compare listings, and track applications using spreadsheets — leading to missed opportunities and inefficient workflows.

This platform solves the problem by aggregating internship listings from various external sources through automated web scraping, presenting them in a unified and intuitive interface. Students can browse, bookmark, and apply to internships directly from the platform. An integrated **Application Tracking System** allows users to monitor the status of their applications (Applied, Interview Scheduled, Rejected, Accepted) through a personalized dashboard.

At its core, the platform leverages an **AI-powered Ranking Engine** built using **MiniML Embeddings**, **BERT (Bidirectional Encoder Representations from Transformers)**, the **Radial Basis Function (RBF) Kernel**, and **Sigmoid normalization**. This engine semantically matches internship descriptions with student profiles to surface the most relevant opportunities. Unlike keyword-based matching, the AI layer understands contextual meaning, enabling accurate recommendations even when exact keywords do not overlap.

The system is built on the **MERN stack** (MongoDB, Express.js, React, Node.js) for the web application and **Python with FastAPI** for the AI microservice, ensuring a scalable, modular, and performant architecture.

**Keywords:** Internship Aggregation, AI Ranking, BERT, MiniML, Web Scraping, MERN Stack, Application Tracking, Semantic Similarity

---

## 2. Introduction

The landscape of internship recruitment has shifted predominantly online, with opportunities scattered across platforms like LinkedIn, Internshala, Indeed, and company career pages. Students, particularly those in engineering and management programs, face a significant challenge: there is no single platform that aggregates, ranks, and tracks internship opportunities tailored to their skills and preferences.

The **Internship Intelligence Platform** was conceived to bridge this gap. It functions as a one-stop solution where:

- **Aggregation** eliminates the need to manually visit multiple portals.
- **AI-powered ranking** prioritizes listings based on relevance to the student's profile.
- **Application tracking** replaces manual spreadsheet-based tracking with an automated dashboard.
- **Bookmarking** lets students save opportunities for later review.

This project combines modern web technologies with Natural Language Processing (NLP) models to deliver a smart, user-friendly experience. The platform is designed with scalability in mind, allowing future integration of resume parsing, skill-gap analysis, and interview preparation modules.

---

## 3. Problem Statement

Students seeking internship opportunities currently face the following challenges:

1. **Fragmentation** — Internship listings are spread across multiple platforms (LinkedIn, Internshala, company websites), requiring students to visit each one individually.
2. **Manual Comparison** — There is no automated way to compare and rank opportunities based on a student's skill set or preferences.
3. **Inefficient Tracking** — Students rely on spreadsheets or notes to track application statuses, leading to missed deadlines and lost opportunities.
4. **Information Overload** — Without intelligent filtering, students are overwhelmed by irrelevant listings.

There is a clear need for a unified platform that aggregates internship data from multiple sources, provides AI-driven personalized ranking, and offers built-in application tracking — all in a single, user-friendly interface.

---

## 4. Objectives

The primary objectives of this project are:

1. To **aggregate internship listings** from multiple online platforms using automated web scraping.
2. To provide a **clean and responsive user interface** for browsing, searching, and filtering internships.
3. To implement a **bookmark feature** that allows students to save interesting opportunities.
4. To build an **Application Tracking System** with status management (Applied, Interview Scheduled, Rejected, Accepted) and a visual dashboard.
5. To develop an **AI-powered ranking engine** that semantically matches internships to student profiles using NLP models (MiniML, BERT, RBF Kernel, Sigmoid).
6. To ensure a **scalable and modular architecture** using the MERN stack and a Python-based AI microservice.

---

## 5. Scope of the Project

### In Scope

- Scraping internship listings from external platforms (LinkedIn, Internshala, etc.)
- Displaying listings with title, company, duration, stipend, location, and description
- User authentication and profile management
- Bookmarking internships
- Application tracking with status updates and a dashboard
- AI-based internship ranking using semantic similarity
- Responsive web design for desktop use

### Out of Scope (for current version)

- Resume parsing and auto-fill
- AI-powered skill gap analysis
- Interview preparation module
- Mobile application (Android/iOS)
- Real-time notification system
- Acceptance probability prediction

---

## 6. Literature Survey

| **Sr. No.** | **Title / Source**                                                                 | **Key Takeaway**                                                                                          |
| ------------ | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 1            | Devlin et al., "BERT: Pre-training of Deep Bidirectional Transformers," 2019      | BERT provides state-of-the-art contextual embeddings for NLP tasks, enabling semantic understanding.       |
| 2            | Reimers & Gurevych, "Sentence-BERT," 2019                                        | Sentence-level BERT embeddings enable efficient semantic similarity computation.                           |
| 3            | LinkedIn Job Search API Documentation                                             | Provides structured access to job/internship listings for aggregation.                                     |
| 4            | Internshala Platform Analysis                                                     | One of India's largest internship platforms; demonstrates the need for cross-platform aggregation.          |
| 5            | Scholkopf et al., "Learning with Kernels," 2002                                  | RBF Kernel enables non-linear classification in SVM, applicable to relevance scoring.                      |
| 6            | HuggingFace Transformers Documentation                                           | Open-source library providing pre-trained NLP models (BERT, MiniLM) for inference and fine-tuning.         |
| 7            | MERN Stack Best Practices — MongoDB Official Blog                                | Guidelines for building scalable full-stack applications using MongoDB, Express, React, and Node.js.       |

---

## 7. System Architecture

The system follows a **three-tier architecture** with a clear separation of concerns:

```
┌─────────────────────────────────────────────────────────┐
│                    CLIENT (Frontend)                     │
│              React.js + Vite + CSS                       │
│   Pages: Home, Dashboard                                 │
│   Components: InternshipCard, Navbar                     │
└────────────────────┬────────────────────────────────────┘
                     │  HTTP / REST API
                     ▼
┌─────────────────────────────────────────────────────────┐
│                  SERVER (Backend)                         │
│              Node.js + Express.js                         │
│   Routes: /internships, /bookmarks, /applications        │
│   Scrapers: LinkedIn, Internshala, etc.                  │
│   Auth: Cookie-based JWT Sessions                        │
└────────┬──────────────────────┬─────────────────────────┘
         │                      │  HTTP / REST API
         ▼                      ▼
┌──────────────────┐  ┌──────────────────────────────────┐
│    MongoDB        │  │        AI SERVICE                 │
│  (Database)       │  │    Python + FastAPI               │
│  Users            │  │    MiniML Embeddings              │
│  Internships      │  │    BERT Similarity                │
│  Applications     │  │    RBF Kernel + Sigmoid           │
│  Bookmarks        │  │    HuggingFace Transformers       │
└──────────────────┘  └──────────────────────────────────┘
```

---

## 8. Technology Stack

| **Layer**       | **Technology**                             | **Purpose**                                                    |
| --------------- | ------------------------------------------ | -------------------------------------------------------------- |
| Frontend        | React.js (with Vite)                       | Component-based UI for browsing and managing internships       |
| Styling         | CSS (Custom)                               | Responsive, modern styling                                     |
| Backend         | Node.js + Express.js                       | RESTful API layer, routing, middleware                          |
| Database        | MongoDB (with Mongoose ODM)                | NoSQL storage for users, internships, applications, bookmarks  |
| AI Service      | Python + FastAPI                           | Microservice for AI-powered ranking                            |
| AI Models       | MiniLM, BERT (via HuggingFace)             | Semantic embedding generation and similarity computation       |
| Web Scraping    | Custom Node.js scrapers                    | Automated collection of internship listings from external sites|
| Authentication  | JWT (httpOnly Cookies)                     | Secure, cookie-based session management                        |
| Version Control | Git + GitHub                               | Source code management                                         |

---

## 9. System Requirements

### Hardware Requirements

| **Component**   | **Minimum**                   |
| --------------- | ----------------------------- |
| Processor       | Intel i3 / AMD Ryzen 3        |
| RAM             | 4 GB                          |
| Storage         | 1 GB free disk space          |
| Internet        | Broadband connection           |

### Software Requirements

| **Software**    | **Version**                   |
| --------------- | ----------------------------- |
| Node.js         | v18+                          |
| Python          | 3.9+                          |
| MongoDB         | v6+                           |
| npm             | v9+                           |
| Browser         | Chrome / Firefox (latest)     |
| OS              | Windows 10+ / Linux / macOS   |

---

## 10. Module Description

### Module 1: Internship Aggregation (Web Scraping)

The scraping module automatically collects internship listings from external platforms. Each listing captures:

- Title, Company, Duration, Stipend, Location, Description, Apply URL, Source

The scrapers are located in `server/scrapers/` and run on a scheduled or manual trigger basis.

**Key File:** `server/trigger_scraper.js`

---

### Module 2: Internship Listing & UI

The frontend displays aggregated internships as cards with:

- **Left section:** Title, Duration, Stipend, Location (Description shown on hover)
- **Right section:** Apply button (redirects to the original source URL)

**Key Files:** `client/src/pages/Home.jsx`, `client/src/components/InternshipCard.jsx`

---

### Module 3: Bookmark System

Users can bookmark internships they wish to revisit later. Bookmarks are stored in MongoDB with `userId` and `internshipId`.

**Key Files:** `server/routes/bookmarks.js`, `server/models/Bookmark.js`

---

### Module 4: Application Tracking System

Users can mark internships with a status:

| **Status**          | **Meaning**                          |
| ------------------- | ------------------------------------ |
| Applied             | Application submitted                |
| Interview Scheduled | Interview date received              |
| Rejected            | Application rejected                 |
| Accepted            | Offer received                       |

The Dashboard provides an overview: total applied, pending responses, and approved internships.

**Key Files:** `server/routes/applications.js`, `server/models/Application.js`, `client/src/pages/Dashboard.jsx`

---

### Module 5: AI Ranking Engine

A dedicated Python microservice ranks internships based on semantic similarity between the student profile and internship descriptions. Details in [Section 12](#12-ai-ranking-engine).

**Key Files:** `ai_service/main.py`, `ai_service/ranking.py`, `ai_service/models.py`

---

### Module 6: Authentication

Cookie-based JWT authentication secures user sessions. Tokens are stored in `httpOnly` cookies to prevent XSS attacks.

**Key Files:** `server/routes/auth.js` *(if implemented)*, `server/config/`

---

## 11. Database Design

### Entity-Relationship Overview

```
┌──────────┐       ┌──────────────┐       ┌──────────────┐
│   User   │──1:N──│  Application │──N:1──│  Internship  │
└──────────┘       └──────────────┘       └──────────────┘
     │                                          │
     │              ┌──────────────┐            │
     └─────1:N──────│   Bookmark   │─────N:1────┘
                    └──────────────┘
```

### Collection Schemas

#### Users

| Field            | Type     | Description                         |
| ---------------- | -------- | ----------------------------------- |
| _id              | ObjectId | Primary key                         |
| name             | String   | Full name                           |
| email            | String   | Unique email                        |
| skills           | [String] | Array of skill tags                 |
| profileEmbedding | [Number] | Vector embedding of student profile |

#### Internships

| Field           | Type     | Description                         |
| --------------- | -------- | ----------------------------------- |
| _id             | ObjectId | Primary key                         |
| title           | String   | Internship title                    |
| company         | String   | Company name                        |
| description     | String   | Job description                     |
| duration        | String   | Internship duration                 |
| stipend         | String   | Monthly stipend                     |
| location        | String   | Work location                       |
| source          | String   | Source platform                     |
| applyUrl        | String   | External application link           |
| embeddingVector | [Number] | Vector embedding of description     |

#### Applications

| Field        | Type     | Description                                |
| ------------ | -------- | ------------------------------------------ |
| _id          | ObjectId | Primary key                                |
| userId       | ObjectId | Reference to User                          |
| internshipId | ObjectId | Reference to Internship                    |
| status       | String   | Applied / Interview / Rejected / Accepted  |
| timestamp    | Date     | Application date                           |

#### Bookmarks

| Field        | Type     | Description               |
| ------------ | -------- | ------------------------- |
| _id          | ObjectId | Primary key               |
| userId       | ObjectId | Reference to User         |
| internshipId | ObjectId | Reference to Internship   |

---

## 12. AI Ranking Engine

### Overview

The AI Ranking Engine is a standalone microservice built with **Python** and **FastAPI**. It ranks internship listings based on how semantically relevant they are to a student's profile.

### Pipeline

```
Student Profile (skills, interests)
        │
        ▼
┌─────────────────────┐
│  MiniLM Embeddings  │ ──→ Fast vector representation
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│   BERT Embeddings   │ ──→ Deep contextual understanding
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│  Cosine Similarity  │ ──→ Compare profile vs. internship vectors
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│    RBF Kernel        │ ──→ Non-linear classification of relevance
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│ Sigmoid Normalization│ ──→ Final match score (0%–100%)
└─────────────────────┘
```

### Technologies

| **Component**           | **Role**                                              |
| ----------------------- | ----------------------------------------------------- |
| MiniLM (all-MiniLM-L6)  | Lightweight sentence embedding for fast similarity    |
| BERT                    | Deep bidirectional contextual embedding                |
| Cosine Similarity       | Measures vector closeness between profile & listing    |
| RBF Kernel              | Handles non-linear relevance boundaries via SVM        |
| Sigmoid Function        | Converts raw scores to a normalized 0–1 probability   |
| FastAPI                 | High-performance async Python web framework            |
| HuggingFace Transformers| Model loading and inference                            |

---

## 13. System Flow Diagrams

### 13.1 User Flow

```
┌──────────┐     ┌───────────────┐     ┌────────────────┐
│  Student  │────▶│  Login/Register│────▶│  Browse Listings│
└──────────┘     └───────────────┘     └───────┬────────┘
                                               │
                               ┌───────────────┼───────────────┐
                               ▼               ▼               ▼
                        ┌────────────┐  ┌────────────┐  ┌────────────┐
                        │  Bookmark  │  │   Apply    │  │  View AI   │
                        │  Internship│  │  Externally│  │  Rankings  │
                        └────────────┘  └─────┬──────┘  └────────────┘
                                              │
                                              ▼
                                     ┌──────────────────┐
                                     │  Track Status on  │
                                     │    Dashboard      │
                                     └──────────────────┘
```

### 13.2 Data Flow

```
External Platforms ──(Scraping)──▶ MongoDB ──(API)──▶ React Frontend
                                     │
                                     └──(Embeddings)──▶ AI Service ──(Ranked Results)──▶ API ──▶ Frontend
```

---

## 14. Implementation Details

### 14.1 Frontend (React + Vite)

| **File**               | **Purpose**                                    |
| ---------------------- | ---------------------------------------------- |
| `App.jsx`              | Root component with routing configuration      |
| `pages/Home.jsx`       | Main internship listing page                   |
| `pages/Dashboard.jsx`  | Application tracking dashboard                 |
| `components/InternshipCard.jsx` | Individual internship card component  |
| `components/Navbar.jsx`| Navigation bar                                 |
| `utils/`               | Utility functions (API calls, helpers)         |

### 14.2 Backend (Node.js + Express)

| **File**                     | **Purpose**                                |
| ---------------------------- | ------------------------------------------ |
| `index.js`                   | Server entry point, middleware setup       |
| `routes/internships.js`      | CRUD operations for internship listings    |
| `routes/bookmarks.js`        | Bookmark add/remove endpoints              |
| `routes/applications.js`     | Application status management              |
| `models/User.js`             | Mongoose schema for users                  |
| `models/Internship.js`       | Mongoose schema for internships            |
| `models/Application.js`      | Mongoose schema for applications           |
| `models/Bookmark.js`         | Mongoose schema for bookmarks              |
| `scrapers/`                  | Web scraping scripts for external sites    |
| `config/`                    | Database and environment configuration     |

### 14.3 AI Service (Python + FastAPI)

| **File**           | **Purpose**                                          |
| ------------------ | ---------------------------------------------------- |
| `main.py`          | FastAPI server entry point, API routes               |
| `ranking.py`       | Core ranking logic (embedding + similarity + scoring)|
| `models.py`        | Pydantic request/response schemas                    |
| `requirements.txt` | Python dependencies                                  |

---

## 15. Testing

### 15.1 Testing Strategy

| **Type**           | **Scope**                                           | **Tool**            |
| ------------------ | --------------------------------------------------- | ------------------- |
| Unit Testing       | Individual functions (ranking, API handlers)        | Jest / Pytest       |
| Integration Testing| API endpoints, database operations                  | Postman / Thunder   |
| UI Testing         | Component rendering, user interactions              | Browser Dev Tools   |
| System Testing     | End-to-end flow (scrape → display → apply → track)  | Manual              |

### 15.2 Test Cases

| **Test Case**                             | **Expected Result**                                     | **Status** |
| ----------------------------------------- | ------------------------------------------------------- | ---------- |
| Scraper fetches listings from LinkedIn     | Listings stored in MongoDB                              | ☐          |
| Home page loads internship cards          | Cards displayed with correct data                        | ☐          |
| User bookmarks an internship             | Bookmark saved and reflected in UI                       | ☐          |
| User marks application as "Applied"      | Status updated in database and Dashboard                 | ☐          |
| AI ranking returns sorted results        | Internships ordered by match score                       | ☐          |
| Dashboard shows correct statistics       | Counts match actual application data                     | ☐          |
| Cookie-based auth persists across refresh| User stays logged in after page refresh                  | ☐          |

---

## 16. Screenshots

> *(Insert screenshots of the following pages here)*

1. **Landing / Home Page** — Internship listings with cards
2. **Internship Card (Hover State)** — Expanded description
3. **Bookmark Feature** — Saved internships
4. **Dashboard** — Application tracking statistics
5. **AI Ranked Results** — Internships sorted by match score

---

## 17. Advantages and Limitations

### Advantages

- **Centralized Platform** — Single source for internships from multiple platforms.
- **AI-Powered Relevance** — Semantic matching goes beyond keyword search.
- **Application Tracking** — Built-in status management replaces spreadsheets.
- **Modular Architecture** — AI service is decoupled and independently deployable.
- **Secure Authentication** — httpOnly cookies prevent common web vulnerabilities.

### Limitations

- **Scraper Dependency** — Changes in external platform HTML may break scrapers.
- **No Resume Parsing** — Profile data must be entered manually.
- **AI Accuracy** — Ranking quality depends on the embedding models and training data.
- **Single Language** — Currently supports English-only listings.
- **No Mobile App** — Web-only; no native mobile experience.

---

## 18. Future Enhancements

1. **Resume Parsing** — Auto-extract skills and experience from uploaded resumes.
2. **AI Skill Gap Analysis** — Identify missing skills and recommend learning resources.
3. **Interview Preparation** — AI-generated mock questions based on the internship role.
4. **Acceptance Probability Prediction** — ML model to estimate chances of selection.
5. **Analytics Dashboard** — Trends, popular roles, top companies, application success rates.
6. **Notification System** — Email/push alerts for new matching internships and status updates.
7. **Mobile Application** — React Native app for Android and iOS.
8. **Multi-language Support** — Hindi and regional language interface.

---

## 19. Conclusion

The **Internship Intelligence Platform** successfully demonstrates how modern web technologies can be combined with AI/NLP models to solve a real-world problem faced by students. By aggregating internship listings from multiple platforms, providing AI-powered personalized rankings, and offering a built-in application tracking system, the platform significantly reduces the time and effort required in the internship search process.

The use of **MiniLM** and **BERT** embeddings with **RBF Kernel** classification and **Sigmoid normalization** ensures that the ranking engine understands semantic context rather than relying on simple keyword matching. The **MERN stack** provides a robust and scalable foundation, while the **FastAPI** microservice architecture ensures the AI layer can be developed, scaled, and maintained independently.

This project serves as a strong foundation for future enhancements including resume parsing, skill gap analysis, and predictive analytics — all aimed at making the internship search process smarter and more efficient for students.

---

## 20. References

1. Devlin, J., Chang, M.W., Lee, K. and Toutanova, K., 2019. *BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding.* NAACL.
2. Reimers, N. and Gurevych, I., 2019. *Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks.* EMNLP.
3. Schölkopf, B., Smola, A.J. and Bach, F., 2002. *Learning with Kernels: Support Vector Machines, Regularization, Optimization, and Beyond.* MIT Press.
4. MongoDB Official Documentation — https://www.mongodb.com/docs/
5. React Official Documentation — https://react.dev/
6. Express.js Official Documentation — https://expressjs.com/
7. FastAPI Official Documentation — https://fastapi.tiangolo.com/
8. HuggingFace Transformers Documentation — https://huggingface.co/docs/transformers/
9. Node.js Official Documentation — https://nodejs.org/en/docs/
10. Vite Official Documentation — https://vitejs.dev/

---

> **Note:** Replace all placeholder text marked with *(italics and parentheses)* with your actual details before submission.
