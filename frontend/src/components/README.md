# Components

This directory contains all reusable React components for the application.

## Principles

- **Separation of Concerns:** Components should be focused on presentation and UI. Business logic, state management, and data fetching should be handled by hooks and services.
- **Reusability:** Create components that are generic and can be reused in different contexts.
- **Composition:** Build complex UIs by composing smaller, simpler components.

## Directory Structure

- **`/ui`**: Generic, unstyled, and highly reusable UI primitives like `Button`, `Input`, `Card`, etc. These components should be application-agnostic.

- **`/common`**: Application-specific components that are used across multiple pages, such as `Header`, `Footer`, or `PageLayout`. These may have more specific styling and logic.

- **`/session`**: Components that are specific to a single feature or page, in this case the live tutoring session. Examples include `TranscriptDisplay`, `AIChatWindow`, etc. These are typically composed of components from `/ui` and `/common`.