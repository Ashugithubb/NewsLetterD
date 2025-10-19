
# 📰 Newsletter Management System

This project implements a complete **Newsletter Management System** with subscription, creation, publishing, and distribution features.  
It provides a **Landing Page** for subscribers and an **Admin Panel** for administrators to manage newsletters.

---
<img width="1920" height="929" alt="Screenshot (11)" src="https://github.com/user-attachments/assets/4631cfd3-dd30-4113-8c28-2780a31e1b5d" />

<img width="1920" height="1019" alt="Screenshot (12)" src="https://github.com/user-attachments/assets/f5662a07-45f6-42a4-847b-c19eb894fa12" />

<img width="1920" height="1019" alt="Screenshot (13)" src="https://github.com/user-attachments/assets/6083fe88-667e-4931-a2cf-54ba50e84623" />

<img width="1920" height="1022" alt="Screenshot (14)" src="https://github.com/user-attachments/assets/9c9f1dd2-9ade-44ee-9242-b254ac029488" />

<img width="1920" height="1020" alt="Screenshot (15)" src="https://github.com/user-attachments/assets/470194e9-784b-4ab8-aed5-8f0a6088be59" />>


## 📌 Statement

The deliverable includes functionality for the creation, subscription, and management of newsletters by both users and administrators.

---

## 🎯 Scope

- Automate newsletter subscription from a landing page.  
- Provide an **Admin Panel** to create, manage, and publish newsletters.  
- Distribute published newsletters to subscribers automatically.  

---

## 📖 Background

Previously, newsletters were created and sent manually.  
This project introduces:  
- A **Landing Page** for user subscriptions.  
- An **Admin Panel** for admins to create, draft, and publish newsletters.  

---

## ⚙️ Functionalities / Business Rules

### ✅ User Stories & Acceptance Criteria

#### US1: Newsletter Subscription
- As a **visitor**, I can subscribe with my email to receive newsletters.  
- **AC:**  
  - Enter valid email → system stores it → success confirmation shown.  

#### US2: Admin Login
- As an **admin**, I can log in securely to manage newsletters.  
- **AC:**  
  - Valid credentials → access granted to admin panel.  

#### US3: Admin Views Newsletter List
- As an **admin**, I can view all created newsletters with their status (**Draft / Published**).  
- **AC:**  
  - Show list with Title, Description, Status.  
  - Show drafts & published newsletters separately.  
  - If no newsletters exist → show message: *“No newsletters created yet.”*  

#### US4: Newsletter Creation
- As an **admin**, I can create newsletters and either **save as Draft** or **Publish**.  
- **AC:**  
  - Draft → saved but not sent.  
  - Publish → stored as Published + sent to all subscribers.  

#### US5: Newsletter Distribution
- As a **subscriber**, I receive newsletters in my inbox after publication.  
- **AC:**  
  - Email includes: Greeting, Newsletter content, **Unsubscribe** option.  
  - Clicking *Unsubscribe* removes user from mailing list.  

---

## 🔄 Process Flow

1. User visits **Landing Page** → enters email → subscription stored in DB.  
2. Admin logs into **Admin Panel**.  
3. Admin sees existing newsletters (if any).  
4. Admin clicks **Create Newsletter** → editor modal opens.  
5. Admin drafts content → Save as Draft or Publish.  
6. If **Published** → system emails all subscribers with content + unsubscribe button.  

---

## 🖥️ User Interfaces

- **Landing Page**  
  - Header  
  - Subscription Form  
  - Newsletter Section  
  - Footer  

- **Admin Panel**  
  - Login  
  - Dashboard  
  - Newsletter List (Draft/Published)  
  - Create Newsletter Modal  



## 🛠️ Technical Specifications

- **Frontend:** Next.js + React  
- **Backend:** Node.js / Nest.js 
- **Database:** PostgreSQL(TypeORM), 
- **Email Service:** SendGrid / Nodemailer (or similar)  
- **Authentication:** JWT / NextAuth  

---

## 📚 Glossary

- **Draft:** Newsletter saved but not sent.  
- **Publish:** Newsletter distributed to all subscribers.  
- **Unsubscribe:** Stop receiving newsletters.  

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/newsletter-management.git
cd newsletter-management
````

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file:

```env
DATABASE_URL=your-database-url
EMAIL_SERVICE_API_KEY=your-sendgrid-or-nodemailer-key
JWT_SECRET=your-secret-key
```

### 4. Run the development server

```bash
npm run dev
```
