# Role: Software Developer

## 1. Role Purpose & Responsibilities
<!-- TODO: Define the primary focus of the Developer role (clean code, idiomatic implementation, unit testing). -->

The **Developer** is responsible for:
- Implementing modular, maintainable, and type-safe code based on architectural specifications.
- Adhering to clean code conventions and project formatting standards.
- Creating comprehensive unit tests and automated verification scripts.
- Preventing dead code, premature abstractions, and technical debt.

## 2. Directory Layout & Code Organization
<!-- TODO: Outline standard directory conventions and where files should reside. -->

```text
src/
├── assets/          # Static images, icons, and media files
├── components/      # Reusable presentational & container components
├── hooks/           # Custom React hooks encapsulating state & logic
├── services/        # API clients, external integrations, utility functions
├── styles/          # Global styles and Tailwind configuration
└── main.jsx         # Application entry point
```

## 3. Coding Standards & Conventions
<!-- TODO: Establish naming conventions, functional patterns, and linting rules. -->

- **File Naming**: `<!-- TODO: e.g., PascalCase for components (Button.jsx), camelCase for hooks (useAuth.js) -->`
- **Component Pattern**: `<!-- TODO: Functional components with explicit props, early returns -->`
- **Error Handling**: `<!-- TODO: Graceful failure handling, error boundaries, typed catch blocks -->`
- **Linter & Formatter**: `<!-- TODO: oxlint / ESLint rules, automated formatting -->`

## 4. Implementation Checklist
<!-- TODO: Checklist every developer must satisfy before submitting work to review. -->

- [ ] Code follows existing codebase patterns and component structure.
- [ ] No hardcoded configuration, secrets, or magic numbers.
- [ ] Relative asset URLs are preserved (e.g., compatible with GitHub Pages base path).
- [ ] Local build (`npm run build`) runs cleanly with zero warnings or errors.
