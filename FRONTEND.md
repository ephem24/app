# Frontend Development Plan (Next.js)

This document outlines the plan for developing the frontend application using Next.js, integrating with the existing `app-prototype` and `ai-tutor-module` backend services. The primary focus is on modularity, reusability, and maintainability, aligning with the project's existing architectural principles.

---

## 1. Architectural Decision: Monorepo Structure

To maintain modularity while enabling streamlined development and sharing of types/configurations, the frontend will reside in a dedicated `frontend/` directory within the existing workspace, forming a monorepo-like structure.

```
/home/ephem/workspace/app/
├── ai-tutor-module/  # Existing Python backend service (AI core)
├── app-prototype/    # Existing Python backend service (Google Meet integration, Transcription, Orchestration)
├── frontend/         # New Next.js application
└── ...
```

This approach allows each service to be developed and deployed independently if needed, while benefiting from centralized tooling and clearer project overview.

### How Backend Repos Will Be Used with the Frontend:

*   **`app-prototype` (AI Tutor Streaming Bot):** This service will be the primary gateway for the frontend.
    *   The frontend will make **REST API calls** to `app-prototype` for:
        *   Initiating and managing tutoring sessions (e.g., `POST /session/start`, `POST /session/{session_id}/stop`).
        *   Fetching session status (`GET /session/{session_id}/status`).
    *   The frontend will establish a **WebSocket connection** with `app-prototype` (`ws://localhost:5000/session/{session_id}`) to receive real-time updates, including:
        *   Live transcriptions from Google Meet.
        *   Real-time AI tutor responses/suggestions.
        *   Session events and status changes.

*   **`ai-tutor-module` (AI Tutor Platform):** `app-prototype` acts as the intermediary for most interactions with `ai-tutor-module`.
    *   The frontend generally *will not* directly interact with `ai-tutor-module` initially, as `app-prototype` is designed to handle the streaming and AI integration.
    *   **Potential Direct Interaction (Future/Optional):** If `ai-tutor-module` exposes specific REST endpoints for functionalities like document upload to its vector store or fetching static `TutorReport` summaries independently of a live session, the frontend *could* be extended to interact with these endpoints directly. This would require careful consideration of API exposure, security, and data flow to avoid bypassing `app-prototype`'s orchestration.

---

## 2. Frontend Technology: Next.js (React/TypeScript)

Next.js has been selected for its strong capabilities in building modern, scalable React applications. Key features include:

*   **Server-Side Rendering (SSR) / Static Site Generation (SSG):** For performance and SEO benefits.
*   **API Routes:** Can be used to create backend for frontend (BFF) layers if needed, or to proxy requests to backend services.
*   **TypeScript Support:** Ensures type safety and improves developer experience.
*   **File-system Based Routing:** Simplifies page creation and organization.
*   **Robust Ecosystem:** Leveraging React's vast component library and tooling.

---

## 3. Proposed Folder Structure and Modularity

The Next.js project will follow a structured and modular approach, emphasizing clear separation of concerns.

