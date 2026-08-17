# Projects Section Design

## Goal

Add a new portfolio section that lists projects while preserving the existing component and content patterns.

## Scope

- Add a `ProjectsSection` component in `src/components`.
- Add project data to `src/i18n/generals.ts`.
- Add localized section labels to `src/i18n/pt-BR.ts` and `src/i18n/en.ts`.
- Add a `#projects` navigation item.
- Render the section between the tech stack and certifications sections.

## Data Model

Projects are configured as a static list in `generals`:

```ts
{
  title: string;
  description: string;
  href: string;
  icon: "github" | "code" | "server";
}
```

The initial list will contain editable portfolio project entries. Until repository-specific URLs are provided, each entry links to the existing GitHub profile at `https://github.com/leonardomarchioro`.

## Component Design

`ProjectsSection` follows the same structure as the current sections:

- It receives `content` from the localized dictionary.
- It receives `items` from `generals.projects`.
- It uses `SectionHeading` for numbering and title.
- It renders a responsive card grid.
- Each card is a link that opens GitHub in a new tab.
- Each card shows an icon, title, description, and a GitHub/link affordance.

Icons are resolved inside the component from the `icon` string. This keeps content data serializable and easy to edit.

## Page Integration

The home page renders:

1. Hero
2. About
3. Tech
4. Projects
5. Certifications
6. Contact

Section numbers are updated so projects become `03.`, certifications become `04.`, and contact becomes `05.`.

## Testing And Verification

Verification should include:

- TypeScript/build validation through the project build command.
- Lint validation if the configured Next lint command works in this installed Next.js version.
- Manual source review that project cards are parameterized and no project content is hard-coded in the page.
