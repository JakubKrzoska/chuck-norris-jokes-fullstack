# 🥋 Chuck Norris Jokes App

A modern, full-stack application designed to explore, impersonate, and collect the legendary humor of Chuck Norris. This project was built to demonstrate a clean integration between a **NestJS** backend and a **React** frontend, following professional design patterns and architectural best practices.

---

## 🚀 Features

*   **Secure Authentication**: User registration and login system utilizing email and password credentials" .
*   **Initial Engagement**: Upon logging in, users are immediately presented with a random Chuck Norris joke.
*   **Dynamic Joke Drawing**: Fetch random jokes from the official Chuck Norris API, with optional category filtering (e.g., "Explicit", "Travel").
*   **Impersonation Engine**: Real-time name replacement logic that swaps "Chuck Norris" with any user-inputted name across the UI and joke content.
*   **Personal Collection**: A "Save this joke" feature allows users to persist favorite jokes to their account.
*   **Joke Management**: Dedicated "My Jokes" page to view the saved collection and erase specific entries.
*   **Custom Content**: An "Add Joke" page with a form for manually entering new jokes into the collection.
*   **Session Control**: Complete logout functionality to secure user sessions.
*   **Responsive Design**: A pixel-perfect implementation of Figma designs using Material UI components.

---

## 🛠️ Tech Stack

### Frontend
*   **React** (Vite)
*   **TypeScript**
*   **Material UI (MUI)**: For component architecture, layout, and global theming
*   **React Router**: For client-side navigation between Auth, Random, My Jokes, and Add Joke pages

### Backend
*   **NestJS**: Modular architecture for a scalable and maintainable server-side
*   **TypeORM**: Object-Relational Mapping for database interactions
*   **SQLite**: Lightweight, file-based relational database for easy portability
*   **Passport.js & JWT**: Secure authentication strategies and session handling
*   **Bcrypt**: Industry-standard password hashing for secure user storage

---

## 📂 Project Structure
```text
CHUCK-NORRIS-JOKES/
├── backend/           # NestJS server and API logic
│   ├── src/
│   │   ├── auth/      # JWT & Passport login/registration logic
│   │   ├── jokes/     # Joke CRUD and collection management
│   │   └── users/     # User entity and data management
├── frontend/          # React application
│   ├── src/
│   │   ├── components/ # Reusable UI layout and auth components
│   │   ├── pages/      # Views: Login, SignUp, RandomJoke, MyJokes, AddJoke
│   │   └── theme/      # Custom Material UI theme configurations
└── README.md          # Comprehensive project documentation
```
---

## ⚙️ Getting Started

To run this project locally, follow these steps:

### 1. Prerequisites
*   Node.js (v18 or higher)
*   npm or yarn

### 2. Backend Setup

Before setting up the individual services, install the dependencies in the root folder to ensure the workspace is correctly initialized:

1.  ```bash
    # In the CHUCK-NORRIS-JOKES root directory
    npm install
    ```
2.  Navigate to the backend directory:
    ```bash
    cd backend
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Start the server:
    ```bash
    npm run start:dev
    ```
    *   The server will start on `http://localhost:3000`.
    *   The SQLite database file (`db.sqlite`) will be generated automatically on the first run using TypeORM's synchronize feature.

### 3. Frontend Setup
1.  Open a new terminal and navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
    *   The app will be available at `http://localhost:5173`.

---

## 📝 Implementation Details

*   **Architecture**: Followed the Controller-Service-Repository pattern in NestJS to ensure separation of concerns and maintainability.
*   **Authentication**: Implemented JWT-based security allowing users to register and log in via email and password.
*   **Performance Optimization**: Utilized React hooks such as `useMemo` for the impersonation logic to ensure smooth name replacement without unnecessary API calls.
*   **Theming & UX**: 
    *   Used global Material UI theme overrides to maintain consistent input borders and focus states.
    *   Implemented a custom hover effect on the "My Jokes" list that changes the background to `#E5B4C6` and highlights the remove icon.
    *   Added form validation that disables action buttons until all required fields are populated.
*   **Chuck Norris Logic**: Integrated the official Chuck Norris API to support random draws, category filtering, and custom name replacement. 

---

## 👤 Author

*   **Jakub Krzoska**
*   GitHub: [@JakubKrzoska](https://github.com/JakubKrzoska)
