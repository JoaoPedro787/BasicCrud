# API with Node.js, Express, and MySQL  
### This project consists of a basic API developed with Node.js, Express, and MySQL, integrated with a React JS frontend.

---

## Live Demo

[Click here to access the site](https://joaopedro787.github.io/QuickAPIdeploy/)

> **Note:** The live demo may experience issues if the MySQL database server has expired. Please try again later or set up your own local environment for a more stable experience.

---

## 🛠️ Technologies Used

- **Backend**: Node.js, Express, MySQL (TiDB), and Vercel (for hosting the server)
- **Frontend**: React JS, Tailwind CSS, and Axios (for API requests)

---

## 💻 Backend

### Backend Features

- **CRUD Operations**: Create, Read, Update, and Delete records from the MySQL database.
- **Database Interaction**: Data is stored and retrieved from a MySQL database.
- **Error Handling**: The API includes error handling for invalid requests and server issues.

---

## 🖥️ Frontend and API Integration

The frontend was developed using React JS. The communication with the API is done via HTTP requests using Axios.

### Frontend Features
- Displaying a list of records obtained from the API.
- Forms for creating, updating, and deleting records.
- Dynamic interface updates based on backend responses.

---

## 🎯 Project Goal

This project was developed with a primary focus on enhancing my skills and knowledge in key areas of full-stack development. It allowed me to dive deep into both backend and frontend development, gaining valuable hands-on experience in the following aspects:

- **Building RESTful APIs with Node.js and Express**: Creating a robust and scalable API using Express, and learning how to structure and manage APIs effectively.
  
- **Database Management with MySQL**: Setting up and managing a MySQL database, designing schemas, and handling CRUD operations securely and efficiently.

- **Connecting the Frontend with the Backend**: Building a dynamic frontend with React JS and connecting it seamlessly to the backend API using Axios.

- **Error Handling and Debugging**: Refining problem-solving and debugging skills by resolving issues related to database connections, API requests, and front-end updates.

- **Full-Stack Development**: Combining frontend (React) with backend (Node.js, Express, MySQL), and gaining insight into the full-stack workflow.

- **Deployment Experience**: Deploying the project on Vercel and understanding how to prepare a project for production, manage environments, and ensure stability in real-world use.

---

## ⚙️ Installation Instructions

1. **Clone this repository**:
    ```bash
    git clone https://github.com/JoaoPedro787/BasicBackend.git
    cd BasicBackend
    ```

2. **Install dependencies**:
    - **Backend**:
      ```bash
      cd backend
      npm install
      ```
    - **Frontend**:
      ```bash
      cd frontend
      npm install
      ```

3. **Install MySQL and create the database**:
    - If you don't have MySQL installed, you can download it [here](https://dev.mysql.com/downloads/installer/).
    - Once installed, start the MySQL server and execute the following commands to set up the database:
      ```sql
      CREATE DATABASE IF NOT EXISTS nodeAPI;
      USE nodeAPI;

      CREATE TABLE IF NOT EXISTS users (
          id INT AUTO_INCREMENT PRIMARY KEY,
          email VARCHAR(255) NOT NULL UNIQUE,
          password VARCHAR(255) NOT NULL,
          created_in TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
      ```
    - Configure the database connection in your backend by creating a `.env` file with your MySQL connection details:
      ```
      DB_HOST=localhost
      DB_USER=root
      DB_PASS=yourpassword
      DB_NAME=nodeAPI
      DB_PORT=3306
      ```

4. **Start the project**:
    - **Backend**:
      ```bash
      cd backend
      npm start
      ```
    - **Frontend**:
      ```bash
      cd frontend
      npm start
      ```

5. **Open the project in your browser**:
    - Backend: `http://localhost:5000` or `http://localhost:5500`
    - Frontend: `http://localhost:3000`
