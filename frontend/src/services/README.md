# Services

This directory contains modules responsible for all communication with external APIs and backend services.

## Principles

- **Separation of Concerns:** The rest of the application (components, hooks) should not make direct API calls. All data fetching and submission logic should be encapsulated within this layer.
- **Error Handling:** Services should handle API errors gracefully and return them in a consistent format.
- **Data Transformation:** Services can be used to transform data from the API into a format that is easier for the frontend to work with.

## Service Modules

- **`appPrototypeService.ts`**: This service manages all interactions with the `app-prototype` backend, including:
  - **REST API calls:** Starting and stopping sessions, fetching session status, etc.
  - **WebSocket communication:** Managing the WebSocket connection for real-time data like transcriptions and AI responses.

- **`aiTutorService.ts`**: (Optional) If direct communication with the `ai-tutor-module` is needed, this service will handle those interactions.