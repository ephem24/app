# `src` Directory

This directory contains the main source code for the frontend application. It is organized into the following subdirectories, each with a specific responsibility.

## Directory Structure

- **`/app`**: Contains the application's routes, pages, and layouts, following the Next.js App Router conventions.
  - **`/(auth)`**: Route group for authentication-related pages (e.g., login, signup).
  - **`/(dashboard)`**: Route group for the main application views after authentication.
  - **`/api`**: API routes for backend-for-frontend (BFF) logic or proxying requests.

- **`/components`**: Contains reusable React components.
  - **`/ui`**: Generic, unstyled UI components (e.g., `Button`, `Input`).
  - **`/common`**: Application-specific components used across multiple pages (e.g., `Header`, `Footer`).
  - **`/session`**: Components specifically for the live tutoring session view.

- **`/hooks`**: Contains custom React hooks for reusable logic (e.g., `useWebSocket`, `useSession`).

- **`/lib`**: Contains utility functions, helpers, and constants.

- **`/services`**: Contains modules for interacting with external APIs (e.g., the `app-prototype` backend).

- **`/styles`**: Contains global styles, Tailwind CSS configuration, and other styling-related files.

- **`/types`**: Contains TypeScript type definitions and interfaces for shared data structures.
