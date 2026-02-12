# Internship Intelligence Platform

## 1. Project Overview

This platform is a centralized AI-powered internship aggregation and tracking system.

It collects internship listings from multiple job platforms, ranks them using AI models, and allows students to track and manage applications.

---

## 2. Problem Statement

Students currently:

- Search internships across multiple platforms  
- Manually compare listings  
- Track applications in spreadsheets  
- Miss relevant opportunities  

This project solves fragmentation using AI-powered aggregation and tracking.

---

## 3. Core Features

### 3.1 Internship Aggregation

**Description:**  
Scrape and collect internship listings from external platforms.

**Data Collected:**

- Title  
- Company  
- Duration  
- Stipend  
- Location  
- Description  
- Apply URL  
- Source  

---

### 3.2 Internship Card UI

**Left Section:**

- Internship Title  
- Duration  
- Stipend  
- Location  
- Description on hover  

**Right Section:**

- Apply Button (redirect to original source)

---

### 3.3 Bookmark Feature

**Description:**  
Allows users to save internships for later application.

**Database:**

- userId  
- internshipId  
- timestamp  

---

### 3.4 Application Tracking System

Users can mark internships as:

- Applied  
- Interview Scheduled  
- Rejected  
- Accepted  

**Dashboard displays:**

- Total applied  
- Pending responses  
- Approved internships  

---

### 3.5 AI Ranking Engine

**Purpose:**  
Rank internships based on relevance to student profile.

---

## 4. AI Technologies Used

### 4.1 MiniML Embeddings

**Description:**  
Lightweight embedding model for fast semantic similarity.

**Use Case:**

- Convert internship description to vector  
- Convert student profile to vector  
- Compute cosine similarity  

**Benefit:**  
Fast inference, low resource usage.

---

### 4.2 BERT (Bidirectional Encoder Representations from Transformers)

**Description:**  
Context-aware language model.

**Use Case:**

- Deep semantic similarity  
- Skill extraction  
- Context understanding  

**Benefit:**  
Understands meaning beyond keywords.

---

### 4.3 Radial Basis Kernel Function (RBF)

**Description:**  
Kernel used in SVM for non-linear classification.

**Use Case:**

- Classify internship relevance  
- Improve ranking boundaries  

**Benefit:**  
Handles non-linear matching patterns.

---

### 4.4 Sigmoid Function

**Description:**  
Mathematical function to convert raw score into probability (0–1).

**Use Case:**

- Generate match percentage  
- Normalize ranking score  

---

## 5. Technical Architecture

**Frontend:**

- React  

**Backend:**

- Node.js  
- Express.js  

**Database:**

- MongoDB  

**AI Layer:**

- Python  
- FastAPI  
- HuggingFace  

---

## 6. Database Entities

### Users

- id  
- name  
- email  
- skills  
- profileEmbedding  

### Internships

- id  
- title  
- company  
- description  
- duration  
- stipend  
- location  
- source  
- embeddingVector  

### Applications

- userId  
- internshipId  
- status  
- timestamp  

### Bookmarks

- userId  
- internshipId  

---

## 7. MVP Scope

### Phase 1

- Basic scraping  
- Display listings  
- Redirect apply button  

### Phase 2

- Bookmark feature  
- Application tracking  

### Phase 3

- MiniML similarity scoring  

### Phase 4

- BERT + RBF ranking  
- Recommendation engine  

---

## 8. Future Enhancements

- Resume parsing  
- AI skill gap analysis  
- Interview preparation suggestions  
- Acceptance probability prediction  
- Analytics dashboard  
- Notification system  