```
frontend/
├── .next/                    # Next.js build output (ignored by Git)
├── public/                   # Static assets (images, fonts)
├── src/                      # Main application source code
│   ├── app/                  # App Router: Pages, layouts, templates, loading, error, routes.
│   │   ├── (auth)/           # Route group for authentication-related pages (login, signup)
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   ├── (dashboard)/      # Route group for main application views
│   │   │   ├── session/[id]/ # Dynamic route for individual tutoring sessions
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx      # Dashboard homepage (e.g., list of sessions, start new session)
│   │   ├── api/              # Next.js API Routes (Backend for Frontend, proxy, or utility APIs)
│   │   │   └── session/
│   │   │       ├── start/route.ts
│   │   │       └── [id]/route.ts
│   │   └── layout.tsx        # Root layout for the application
│   │   └── page.tsx          # Root page (e.g., landing page or redirect)
│   ├── components/           # Reusable UI components (pure UI, no business logic)
│   │   ├── ui/               # Generic UI components (buttons, input fields, cards - potentially from a UI library)
│   │   │   ├── Button.tsx
│   │   │   └── Input.tsx
│   │   ├── common/           # Application-specific common components (e.g., Header, Footer, LoadingSpinner)
│   │   │   ├── Header.tsx
│   │   │   └── LoadingSpinner.tsx
│   │   ├── session/          # Components related to a tutoring session (e.g., TranscriptDisplay, AIChatWindow, SessionControls)
│   │   │   ├── TranscriptDisplay.tsx
│   │   │   ├── AIChatWindow.tsx
│   │   │   └── SessionControls.tsx
│   │   └── README.md         # Explains component organization and usage
│   ├── hooks/                # Custom React Hooks for reusable logic (e.g., useWebSocket, useSession)
│   │   ├── useWebSocket.ts
│   │   └── useSession.ts
│   │   └── README.md
│   ├── lib/                  # Utility functions, helpers, constants (e.g., api.ts for API clients)
│   │   ├── constants.ts
│   │   ├── utils.ts
│   │   ├── api.ts            # Centralized API client for app-prototype
│   │   └── README.md
│   ├── services/             # Dedicated modules for interacting with external APIs (e.g., app-prototype client)
│   │   ├── appPrototypeService.ts  # Handles all API/WebSocket communication with app-prototype
│   │   └── aiTutorService.ts       # (Optional) Handles direct API communication with ai-tutor-module
│   │   └── README.md
│   ├── styles/               # Global styles, Tailwind CSS configuration, utility classes
│   │   ├── globals.css
│   │   ├── tailwind.css
│   │   └── README.md
│   ├── types/                # TypeScript type definitions and interfaces for shared data structures
│   │   ├── session.d.ts      # Types for session data
│   │   ├── transcription.d.ts # Types for transcription chunks
│   │   ├── aiResponse.d.ts   # Types for AI tutor responses
│   │   └── README.md
│   └── README.md             # Explains the overall src directory structure
├── .env.local                # Environment variables (ignored by Git)
├── .eslintrc.json            # ESLint configuration
├── .gitignore
├── next-env.d.ts             # Next.js environment types
├── next.config.mjs           # Next.js configuration
├── package.json              # Project dependencies and scripts
├── pnpm-lock.yaml / yarn.lock / package-lock.json # Lock file
├── postcss.config.js         # PostCSS configuration
├── README.md                 # Main project README for the frontend
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── webpack.config.js         # Webpack configuration (if needed for custom setups)
```

### Purpose of Key Directories and their `README.md` content:

*   **`frontend/README.md`**:
    *   **Purpose:** The main entry point for understanding the frontend project.
    *   **Content:** Project overview, setup instructions, development scripts, deployment guides, key architectural decisions, and links to other important documentation (like this `FRONTEND.md`).
*   **`frontend/src/README.md`**:
    *   **Purpose:** Explains the overall structure and philosophy of the `src` directory.
    *   **Content:** A high-level overview of each top-level directory within `src` (`app`, `components`, `hooks`, `lib`, `services`, `styles`, `types`), describing their responsibilities and how they contribute to modularity.
*   **`frontend/src/app/README.md`**:
    *   **Purpose:** Details the application routing and page structure using Next.js App Router.
    *   **Content:** Explanation of route groups, dynamic routes, nested layouts, and how pages (`page.tsx`) and API routes (`route.ts`) are organized.
*   **`frontend/src/components/README.md`**:
    *   **Purpose:** Guide to creating and organizing reusable UI components.
    *   **Content:** Principles for component design (e.g., separation of concerns, presentation vs. container), naming conventions, and explanation of `ui/` (generic) vs. `common/` (app-specific) vs. feature-specific component directories.
*   **`frontend/src/hooks/README.md`**:
    *   **Purpose:** Document custom React Hooks for encapsulating reusable logic.
    *   **Content:** Guidelines for creating hooks, examples of common use cases (e.g., state management, side effects, API calls), and how to maintain their reusability.
*   **`frontend/src/lib/README.md`**:
    *   **Purpose:** Explains the role of utility functions, helpers, and constants.
    *   **Content:** Examples of generic utilities (e.g., date formatting, validation), shared constants, and how to organize API client configurations if not handled by a dedicated `services` layer.
