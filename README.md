# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/f62ba6ec-13fb-44ee-a930-80b6e1dab33a

# THERMA

THERMA is a Vite + React + TypeScript application that demonstrates an intelligent thermal management UI for solar panels using Tailwind and shadcn UI.

**Quick overview**
- Modern React + Vite + TypeScript stack
- Tailwind CSS + shadcn UI components
- Responsive pages: Home, Product, About, Auth, Dashboard
- Static build ready for deployment to any static host

**Contributors**
- Vaihnavi L
- Deva Nandan S
- Rishi R S

## Development

Requirements
- Node.js 18+ (recommended)
- npm

Install and run locally

```powershell
# install dependencies
npm install

# start development server
npm run dev
```

Build & preview

```powershell
# build for production
npm run build

# preview the dist folder
npm run preview

# OR serve the built static files
npx serve -s dist -l 5000
```

## Deployment (Render)

This repo contains a `render.yaml` file to configure Render for automatic deployment of the static site.

Steps to deploy on Render:
1. Push the repository to GitHub (this repo is already pushed to `https://github.com/Darknight4433/PROJECT_THERMA`).
2. Sign in to https://render.com and create a new **Web Service**.
3. Connect your GitHub repo and let Render detect the `render.yaml` configuration.
4. By default the `render.yaml` in this project uses:
	- Build Command: `npm install && npm run build`
	- Start Command: `serve -s dist -l 3000`

Render will build the app and serve the static `dist` output. Every push to `main` will trigger a redeploy when connected.

## Notes
- If contributor names need correction, update the `Contributors` section and push again.
- I can also add CI (GitHub Actions) to run builds or tests on push if you'd like.

---
If you want, I can now confirm the README appears on GitHub and optionally enable the Render deploy for you.
To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.
