# Hooks

This directory contains custom React hooks that encapsulate reusable logic.

## Principles

- **Single Responsibility:** Each hook should have a single, clear purpose.
- **Abstraction:** Hooks should abstract away complex logic, making components cleaner and easier to read.
- **Reusability:** Design hooks to be reusable across different components.

## Common Use Cases

- **State Management:** Encapsulating complex component state logic (e.g., `useReducer`).
- **Side Effects:** Managing side effects like data fetching or subscriptions (e.g., `useWebSocket`).
- **Browser APIs:** Interacting with browser APIs like `localStorage` or `navigator`.

## Naming Convention

Custom hooks should always be prefixed with `use`, for example, `useSession`.