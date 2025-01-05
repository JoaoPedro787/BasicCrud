# Node API with JWT
### A basic API with JWT authentication using cookies, developed with Node.js, PostgreSQL, and React.js.

---

## Live Demo

[Click here to access](#)

> **Note:** The demo may experience issues if the PostgreSQL server is not active. For a stable experience, set up the project locally.

---

## 🛠️ Technologies

- **Backend**: Node.js, Express, PostgreSQL, JWT, Bcrypt.js, Cookie-parser, Vercel.
- **Frontend**: React.js, Tailwind CSS, Axios.

---

## 💻 Backend

### Features

- **JWT Authentication**: Tokens stored in HTTP-only cookies.
- **User Management**: Register and login with encrypted passwords.
- **CRUD**: Basic operations for user data.
- **Error Handling**: Clear responses for request and authentication errors.

---

## 🖥️ Frontend

### Features

- Registration and login forms.
- Authentication control using JWT in cookies.
- Secure access to protected routes.
- Dynamic interface integrated with the backend.

---

## 🎯 Goal

- Implement secure authentication with JWT.
- Integrate a React.js frontend with a Node.js API.
- Develop and host a functional full-stack application.

---

## ⚙️ Installation Instructions

1. Clone the repository:
    ```bash
    git clone https://github.com/JoaoPedro787/NodeAPi-JWT.git
    cd NodeAPi-JWT
    ```

2. Install dependencies:
    ### Backend
    ```bash
    cd backend
    npm install
    ```
    ### Frontend
    ```bash
    cd frontend
    npm install
    ```

3. Set up the PostgreSQL database:
    - Install PostgreSQL
    - Create the database:
      ```sql
      CREATE DATABASE nodeAPI;
      \c nodeAPI;

      CREATE TABLE users (
          i_id_user SERIAL PRIMARY KEY,
          s_email_user VARCHAR(255) NOT NULL UNIQUE,
          s_password_user VARCHAR(255) NOT NULL,
      );
      ```
    - Add your configurations to the `.env` file in the backend:
      ```env
      DB_HOST=localhost
      DB_USER=your_username
      DB_PASS=your_password
      DB_NAME=api_auth_db
      JWT_SECRET=your_secret_key
      PORT=5000
      ```

4. Start the project:
    ### Backend
    ```bash
    cd backend
    npm start
    ```
    ### Frontend
    ```bash
    cd frontend
    npm start
    ```

5. Access the project in your browser:
    - Backend: `http://localhost:5000`
    - Frontend: `http://localhost:3000`

---

## 🛡️ Security

- JWT tokens stored in HTTP-only cookies.
- Passwords encrypted using Bcrypt.
- Token validation for all protected routes.

---

## 📊 Status

- **Progress**: 35%

---
