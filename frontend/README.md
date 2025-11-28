# Frontend

This directory contains the Next.js frontend application.

## Overview

This application provides the user interface for interacting with the AI Tutor. It allows users to start, manage, and view tutoring sessions. It communicates with the backend services (`app-prototype` and `ai-tutor-module`) to handle session logic, transcription, and AI-powered feedback.

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Jest](https://jestjs.io/) - Testing framework
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) - Testing utilities for React

## Getting Started

### Prerequisites

- Node.js (version specified in `.nvmrc`)
- pnpm (or npm/yarn)

### Installation

1.  **Clone the repository and submodules:**

    ```bash
    git clone --recurse-submodules <repository_url>
    cd app
    ```

2.  **Install frontend dependencies:**

    ```bash
    cd frontend
    pnpm install
    ```

### Running the Development Server

To run the frontend development server:

```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Development Scripts

- `pnpm dev`: Starts the development server.
- `pnpm build`: Creates a production build.
- `pnpm start`: Starts a production server.
- `pnpm lint`: Lints the codebase using ESLint.
- `pnpm test`: Runs tests using Jest.

## Project Structure

The project follows a modular structure, with a clear separation of concerns. For a detailed explanation of the directory structure, see the `frontend/src/README.md` file.