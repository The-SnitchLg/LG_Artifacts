# Orchestration Engine & Delegation Protocol

## 1. Orchestration Principles
<!-- TODO: Define the core tenets of agent coordination, autonomy levels, and hand-off discipline. -->

- **Single Responsibility**: Each sub-agent or role operates strictly within its designated scope.
- **Context Preservation**: Context passed between roles must be self-contained, reproducible, and documented.
- **Verification Gates**: No implementation is considered complete without reviewer validation and automated checks.

## 2. Standard Execution Sequence
<!-- TODO: Detail the chronological flow across roles from ideation to deployment. -->

```
[ User Request ]
       │
       ▼
 1. Orchestrator ──▶ Evaluates scope & assigns roles
       │
       ▼
 2. Architect ─────▶ Drafts system design, specs & ADRs
       │
       ▼
 3. Designer ──────▶ Specifies UI/UX tokens & design specs
       │
       ▼
 4. Developer ─────▶ Implements code & unit tests
       │
       ▼
 5. Reviewer ──────▶ Executes quality gates & verification
       │
       ▼
 [ Final Output / Release ]
```

## 3. Role Delegation Matrix
<!-- TODO: Define which agent role handles each task phase. -->

| Phase | Assigned Role | Required Context Input | Expected Deliverable |
| :--- | :--- | :--- | :--- |
| **Discovery & Scope** | Orchestrator | User request, repository state | Delegation plan, role tickets |
| **System Architecture** | Architect | Business logic, constraints | Architecture spec, ADRs |
| **Design & Tokens** | Designer | Architecture spec, wireframes | Component specs, token mappings |
| **Implementation** | Developer | Architecture & design specs | Functional code, passing tests |
| **Verification & Gate** | Reviewer | Code diffs, acceptance criteria | Review report, verification logs |

## 4. Context Hand-off Protocol
<!-- TODO: Detail formatting rules and required fields when transferring tasks between agents. -->

When handing off between roles, the passing agent must provide:
1. **Goal & Scope**: High-level objective of the hand-off.
2. **References**: Exact file paths and line ranges.
3. **Decisions & Rationale**: Prior design choices to preserve.
4. **Acceptance Criteria**: Verifiable assertions for the next role.
