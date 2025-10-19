
# 📰 Newsletter Management System

This project implements a complete **Newsletter Management System** with subscription, creation, publishing, and distribution features.  
It provides a **Landing Page** for subscribers and an **Admin Panel** for administrators to manage newsletters.

---
<img width="1920" height="929" alt="Screenshot (11)" src="https://github.com/user-attachments/assets/fce258fd-6b64-4c9b-aad7-6db82ed9799a" />
<img width="1920" height="1080" alt="Screenshot (12)" src="https://github.com/user-attachments/assets/a93596c9-7be8-4f4d-8421-7f80e3212758" />
<img width="1920" height="1080" alt="Screenshot (13)" src="https://github.com/user-attachments/assets/c1359e9e-36b7-40c3-bf04-31550a69a1ef" />
<img width="1920" height="1080" alt="Screenshot (14)" src="https://github.com/user-attachments/assets/1d788604-3f5c-4239-abcc-d88ab6ff0bfd" />
<img width="1920" height="1080" alt="Screenshot (15)" src="https://github.com/user-attachments/assets/d6589f0c-10b0-4e07-990a-1b3164ab6bcf" />


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
