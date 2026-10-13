# Technical Constraints & Anti-Patterns ("What NOT To Do")

## 1. Technical Boundaries & Stack Limitations
<!-- TODO: List hard boundaries regarding allowed runtimes, libraries, dependencies, and environment constraints. -->

- **Forbidden Dependencies / Libraries**:
  - `<!-- TODO: Disallowed package or framework -->`: <!-- TODO: Reason / alternative -->
- **Version Requirements**:
  - Node.js / Runtime: `<!-- TODO: Minimum or locked version -->`
  - Browser Targets: `<!-- TODO: Supported targets (e.g., modern evergreen browsers) -->`

## 2. Forbidden Architecture & Anti-Patterns
<!-- TODO: Specify anti-patterns that must be actively rejected during planning and code generation. -->

- **Anti-Pattern 1**: <!-- TODO: E.g., Do NOT introduce global state managers unless specified -->
- **Anti-Pattern 2**: <!-- TODO: E.g., Do NOT use inline styles when utility classes are standardized -->
- **Anti-Pattern 3**: <!-- TODO: E.g., Do NOT commit secrets or API keys into client code or repos -->

## 3. Security & Compliance Constraints
<!-- TODO: Define security boundaries, sanitization requirements, and auth checks. -->

- **Data Handling**: <!-- TODO: Rules for handling PII, sensitive session tokens, and input validation -->
- **Network & CORS**: <!-- TODO: Restricted origins, safe fetch patterns, and API access restrictions -->
- **Execution Boundaries**: <!-- TODO: Disallowed unsafe functions (eval, dangerous innerHTML, etc.) -->

## 4. Out-of-Scope Items
<!-- TODO: Explicitly state features, optimizations, or tasks that should NOT be implemented in this phase. -->

- [ ] `<!-- TODO: Out-of-scope feature 1 -->`
- [ ] `<!-- TODO: Out-of-scope feature 2 -->`
- [ ] `<!-- TODO: Premature optimization or edge case to defer -->`
