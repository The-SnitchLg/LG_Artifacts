# Graph Report - IA  (2026-10-13)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 65 nodes · 82 edges · 8 communities (7 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `25db24be`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- FichaProyecto.jsx
- package.json
- devDependencies
- .oxlintrc.json
- App.jsx
- scripts
- verify-app.mjs
- dependencies

## God Nodes (most connected - your core abstractions)
1. `FichaProyecto()` - 14 edges
2. `scripts` - 5 edges
3. `react` - 4 edges
4. `App()` - 3 edges
5. `rules` - 3 edges
6. `AlertTriangleIcon()` - 2 edges
7. `BookOpenIcon()` - 2 edges
8. `CalendarIcon()` - 2 edges
9. `CheckIcon()` - 2 edges
10. `ClockIcon()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `App()` --calls--> `FichaProyecto()`  [EXTRACTED]
  src/App.jsx → src/FichaProyecto.jsx

## Import Cycles
- None detected.

## Communities (8 total, 1 thin omitted)

### Community 0 - "FichaProyecto.jsx"
Cohesion: 0.22
Nodes (14): AlertTriangleIcon(), BookOpenIcon(), CalendarIcon(), CheckIcon(), ClockIcon(), CloseIcon(), DownloadIcon(), FichaProyecto() (+6 more)

### Community 1 - "package.json"
Cohesion: 0.16
Nodes (12): name, private, type, version, lucide-react, oxlint, tailwindcss, @tailwindcss/vite (+4 more)

### Community 2 - "devDependencies"
Cohesion: 0.22
Nodes (9): devDependencies, oxlint, playwright, tailwindcss, @tailwindcss/vite, @types/react, @types/react-dom, vite (+1 more)

### Community 3 - ".oxlintrc.json"
Cohesion: 0.33
Nodes (5): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

### Community 4 - "App.jsx"
Cohesion: 0.47
Nodes (3): react, react-dom, App()

### Community 5 - "scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, preview

### Community 7 - "dependencies"
Cohesion: 0.50
Nodes (4): dependencies, lucide-react, react, react-dom

## Knowledge Gaps
- **5 isolated node(s):** `lucide-react`, `oxlint`, `tailwindcss`, `@types/react`, `@types/react-dom`
  These have ≤1 connection - possible missing edges. (Counts symbols only; 35 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `App.jsx` to `FichaProyecto.jsx`, `package.json`?**
  _High betweenness centrality (0.351) - this node is a cross-community bridge._
- **What connects `lucide-react`, `oxlint`, `tailwindcss` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.212) - this node is a cross-community bridge._
- **Why does `scripts` connect `scripts` to `package.json`?**
  _High betweenness centrality (0.110) - this node is a cross-community bridge._