# create-next-nest

A powerful, interactive CLI to bootstrap your full-stack monorepo featuring **Next.js**, **NestJS**, and your choice of authentication.

[![npm version](https://img.shields.io/npm/v/create-next-nest.svg)](https://www.npmjs.com/package/create-next-nest)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/Deveripon/cli-tool-create-next-nest)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation

There are two ways to use this CLI:

### 1. Recommended: Use without installing (npx)
The easiest way to use the CLI is to run it on-demand. This ensures you are always using the latest version:

```bash
npx create-next-nest
```

### 2. Install Globally
If you plan to use this frequently, you can install it globally on your system:

```bash
# Using npm
npm install -g create-next-nest

# Using pnpm
pnpm add -g create-next-nest

# Using bun
bun add -g create-next-nest
```

After installing globally, you can simply run:
```bash
create-next-nest
```

---

## 🚀 Quick Start

Once you start the CLI, it will guide you through the setup:

```bash
npx create-next-nest
```

1.  **Project Name**: Enter the name for your project folder.
2.  **Auth Library**: Select your preferred authentication system.
3.  **Auto Install**: Choose 'Yes' to automatically trigger `pnpm install`.

## ✨ Features

- 🏗️ **Monorepo Architecture** - Clean separation of frontend and backend using a modern monorepo setup.
- ⚡ **Next.js** - Optimized React framework for the frontend.
- 🦅 **NestJS** - Scalable, enterprise-grade Node.js framework for the backend.
- 🔐 **Auth Choice** - Choose between **Better-Auth** (modern & flexible) or **Auth.js** (NextAuth).
- 📦 **Zero Config Setup** - Automatic cloning and dependency installation.
- 🛠️ **Smart Detection** - Automatically detects your package manager (`pnpm`, `bun`, `yarn`, or `npm`).
- 🎨 **Beautiful CLI** - Powered by `@clack/prompts` for a premium terminal experience.

## 🛠️ Templates Available

When you run the CLI, you can choose from two production-ready templates:

### 1. Better-Auth (Recommended)
Features **Next.js 15+** and **NestJS 11+** with [Better-Auth](https://better-auth.com/). Ideal for modern applications requiring flexible, type-safe authentication.
- **Source:** [Deveripon/Next-Nest-Better-Auth](https://github.com/Deveripon/Next-Nest-Better-Auth)

### 2. Auth.js (NextAuth)
A standard-compliant setup featuring **Next.js**, **NestJS**, and **Auth.js**. Features JWT-based authentication and Role-Based Access Control (RBAC).
- **Source:** [Deveripon/next-nest-auth-js-starterkit](https://github.com/Deveripon/next-nest-auth-js-starterkit)

## 📖 Manual usage

If you prefer to skip the CLI, you can use `degit` directly:

```bash
# For Better-Auth
npx degit Deveripon/Next-Nest-Better-Auth my-app

# For Auth.js
npx degit Deveripon/next-nest-auth-js-starterkit my-app
```

## 📝 Prerequisites

- **Node.js**: >= 20.x
- **Package Manager**: [pnpm](https://pnpm.io/) is highly recommended for the monorepo templates.

## 📄 License

MIT © [Deveripon](https://github.com/Deveripon)
