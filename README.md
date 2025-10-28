# James Elner Portfolio

<br />

---

## Useful Astro Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

[Astro Docs](https://docs.astro.build)

<br />

---

### A lightweight reminder of how this site is deployed.

### How deployment works

- Platform: AWS Amplify (Hosting)
- Source: GitHub repository, branch: `master`
- Build: `npm ci` then `npm run build`
- Output directory: `dist`
- Domain: Managed in Route53 (root and `www`), HTTPS handled by Amplify

### Ship changes

1. Commit and push to `master`:
    ```bash
    git add .
    git commit -m "Update"
    git push origin main
    ```
2. Amplify auto-builds and deploys.
3. Check status in the Amplify Console and verify on your custom domain.

#### If something goes wrong

- Open the Amplify Console and review build logs.
- Use the “Retry” or “Redeploy this version” action.
- If needed, “Clear cache and deploy” to force a clean build.
- Rollback: choose a previous successful build and redeploy it.

### Local development

- Install dependencies:
    ```bash
    npm install
    ```
- Dev server:
    ```bash
    npm run dev
    ```
- Production build:
    ```bash
    npm run build
    ```
- Preview build locally:
    ```bash
    npm run preview
    ```

<br />

---

## Linting

- Check for linting errors:

    ```bash
    npm run lint
    ```

- Auto-fix linting errors:

    ```bash
    npm run lint:fix
    ```

- Check formatting:

    ```bash
    npm run format:check
    ```

- Auto-format all files:
    ```bash
    npm run format
    ```
