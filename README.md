## Full Stack Assessment - Task No. 002
## Company: Upskill Tech Solution Pvt Ltd

### Assessment Completion Date: [Current Date]
### Submission Deadline: [Current Date + 3 days]

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Assessment Requirements](#assessment-requirements)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Setup & Installation](#setup--installation)
6. [Database Configuration](#database-configuration)
7. [Running the Project](#running-the-project)
8. [API Documentation](#api-documentation)
9. [Assessment Checklist](#assessment-checklist)
10. [Additional Notes](#additional-notes)

---

## 1. Project Overview

A complete full-stack web application for contact and task management built as per the assessment requirements. The application implements user authentication, contact management, address storage, task tracking, and email logging simulation.

### Key Features Implemented:
- ✅ User authentication with JWT tokens (15-minute expiry)
- ✅ Contact management with addresses
- ✅ Task management linked to contacts
- ✅ Email simulation with database logging
- ✅ Auto logout after 15 minutes
- ✅ Responsive UI without external libraries
- ✅ Comprehensive validation on all levels
- ✅ Database triggers and constraints

---

## 2. Assessment Requirements

### ✅ **Backend Requirements - COMPLETED**
- **Node.js + Express backend** - Complete REST API implemented
- **MySQL database** - 5 tables with proper relationships
- **bcrypt password hashing** - Secure password storage
- **Token-based auth with 15 min expiry** - JWT implementation
- **Logging middleware** - Request logging implemented
- **DB triggers for full_name** - AUTO GENERATED COLUMN in MySQL
- **Email simulation stored in email_logs** - Complete logging system

### ✅ **Frontend Requirements - COMPLETED**
- **React application** - Complete frontend with Vite
- **No UI libraries allowed** - Custom CSS implementation
- **Store token in localStorage** - Secure token management
- **Auto logout after 15m** - Token expiry handling
- **Required Pages**:
  - Login Page ✓
  - Dashboard ✓
  - Contacts ✓
  - Address ✓
  - Tasks ✓

### ✅ **Database Requirements - COMPLETED**
- **Users Table** with all specified columns and constraints
- **Users Contact Table** with unique contact per user
- **Contact Address Table** with proper relationships
- **Users Task Table** with contact validation
- **Email Logs Table** for simulation logging

---

## 3. Tech Stack

### Backend:
- **Runtime**: Node.js 18+
- **Framework**: Express.js 4.x
- **Database**: MySQL 8.0+
- **Authentication**: JWT with 15-minute expiry
- **Security**: bcrypt, Helmet, CORS
- **Validation**: Joi, express-validator
- **Logging**: Morgan middleware

### Frontend:
- **Framework**: React 18+
- **Build Tool**: Vite
- **Routing**: React Router DOM 6
- **HTTP Client**: Fetch API
- **State Management**: React Hooks
- **Styling**: Custom CSS (No external UI libraries)
- **Token Storage**: localStorage with expiry tracking

### Database:
- **MySQL 8.0+**
- **Constraints**: UNIQUE, FOREIGN KEY, CHECK
- **Triggers**: For data integrity
- **Indexes**: Performance optimization
- **Views**: Simplified queries

---

## 4. Project Structure

### Backend Structure:

backend/
├── db/
│ ├── database_dump.sql # Complete database export
│ ├── schema.sql # Database schema
│ ├── triggers.sql # Database triggers
│ └── seeds.sql # Sample data
├── src/
│ ├── config/ # Configuration files
│ ├── controllers/ # Request handlers
│ ├── middleware/ # Custom middleware
│ ├── models/ # Database models
│ ├── routes/ # API routes
│ ├── utils/ # Utility functions
│ ├── app.js # Express app setup
│ └── server.js # Server entry point
├── .env.example # Environment template
└── package.json # Dependencies



### Frontend Structure:

frontend/
├── src/
│ ├── components/ # Reusable components
│ │ ├── Auth/ # Authentication components
│ │ ├── Contacts/ # Contact management
│ │ ├── Tasks/ # Task management
│ │ └── Layout/ # Layout components
│ ├── pages/ # Application pages
│ │ ├── Login.jsx # Login page
│ │ ├── Dashboard.jsx # Dashboard page
│ │ ├── Contacts.jsx # Contacts page
│ │ ├── Addresses.jsx # Addresses page
│ │ └── Tasks.jsx # Tasks page
│ ├── services/ # API services
│ ├── utils/ # Utility functions
│ ├── hooks/ # Custom React hooks
│ ├── styles/ # CSS styles
│ └── main.jsx # Application entry
├── .env.example # Frontend environment
├── package.json # Dependencies
└── README.md # Frontend documentation


---

## 5. Setup & Installation

### Prerequisites:
- Node.js 18+ installed
- MySQL 8.0+ installed and running
- Git installed
- Code editor (VS Code recommended)

### Step 1: Clone the Repository
```bash
git clone [repository-url]
cd upskill-project
```

### Step 2: Backend Setup
cd backend

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env file with your database credentials

### Step 3: Database Setup
# Navigate to db directory
cd db

# Import the database
mysql -u root -p < database_dump.sql
# Enter your MySQL password when prompted

### Step 4: Frontend Setup
cd frontend

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Set your backend API URL

## 6. Database Configuration
Database Details:
Database Name: upskill_db

Host: localhost (default)

Port: 3306 (default)

Username: root (or your MySQL username)

Password: [your MySQL password]

Tables Created:
users - User authentication and profiles

user_contacts - Contact information

contact_addresses - Address details

user_tasks - Task management

email_logs - Email simulation logs

Key Database Features:
full_name column auto-generated by MySQL (GENERATED COLUMN)

Unique constraints on email and phone

Foreign key relationships with CASCADE/SET NULL

Check constraints for phone validation (10 digits)

Database triggers for data integrity

Indexes for performance optimization

Sample Database Credentials:
-- Admin User
Email: admin@example.com
Password: Admin@123

-- Regular Users
Email: john.doe@example.com
Password: Test@123

Email: jane.smith@example.com
Password: Test@123

## 7. Running the Project
Start Backend Server:
cd backend
npm run dev
# Server runs on http://localhost:4000

Start Frontend Application:
cd frontend
npm run dev
# Application runs on http://localhost:5173

Access the Application:
Open browser and navigate to: http://localhost:5173

Login with provided credentials

Explore all features:

Dashboard overview

Contact management

Address management

Task management

Available Scripts:
{
  "backend": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js",
    "db:init": "node db/init_database.js"
  },
  "frontend": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}

## 8. API Documentation
Base URL: http://localhost:4000/api
Authentication Endpoints:

Method	Endpoint	     Description
POST	 /auth/register	 Register new user
POST	 /auth/login	   User login (returns JWT)
POST	 /auth/logout	   User logout

User Endpoints:
Method	Endpoint	      Description
GET	    /users/profile	Get user profile
PUT	    /users/profile	Update user profile

Contact Endpoints:
Method	Endpoint	     Description
GET	    /contacts	     Get all user contacts
POST	  /contacts	     Create new contact
PUT	    /contacts/:id	 Update contact
DELETE	/contacts/:id	 Delete contact

Task Endpoints:
Method	Endpoint	  Description
GET	    /tasks	    Get all user tasks
POST	  /tasks	    Create new task
PUT	    /tasks/:id	Update task
DELETE	/tasks/:id	Delete task


Request Headers:
Authorization: Bearer <jwt_token>
Content-Type: application/json

## 9. Assessment Checklist
Requirement	Status	        Implementation   Details
full_name maintained by DB	✅ COMPLETED	   MySQL GENERATED COLUMN in users table
Proper validations	        ✅ COMPLETED	   Frontend + backend + database validation
Unique constraints enforced	✅ COMPLETED	   Database-level UNIQUE constraints
Token expiry handled	      ✅ COMPLETED	   JWT 15m expiry + auto logout hook
Email logs inserted	        ✅ COMPLETED	   email_logs table with simulation
Clean UI	                  ✅ COMPLETED	   Custom CSS, responsive design
Complete repo	              ✅ COMPLETED	   GitHub repository with all files
Database dump included	    ✅ COMPLETED	   database_dump.sql in db folder

## 10. Additional Notes

Assumptions Made:
1.MySQL 8.0+ is available with proper permissions

2.Node.js 18+ is installed on the system

3.Application runs in development environment

4.Email simulation only logs to database (no actual emails sent)

Technical Decisions:
1.Chose MySQL GENERATED COLUMN over trigger for full_name for better performance

2.Implemented composite unique key for user_contacts (user_id + contact_number)

3.Used bcrypt with 10 salt rounds for password security

4.Created database triggers for data integrity validation

5.Implemented connection pooling for database performance

Security Measures:
1.Password hashing with bcrypt

2.JWT tokens with 15-minute expiry

3.Input sanitization on all endpoints

4.SQL injection prevention with parameterized queries

5.CORS configuration for frontend-backend communication

6.Environment variables for sensitive data
