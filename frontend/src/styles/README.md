# Styles

This directory contains all global styling for the application.

## Methodology

We use [Tailwind CSS](https://tailwindcss.com/) as our primary styling methodology. It is a utility-first CSS framework that allows us to build custom designs without writing custom CSS.

## Files

- **`globals.css`**: This file contains global styles and Tailwind's base, components, and utilities layers. Any custom global CSS should be added here.

- **`tailwind.css`**: This file is used to import the Tailwind CSS layers.

## Best Practices

- **Utility-First:** Prefer using utility classes directly in your HTML/JSX over creating custom CSS classes.
- **Component-Based Styles:** For component-specific styles that cannot be achieved with utility classes, consider using a CSS-in-JS solution or scoped CSS modules.
- **Responsive Design:** Use Tailwind's responsive design features (e.g., `md:`, `lg:`) to build responsive layouts.
