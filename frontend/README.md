#  Frontend User Interface

> The web interface for the AI Tutor Platform, providing real-time session management, live transcription, and AI-powered feedback.

[![Next.js](https://img.shields.io/badge/Next.js-14+-black.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3+-green.svg)](https://tailwindcss.com/)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Quick Start](#quick-start)
- [Usage](#usage)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

This Next.js application serves as the user-facing interface for the AI Tutor Platform. It allows users to:

1.  **Initiate tutoring sessions** by providing a Google Meet URL and session details.
2.  **View a live transcript** of the conversation, with clear speaker separation.
3.  **Receive real-time suggestions** and feedback from the AI tutor.
4.  **Manage and end sessions** through a simple control panel.

The application is designed to be a "thin client," focusing on presenting data and capturing user input, while all heavy lifting (audio processing, transcription, AI analysis) is handled by the backend services (`app-prototype` and `ai-tutor-module`).

---

## ✨ Features

- ✅ **Session Initiation Form:** Start a new session by providing a Google Meet URL, topic, and grade level.
- ✅ **Live Session Dashboard:** A real-time view of the ongoing session.
- ✅ **Live Transcript Display:** See the conversation transcribed as it happens.
- ✅ **AI Chat Window:** View suggestions, questions, and feedback from the AI tutor in real-time.
- ✅ **Session Controls:** Easily end a session.
- ✅ **Responsive Design:** The interface is designed to work on various screen sizes.
- ✅ **Modular and Scalable:** Built with a clean, component-based architecture for easy maintenance and expansion.

---

## 🏗️ Architecture

The frontend application communicates primarily with the `app-prototype` backend service, which acts as a gateway to the core AI functionalities.

```
┌─────────────────────────────┐      ┌──────────────────────────┐
│      AI-Tutor Module      │◀────-│      App Prototype       │
│ (Core AI, Port 5050)      │      │ (Bot/Orchestrator, Port 5000) │
└─────────────────────────────┘      └──────────┬───────────────┘
                                                │
                                                │ REST API & WebSocket
                                                │
                                                ▼
┌─────────────────────────────┐
│       Frontend (UI)         │
│ (Next.js, Port 3000)      │
└─────────────────────────────┘
```

**Data Flow:**

1.  **User fills out form** on the frontend to start a session.
2.  **Frontend sends a `POST` request** to `app-prototype`'s `/session/start` endpoint.
3.  **`app-prototype` starts the Google Meet bot** and establishes a connection with the `ai-tutor-module`.
4.  **Frontend establishes a WebSocket connection** to `app-prototype` to receive live data.
5.  **`app-prototype` streams** transcription and AI responses to the frontend via the WebSocket.
6.  **Frontend displays** the live data in the dashboard.

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v20 or later)
- pnpm (or npm/yarn)
- All backend services (`ai-tutor-module` and `app-prototype`) must be running.

### Installation & Running

1.  **Navigate to the `frontend` directory:**
    ```bash
    cd frontend
    ```

2.  **Install dependencies:**
    *(This was likely done during the initial setup)*
    ```bash
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    pnpm dev
    ```

4.  **Access the application:**
    Open your web browser and navigate to **`http://localhost:3000`**.

---

## 🎮 Usage

### Starting a Session

1.  Open the application in your browser.
2.  You will be presented with a form to "Start a New Tutoring Session".
3.  Fill in the following fields:
    *   **Google Meet URL:** The full URL of the Google Meet session you want the bot to join.
    *   **Topic:** The topic of the tutoring session (e.g., "Algebra 1").
    *   **Grade Level:** The grade level of the student (e.g., "9th Grade").
4.  Click the **"Start Session"** button.

### Live Session View

After starting a session, you will be redirected to the live session dashboard, which includes:

-   **Live Transcript:** A running log of the conversation.
-   **AI Tutor:** A window displaying feedback and suggestions from the AI.
-   **Session Controls:** A panel with a button to end the session.

---

## 🔧 Troubleshooting

### Application does not load or shows an error

-   **Verify backend services are running:** Ensure that both the `ai-tutor-module` and `app-prototype` services are running without errors in their respective terminals.
-   **Check the console:** Open your browser's developer tools (F12 or Ctrl+Shift+I) and check the Console tab for any error messages.

### Session does not start after clicking the button

-   **Check the `app-prototype` terminal:** Look for any error messages in the terminal where you are running the `app-prototype` service. It will provide logs about whether it was able to start the session and join the Google Meet.

### No live data is appearing in the dashboard

-   **Verify WebSocket connection:** Check the browser's developer tools Network tab to see if the WebSocket connection to `ws://localhost:5000` was established successfully.
-   **Check `app-prototype` logs:** Ensure that `app-prototype` is receiving audio and sending data to the `ai-tutor-module`.

---

## 🤝 Contributing

We welcome contributions! Please see the main project's `CONTRIBUTING.md` for general guidelines.

### Frontend Development

-   **Code Style:** We use ESLint and Prettier (via `eslint-config-next`) to maintain a consistent code style.
-   **Component Structure:** Follow the existing component structure (`ui`, `common`, feature-specific).
-   **State Management:** Use the `useSession` hook and React Context for global state.

---

## 📄 License

This project is licensed under the MIT License - see the main project's `LICENSE` file for details.
