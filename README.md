# Claude to Markdown

A web application for converting Claude chat exports to beautifully formatted Markdown. Built with React, TypeScript, and Vite.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [pnpm](https://pnpm.io/) (you can install it using `npm install -g pnpm`)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd claude-export-web
```

2. Install dependencies:
```bash
pnpm install
```

## Development

To start the development server:
```bash
pnpm dev
```
This will start the Vite development server. Open your browser and navigate to the URL shown in the terminal (typically http://localhost:5173).

The development server features:
- Hot Module Replacement (HMR)
- Fast refresh for React components
- TypeScript type checking

## Building for Production

To create a production build:
```bash
pnpm build
```

This will generate optimized files in the `dist` directory.

## Preview Production Build

To preview the production build locally:
```bash
pnpm preview
```

## Linting

To run the linter:
```bash
pnpm lint
```

## Tech Stack

- React 18
- TypeScript
- Vite
- TailwindCSS
- ESLint
- Lucide React (for icons)

## Project Structure

- `/src` - Source code
- `/public` - Static assets
- `/dist` - Production build output (generated)
