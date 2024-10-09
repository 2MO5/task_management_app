# Task Management System

## Overview

A comprehensive task management system designed to facilitate project tracking and task organization. This application leverages modern technologies such as React, Node.js, TypeScript, and MongoDB, and adheres to object-oriented design principles to ensure maintainability and scalability.

## Features

### User Management

- **User Roles**: Supports multiple user roles (RegularUser and AdminUser) with distinct permissions.
- **Registration/Login**: Users can create accounts and log in securely.
- **Profile Management**: Users can update their profiles.

### Task Management

- **CRUD Operations**: Users can create, read, update, and delete tasks.
- **Task Assignments**: Tasks can be assigned to users based on roles.
- **Task Status**: Track the status of tasks (e.g., To Do, In Progress, Done).

### Project Management

- **Projects**: Users can create and manage projects containing multiple tasks.
- **Task Comments**: Users can add and delete comments on tasks for better collaboration.

### Object-Oriented Design Principles

- **Inheritance**: Base class for users with specific roles extending functionality.
- **Polymorphism**: Override methods for different user roles.
- **Encapsulation**: Control access to user data with getters and setters.
- **Abstraction**: Define interfaces for task actions and comments.
- **Composition**: Projects contain multiple tasks, allowing for flexible relationships.

## Technologies Used

- **Frontend**: React, TypeScript, Styled Components, Redux Toolkit
- **Backend**: Node.js, Express.js, TypeScript
- **Database**: MongoDB (M0 plan for learning)

## Software Architecture

- **Backend**: RESTful API with Express, using controllers for handling requests, services for business logic, and models for database interaction.
- **Frontend**: Component-based architecture using React, with a Redux store for state management.

## Installation

### Prerequisites

- Node.js
- MongoDB account

### Clone the Repository

```bash
git clone https://github.com/yourusername/task-management-system.git
cd task-management-system
```
