# Task Management System

## Overview

This is a **Task Management System** built with the **MERN Stack** (MongoDB, Express, React, and Node.js), leveraging **TypeScript** for both frontend and backend development. The system allows users to manage tasks with features like adding, editing, deleting, filtering, and more advanced features like authentication, real-time updates, and project management.

We aim to implement design patterns like **Factory**, **Observer**, and **Strategy**, with a **Redux Toolkit** for state management. The project follows best practices in software engineering including CI/CD pipelines.

## Features

1. **User Management**:

   - Authentication (Login, Register).
   - Role-based access (Admin, User).

2. **Task Management**:

   - Add new tasks.
   - Edit existing tasks.
   - Delete tasks.
   - Assign tasks to users.
   - Set priorities and due dates for tasks.
   - Organize tasks into projects.

3. **Advanced Features**:

   - Real-time updates with WebSockets.
   - Task filtering and sorting by priority, due date, status, etc.
   - Task history and audit logs.
   - Notifications for task updates and deadlines.
   - Dark Mode.

4. **Project Management**:

   - Create, edit, and delete projects.
   - Assign tasks to projects.
   - Project-level reports and analytics.

5. **State Management**:

   - Uses **Redux Toolkit** for efficient state management.

6. **CI/CD Pipeline**:

   - Full automation of builds, tests, and deployment using GitHub Actions and deployment services like **Render** or **AWS Free Tier**.

7. **Responsive Design**:
   - The app is mobile-friendly, supporting different screen sizes.

## Tech Stack

### Frontend:

- **React** (with Vite for development setup).
- **TypeScript**.
- **Redux Toolkit** for state management.
- **CSS Modules** or **Styled Components** for styling.
- **Axios** for API requests.
- **Jest** for testing.

### Backend:

- **Node.js** with **Express**.
- **MongoDB** for the database (hosted on MongoDB Atlas).
- **Mongoose** for database ORM.
- **TypeScript** for backend logic.
- **JWT Authentication** for user management.
- **WebSockets** for real-time updates.

### DevOps (CI/CD):

- **GitHub Actions** for continuous integration.
- **Docker** for containerization (optional).
- **Render** / **AWS Free Tier** for deployment.

## Folder Structure
