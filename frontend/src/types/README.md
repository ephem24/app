# Types

This directory contains TypeScript type definitions and interfaces for shared data structures used throughout the application.

## Importance

- **Type Safety:** Using well-defined types helps to prevent common errors and improves the overall stability of the application.
- **Developer Experience:** Types provide autocompletion and documentation, making it easier to understand and work with different data structures.
- **Consistency:** Centralizing type definitions ensures that data is handled consistently across the entire application, from API responses to component props.

## File Organization

Create separate `.d.ts` files for different data domains. For example:

- **`session.d.ts`**: Types related to tutoring sessions.
- **`transcription.d.ts`**: Types for transcription data.
- **`aiResponse.d.ts`**: Types for AI tutor responses.

This helps to keep the type definitions organized and easy to find.
