# Agent Registry

## 1. Registry Overview
<!-- TODO: Explain the mapping between active AI agents/subagents and their designated project roles. -->

This registry catalogs the autonomous and specialized AI agents configured in this workspace, their capabilities, and the roles they assume during vibe coding workflows.

## 2. Active Agent Directory
<!-- TODO: Register each active agent, model configuration, and role binding. -->

| Agent Identifier | Assigned Role | Capabilities / Tools | Context Scope | Status |
| :--- | :--- | :--- | :--- | :--- |
| `lead-orchestrator` | Orchestrator | Task delegation, workflow planning | Full repository | Active |
| `system-architect` | Architect | ADR authoring, schema design | `.opencode/specifications/`, core architecture | Active |
| `frontend-designer` | Designer | UI token mapping, component styling | `src/styles/`, `src/components/` | Active |
| `code-developer` | Developer | Feature implementation, test authoring | `src/`, package configuration | Active |
| `qa-reviewer` | Reviewer | Lint auditing, build verification, security gate | All diffs, build output | Active |

## 3. Sub-Agent Invocation Protocol
<!-- TODO: Specify guidelines for spawning, configuring, and communicating with sub-agents. -->

1. **Role Specialization**: Sub-agents must be invoked with their specific role persona and prompt boundary.
2. **Minimal Necessary Context**: Pass only relevant files and specifications to conserve context budget.
3. **Execution Reporting**: Sub-agents must return a structured summary of actions taken, modified files, and verification status.
