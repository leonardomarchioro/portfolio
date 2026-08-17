# Projects Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a parameterized projects section to the portfolio using the existing section, i18n, and card patterns.

**Architecture:** Project data lives in `src/i18n/generals.ts`, localized labels live in `src/i18n/pt-BR.ts` and `src/i18n/en.ts`, and rendering lives in a focused `ProjectsSection` component. The home page imports the new section and renders it between tech stack and certifications.

**Tech Stack:** Next.js 14, React 18, TypeScript, Tailwind CSS, lucide-react, Node built-in test runner.

## Global Constraints

- Preserve the current component style: `SectionHeading`, max container, gutter spacing, responsive card grid, bordered cards, raised surface, and primary hover color.
- Project entries are static and editable in `src/i18n/generals.ts`.
- Project entries include `title`, `description`, `href`, and `icon`.
- Initial entries link to `https://github.com/leonardomarchioro` until repository-specific URLs are supplied.
- Add localized section labels in Portuguese and English.
- Render the section between tech stack and certifications.
- Section numbers: projects `03.`, certifications `04.`, contact `05.`.

---

### Task 1: Rendered Projects Section Contract

**Files:**
- Create: `tests/projects-section.test.mjs`

**Interfaces:**
- Consumes: Next app served by `npm run dev -- --hostname 127.0.0.1 --port 3057`.
- Produces: `node --test tests/projects-section.test.mjs`, an integration check for rendered PT and EN pages.

- [ ] **Step 1: Write the failing test**

```js
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { setTimeout as delay } from "node:timers/promises";
import test from "node:test";

const port = 3057;
const baseUrl = `http://127.0.0.1:${port}`;

function devServerCommand() {
  if (process.platform === "win32") {
    return {
      command: "cmd.exe",
      args: [
        "/d",
        "/s",
        "/c",
        `npm run dev -- --hostname 127.0.0.1 --port ${port}`,
      ],
    };
  }

  return {
    command: "npm",
    args: ["run", "dev", "--", "--hostname", "127.0.0.1", "--port", String(port)],
  };
}

async function waitForServer(process) {
  const deadline = Date.now() + 30_000;

  while (Date.now() < deadline) {
    if (process.exitCode !== null) {
      throw new Error(`Next dev server exited with code ${process.exitCode}`);
    }

    try {
      const response = await fetch(baseUrl);
      if (response.ok) {
        return;
      }
    } catch {
      await delay(500);
    }
  }

  throw new Error("Next dev server did not become ready in time");
}

async function withServer(run) {
  const { command, args } = devServerCommand();
  const server = spawn(command, args, {
    cwd: process.cwd(),
    env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
    stdio: "ignore",
  });

  try {
    await waitForServer(server);
    await run();
  } finally {
    stopServer(server);
    await Promise.race([once(server, "exit"), delay(5_000)]);
  }
}

function stopServer(server) {
  if (process.platform === "win32" && server.pid) {
    spawn("taskkill", ["/pid", String(server.pid), "/t", "/f"], {
      stdio: "ignore",
    });
    return;
  }

  server.kill();
}

