# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal website for Nick.

Currently just a single page at `src/pages/index.astro`; no components, content collections, or integrations are configured yet. Routing is file-based — any `.astro` or `.md` file added under `src/pages/` becomes a route matching its path, and static assets go in `public/`.

## Design direction

The site should feel editorial, personal, restrained, and slightly
idiosyncratic.

References:
- https://kateyehchiu.com/
- https://dhenpadilla.com/

Avoid conventional portfolio aesthetics:
- no cards unless necessary
- no gradients
- no generic hero section
- no giant "Hi, I'm Nick" headline
- no SaaS aesthetic
- no excessive rounded rectangles
- no unnecessary animation

Favor:
- typography
- whitespace
- unusual but deliberate spacing
- inline links
- dense information when appropriate
- small visual details
- strong hierarchy
- desktop and mobile responsiveness

## Technical

- Astro
- TypeScript
- plain CSS
- minimize dependencies
- keep components simple
- use semantic HTML
- maintain good accessibility

## Workflow

Before making large changes:
1. inspect the relevant existing files
2. explain the intended implementation
3. implement
4. run the build
5. fix any errors

## Commands

- `npm run build` — type-checks and builds the site to `./dist/`
- `npm run preview` — preview the production build locally
- `npm run astro check` — type-check the project
- `npm run astro add <integration>` — add an Astro integration (e.g. React, Tailwind)

There is no test suite or linter configured in this repo.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
