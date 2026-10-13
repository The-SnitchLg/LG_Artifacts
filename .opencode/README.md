# .opencode: Agentic Vibe Coding Framework

Welcome to the **`.opencode`** agentic architecture. This framework organizes contextual knowledge, role specializations, and execution protocols for autonomous and collaborative AI pair programming.

---

## 1. Directory Structure

```text
.opencode/
├── README.md                  # Framework overview and navigation guide
├── context/                   # Global business requirements & boundaries
│   ├── business_logic.md      # Domain models, rules, and core workflows
│   └── constraints.md         # Technical boundaries, forbidden patterns, "what NOT to do"
├── orchestration/             # Inter-agent coordination and control
│   └── orchestrator.md        # Delegation sequence and context hand-off protocols
├── roles/                     # Persona specifications for agentic specializations
│   ├── architect.md           # System architecture, tech stack & ADRs
│   ├── developer.md           # Coding standards, layout & implementation rules
│   ├── designer.md            # UI/UX design tokens, layout & accessibility
│   └── reviewer.md            # Quality gates, security checklist & verification criteria
├── agents/                    # Multi-agent catalog and tool mappings
│   └── agent_registry.md      # Active sub-agents and role allocations
└── specifications/            # Actionable feature implementation plans
    └── workflow_spec.md       # Step-by-step milestones, task breakdowns & acceptance criteria
```

---

## 2. Framework Navigation & Lifecycle

1. **Before Coding**:
   - Consult [`context/constraints.md`](./context/constraints.md) to ensure no technical anti-patterns or out-of-scope boundaries are breached.
   - Review [`context/business_logic.md`](./context/business_logic.md) for domain invariants.
   - Fill in [`specifications/workflow_spec.md`](./specifications/workflow_spec.md) with specific task breakdowns.

2. **During Delegation**:
   - The [`orchestration/orchestrator.md`](./orchestration/orchestrator.md) dictates task hand-offs across:
     - [`roles/architect.md`](./roles/architect.md)
     - [`roles/designer.md`](./roles/designer.md)
     - [`roles/developer.md`](./roles/developer.md)

3. **Before Merging / Completing**:
   - Follow [`roles/reviewer.md`](./roles/reviewer.md) to execute mandatory quality gates (`lint`, `build`, security audit).

---

## 3. Populating the Templates

Every template contains structured sections with `<!-- TODO -->` placeholders. Replace these placeholders with project-specific requirements, schemas, and design tokens as the application evolves.