test("portfolio renders the projects section in Portuguese and English", async () => {
  await withServer(async () => {
    const pt = await fetch(baseUrl).then((response) => response.text());
    const en = await fetch(`${baseUrl}/?lng=en`).then((response) => response.text());

    assert.match(pt, /href="#projects"/);
    assert.match(pt, /Projetos/);
    assert.match(pt, /Sistema de Integrações/);
    assert.match(pt, /GitHub/);

    assert.match(en, /href="#projects"/);
    assert.match(en, /Projects/);
    assert.match(en, /Sistema de Integrações/);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/projects-section.test.mjs`
Expected: FAIL because rendered HTML does not contain `#projects` or project section text yet.

### Task 2: Add Project Data And Localized Section Labels

**Files:**
- Modify: `src/i18n/generals.ts`
- Modify: `src/i18n/pt-BR.ts`
- Modify: `src/i18n/en.ts`

**Interfaces:**
- Consumes: Existing `Generals` and `Dictionary` exports.
- Produces: `g.projects` with readonly project entries and `t.sections.projects` content.

- [ ] **Step 1: Add project entries**

Add this `projects` array to `generals` after `techStack`:

```ts
projects: [
  {
    title: "Sistema de Integrações",
    description:
      "Arquitetura para conectar APIs externas, filas e serviços internos com foco em rastreabilidade e escalabilidade.",
    href: "https://github.com/leonardomarchioro",
    icon: "server",
  },
  {
    title: "Hub de Automação",
    description:
      "Fluxos automatizados para reduzir tarefas manuais, padronizar operações e acelerar rotinas de atendimento.",
    href: "https://github.com/leonardomarchioro",
    icon: "code",
  },
  {
    title: "Portfolio Next.js",
    description:
      "Portfolio pessoal com Next.js, TypeScript, Tailwind CSS, internacionalização e formulário de contato.",
    href: "https://github.com/leonardomarchioro",
    icon: "github",
  },
],
```

- [ ] **Step 2: Add Portuguese labels and navigation**

Add `{ label: "Projetos", href: "#projects" }` after Tech navigation. Add:

```ts
projects: {
  number: "03.",
  title: "Projetos",
},
```

Update certifications to `04.` and contact to `05.`.

- [ ] **Step 3: Add English labels and navigation**

Add `{ label: "Projects", href: "#projects" }` after Tech navigation. Add:

```ts
projects: {
  number: "03.",
  title: "Projects",
},
```

Update certifications to `04.` and contact to `05.`.

### Task 3: Add Projects Component And Page Integration

**Files:**
- Create: `src/components/ProjectsSection.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `Dictionary["sections"]["projects"]` and `Generals["projects"]`.
- Produces: `ProjectsSection({ content, items })`.

- [ ] **Step 1: Create the component**

```tsx
import { Code2, ExternalLink, Github, Server } from "lucide-react";
import type { Dictionary } from "@/i18n/pt-BR";
import type { Generals } from "@/i18n/generals";
import { SectionHeading } from "./SectionHeading";

type ProjectsSectionProps = {
  content: Dictionary["sections"]["projects"];
  items: Generals["projects"];
};

const icons = {
  code: Code2,
  github: Github,
  server: Server,
} as const;

export function ProjectsSection({ content, items }: ProjectsSectionProps) {
  return (
    <section
      className="mx-auto w-full max-w-container px-gutter pt-[120px] md:px-20 max-[520px]:pt-20"
      id="projects"
    >
      <SectionHeading number={content.number} title={content.title} />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((item) => {
          const Icon = icons[item.icon];

          return (
            <a
              aria-label={`${item.title} - GitHub`}
              className="group flex min-h-[220px] flex-col rounded border border-surface-muted bg-surface-raised p-6 transition-colors hover:border-primary"
              href={item.href}
              key={item.title}
              rel="noreferrer"
              target="_blank"
            >
              <div className="mb-6 flex items-center justify-between">
                <div
                  className="inline-flex size-12 items-center justify-center rounded bg-background text-text-muted transition-colors group-hover:text-primary"
                  aria-hidden="true"
                >
                  <Icon size={24} />
                </div>
                <ExternalLink
                  aria-hidden="true"
                  className="text-text-muted transition-colors group-hover:text-primary"
                  size={18}
                />
              </div>
              <h4 className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.05em] text-text">
                {item.title}
              </h4>
              <p className="m-0 flex-1 text-sm leading-relaxed text-text-muted">
                {item.description}
              </p>
              <span className="mt-6 font-code text-xs text-primary">GitHub</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Render the component in the home page**

Import `ProjectsSection` and render:

```tsx
<ProjectsSection content={t.sections.projects} items={g.projects} />
```

Place it after `TechSection` and before `CertificationsSection`.

### Task 4: Verify And Commit

**Files:**
- Verify all modified implementation files.

**Interfaces:**
- Consumes: Tasks 1-3 outputs.
- Produces: verified implementation.

- [ ] **Step 1: Run the integration test**

Run: `node --test tests/projects-section.test.mjs`
Expected: PASS.

- [ ] **Step 2: Run build**

Run: `npm run build`
Expected: exit code 0.

- [ ] **Step 3: Run lint**

Run: `npm run lint`
Expected: exit code 0, or document the actual failure if Next lint is unavailable in this Next.js version.

- [ ] **Step 4: Review diff**

Run: `git diff -- src app tests docs package.json`
Expected: changes are scoped to projects section, i18n, page integration, tests, and docs.

- [ ] **Step 5: Commit implementation**

```bash
git add src tests docs/superpowers/plans/2026-08-17-projects-section.md
git commit -m "feat: add projects section"
```
