# CRM Backend (Node + Express + MongoDB)

- Uses MongoDB (mongoose). Firebase Admin is included to verify Firebase ID tokens from frontend.
- Endpoints:
  - POST /api/auth/register
  - POST /api/auth/login
  - POST /api/auth/firebase-login
  - CRUD /api/leads (protected)
- Setup:
  1. npm install
  2. Create .env with MONGO_URI and JWT_SECRET
  3. npm run dev

# CRM Backend (Node.js + Express + MongoDB + JWT + Firebase)

## 📌 Overview

This is the **backend API** for the CRM System.  
It provides **user authentication**, **lead management (CRUD)**, and **Firebase integration** for extended data or verification.

---

## ⚙️ Tech Stack

| Tool                   | Purpose                             |
| ---------------------- | ----------------------------------- |
| **Node.js + Express**  | REST API framework                  |
| **MongoDB (Mongoose)** | Database for users and leads        |
| **JWT (jsonwebtoken)** | Secure authentication tokens        |
| **bcryptjs**           | Password encryption                 |
| **Firebase Admin SDK** | Firebase integration / verification |
| **dotenv**             | Environment variable management     |
| **CORS & Body-Parser** | Middleware for API handling         |


