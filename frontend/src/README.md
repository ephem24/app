# `src` Directory: Core Application Source Code

This directory serves as the heart of the frontend application, housing all the core source code. It follows a structured and modular approach to ensure maintainability, scalability, and a clear separation of concerns. The organization within `src` aims to make it easy for developers to locate relevant code, understand its purpose, and contribute effectively.

## Guiding Principles for `src` Organization

-   **Modularity:** Each top-level directory within `src` encapsulates a distinct domain or type of functionality, allowing for independent development and testing of components.
-   **Separation of Concerns:** Code related to UI, business logic, API communication, and styling is kept in dedicated directories, preventing tight coupling and improving readability.
-   **Readability & Discoverability:** A consistent naming convention and clear folder structure help new contributors quickly understand the project layout.
-   **Reusability:** Components, hooks, and utility functions are designed to be generic and reusable across different parts of the application.

## Detailed Directory Structure

Here's a breakdown of each subdirectory within `src` and its primary responsibilities:

-   **`/app`**
    -   **Purpose:** Manages the application's routing, pages, and layouts using Next.js App Router conventions. This is where you define the user-facing routes and their corresponding UI.
    -   **Contents:**
        -   **`/(auth)`**: A [route group](https://nextjs.org/docs/app/building-your-application/routing/route-groups) for authentication-related pages, such as `login`, `signup`, or `forgot-password`. These typically share a common layout (e.g., a simple centered form).
        -   **`/(dashboard)`**: Another route group for the main application views, accessible after a user has authenticated. It contains pages like the session list, individual session views, or user profiles.
        -   **`/api`**: [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) that act as a Backend for Frontend (BFF) layer, proxying requests to backend services, handling authentication, or performing server-side utility functions.
        -   **`layout.tsx`**: Defines the UI shared across routes, such as navigation bars, footers, or global context providers.
        -   **`page.tsx`**: Renders the unique UI of a route.

-   **`/components`**
    -   **Purpose:** Stores all reusable React components. These are the building blocks of the user interface.
    -   **Contents:**
        -   **`/ui`**: Contains generic, presentation-agnostic UI primitives (e.g., `Button`, `Input`, `Card`). These components are often unstyled or have minimal styling and can be used in almost any part of the application.
        -   **`/common`**: Application-specific components that are used across multiple pages or sections (e.g., `Header`, `Footer`, `LoadingSpinner`). These components might incorporate application branding or more complex logic than `ui` components.
        -   **`/session`**: Houses components specifically designed for a particular feature or view, like the live tutoring session. Examples include `TranscriptDisplay`, `AIChatWindow`, or `SessionControls`. These often compose `ui` and `common` components.
    -   **Best Practices:** Components should primarily focus on rendering UI based on props, with business logic handled by hooks or services.

-   **`/hooks`**
    -   **Purpose:** Centralizes custom React Hooks to encapsulate and reuse stateful logic across components.
    -   **Contents:** Examples include `useWebSocket` (for managing WebSocket connections), `useSession` (for accessing and manipulating session state), or `useForm` (for form management).
    -   **Best Practices:** Custom hooks should always be prefixed with `use` (e.g., `useMyCustomHook`) and follow React Hooks rules.

-   **`/lib`**
    -   **Purpose:** Contains utility functions, helper modules, and constants that are not directly tied to React components or API interactions.
    -   **Contents:** Functions for date formatting, data validation, string manipulation, client-side authentication helpers, or shared constants (e.g., `constants.ts`).
    -   **Best Practices:** `lib` functions should be pure and free of side effects where possible.

-   **`/services`**
    -   **Purpose:** Provides dedicated modules for interacting with external APIs and backend services. This layer abstracts away the complexities of data fetching and ensures a clean separation between UI and data logic.
    -   **Contents:** `appPrototypeService.ts` (for communication with the `app-prototype` backend) and potentially `aiTutorService.ts` (for direct interaction with the `ai-tutor-module` if necessary).
    -   **Best Practices:** Services should handle API requests, responses, and errors. They should transform backend data into a format suitable for the frontend.

-   **`/styles`**
    -   **Purpose:** Manages global styling, Tailwind CSS configuration, and any custom CSS files.
    -   **Contents:** `globals.css` (for global styles and Tailwind imports), `tailwind.css` (for Tailwind directives), and a `README.md` explaining the styling methodology.
    -   **Best Practices:** Prefer Tailwind utility classes for styling. Use global CSS sparingly for base styles or third-party library overrides.

-   **`/types`**
    -   **Purpose:** Defines TypeScript type definitions and interfaces used across the entire frontend application. This ensures type safety and consistency.
    -   **Contents:** Separate `.d.ts` files for different data entities, such as `session.d.ts`, `transcription.d.ts`, `aiResponse.d.ts`.
    -   **Best Practices:** Keep type definitions aligned with backend API contracts. Use interfaces for object shapes and types for unions or aliases.