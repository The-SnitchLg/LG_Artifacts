# Role: Quality & Security Reviewer

## 1. Role Purpose & Responsibilities
<!-- TODO: Define Reviewer responsibilities (evaluating correctness, test validation, security audit, gatekeeping). -->

The **Reviewer** is responsible for:
- Auditing code changes against architectural specifications, design guidelines, and business rules.
- Enforcing zero-regression policies through automated test execution and build verification.
- Reviewing code for security risks, injection vulnerabilities, and credential leakage.
- Serving as the final gatekeeper before staging, committing, or deploying code.

## 2. Quality Gates & Criteria
<!-- TODO: Define the criteria required for green-lighting code modifications. -->

| Gate | Check / Command | Acceptance Criteria | Mandatory? |
| :--- | :--- | :--- | :--- |
| **Lint / Static Analysis** | `npm run lint` / `oxlint` | Zero errors, zero unresolved warnings | Yes |
| **Build Integrity** | `npm run build` | Zero build errors, bundle artifacts produced | Yes |
| **Asset Path Routing** | Path inspection in `dist/` | Relative pathing (`./`) preserved | Yes |
| **Unit / Regression Tests** | `npm test` | All test suites passing | Yes |
| **Console Cleanliness** | Browser console check | Zero runtime exceptions or unhandled rejections | Yes |

## 3. Security Audit Checklist
<!-- TODO: Outline security inspection rules for pull requests and code modifications. -->

- [ ] No hardcoded API keys, tokens, or private credentials in code or commits.
- [ ] Inputs are sanitized and validated against malicious payloads or script injection.
- [ ] Dependencies added have verified provenance and no known high-severity vulnerabilities.
- [ ] CORS policies, CSP, and sensitive endpoints conform to security standards.

## 4. Review Verdict Template
<!-- TODO: Provide standard feedback format used by the Reviewer role. -->

```markdown
### Review Verdict: [ APPROVED / CHANGES REQUESTED ]
- **Summary**: <!-- High-level review summary -->
- **Passed Gates**: <!-- List verified gates -->
- **Identified Issues / Gaps**: <!-- Specific blockers, if any -->
- **Action Items**: <!-- Concrete changes needed before sign-off -->
```