*   **`frontend/src/services/README.md`**:
    *   **Purpose:** Details how the frontend interacts with backend APIs.
    *   **Content:** Explanation of `appPrototypeService.ts` for managing all interactions with `app-prototype` (REST and WebSocket), and potentially `aiTutorService.ts` if direct communication with `ai-tutor-module` is implemented. Emphasizes error handling, request/response structures, and authentication.
*   **`frontend/src/styles/README.md`**:
    *   **Purpose:** Describes the styling methodology.
    *   **Content:** Explanation of global styles, Tailwind CSS integration and configuration, responsive design patterns, and how to maintain a consistent visual language.
*   **`frontend/src/types/README.md`**:
    *   **Purpose:** Defines the TypeScript type definitions and interfaces used across the frontend.
    *   **Content:** Importance of type safety, how to define types for API responses, component props, and global state, ensuring consistency with backend data models where applicable.

---

## 4. Core UI/UX Design

The frontend will provide an intuitive interface for managing tutoring sessions.

*   **Session Initiation Form:**
    *   Input fields for Google Meet URL, topic, and grade level.
    *   Validation and clear error messages.
    *   A "Start Session" button that triggers `app-prototype`'s API.
*   **Live Session Dashboard:**
    *   **Transcript Display:** A scrollable area showing live transcriptions, clearly distinguishing between speakers (Tutor vs. Student).
    *   **AI Chat Window:** A dedicated section to display real-time AI tutor responses, suggestions, or questions. This could include conversational elements or structured feedback.
    *   **Session Controls:** Buttons for "End Session," "Pause/Resume Transcription" (if supported by `app-prototype`), and potentially a "Generate Summary" or "Download Report" button (if `ai-tutor-module` provides an API for this).
    *   **Status Indicators:** Display connection status to `app-prototype` and `ai-tutor-module`, session timer, and any active alerts.
*   **History/Reports View (Future):** A page to browse past sessions and access generated reports (if `ai-tutor-module` or `app-prototype` provides this data).

---

## 5. API Integration

All API calls and WebSocket connections will be encapsulated within the `services/` layer, particularly `appPrototypeService.ts`, to ensure a clean separation of concerns and ease of testing.

*   **REST API Calls:** Using `fetch` or a library like `axios` within `appPrototypeService.ts` to handle session management.
*   **WebSocket Connection:** A custom hook (`useWebSocket.ts`) or a dedicated client in `appPrototypeService.ts` will manage the WebSocket lifecycle, including connection, reconnection logic, message parsing, and error handling. It will provide a stream of processed data (transcriptions, AI responses) to relevant UI components.

---

## 6. State Management

For managing application state, React's Context API combined with `useState` and `useReducer` will be the primary approach for simpler, local state. For more complex global state that needs to be shared across many components (e.g., current session status, live transcription buffer, AI responses), a dedicated state management library or custom Context Providers will be used.

*   **SessionContext:** A global context to hold the current session's state (ID, status, meeting URL, topic, grade).
*   **TranscriptionContext:** To manage the accumulating live transcription data.
*   **AIResponseContext:** To manage the stream of AI tutor feedback.
*   **UI State:** Local `useState` for component-specific UI interactions (e.g., form input values, loading indicators).

---

## 7. Testing Strategies

A comprehensive testing strategy will be implemented to ensure reliability and maintainability.

*   **Unit Tests:** Using Jest and React Testing Library for isolated component and hook testing.
*   **Integration Tests:** Testing the interaction between components and API services, potentially using Mock Service Worker (MSW) to mock API calls.
*   **End-to-End (E2E) Tests:** Using Playwright (already familiar from `app-prototype`) or Cypress to simulate user flows across the entire application.

---

## 8. Deployment Considerations

The frontend will be containerized using Docker and deployed alongside the backend services.

*   **Dockerization:** A `Dockerfile` will be created for the Next.js application, building the optimized production bundle.
*   **Docker Compose:** The `docker-compose.yml` will be updated to include the `frontend` service, ensuring proper networking and environment variable configuration to communicate with `app-prototype`.
*   **Environment Variables:** Critical configurations (e.g., `app-prototype` API URL, WebSocket URL) will be managed via environment variables.

---

This plan prioritizes a structured and modular development process, allowing for clear separation of concerns and efficient collaboration.
