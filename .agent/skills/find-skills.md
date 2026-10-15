---
name: find-skills
description: >-
  Discover and install agent skills from the open agent skills ecosystem using
  the npx skills CLI. Use when the user asks "how do I do X", "find a skill for X",
  "is there a skill that can...", or when looking to search, discover, or install modular
  agent capabilities.
triggers:
  - "find a skill"
  - "is there a skill for"
  - "search skills"
  - "install skill"
  - "add skill"
---

# Find and Install Agent Skills

This skill wraps the Skills CLI (`npx -y skills`) to search for and install agent skills from the open ecosystem (`skills.sh`).

## Commands & Procedures

### 1. Search for Skills Non-Interactively
Run searches using the `-y` flag to prevent terminal blocking:

```bash
npx -y skills find <query>
```

Filter by GitHub owner (optional):
```bash
npx -y skills find <query> --owner <owner>
```

### 2. Install a Skill Non-Interactively
Install skills with non-interactive confirmation:

- **Workspace Installation**:
  ```bash
  npx -y skills add <source-url-or-package> --skill <skill-name>
  ```
  Or using package notation:
  ```bash
  npx -y skills add <owner/repo@skill-name> -y
  ```

- **Global Installation** (machine-level):
  ```bash
  npx -y skills add <package> -g -y
  ```

### 3. Verification & Cataloging Procedure
After installing any skill:
1. Verify the skill definition was saved to `.agent/skills/` or `.agents/skills/`.
2. Inspect the `SKILL.md` file to verify its metadata and instructions.
3. Confirm whether `skills-lock.json` was updated.
4. Document the new capability, its triggers, and example prompts for the user.
