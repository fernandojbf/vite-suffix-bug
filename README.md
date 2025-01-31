# Vite Import Suffix Bug Reproduction

This repository contains two projects (one in Vite and another in React Router) to demonstrate a potential bug in Vite related to import suffixes not being properly handled in development builds for JavaScript files.

## **Bug Description**

Import suffixes such as `?url` and `?worker&url` are not correctly applied during development builds when importing from `node_modules`. This causes builds to fail in dev mode, while production builds work as expected.

### **Expected Behavior**

- Both development and production builds should respect the suffixes in imports for JavaScript files.

### **Observed Behavior**

- **Production Build:** Works correctly and generates valid paths for imports.
- **Development Build:** Fails because the suffix is ignored for imports from `node_modules`.

---

## **Repository Structure**

```bash
root/
├── vite-example/ (Vite template project)
└── react-router-example/ (React Router template project)
```

Both projects were created using the official templates provided by their respective tools.

### **Custom Setup**

A fake `node_modules` directory (`suffix-node-modules`) has been created within each project to demonstrate the issue. This directory contains:

- One CSS import with a suffix
- Two JavaScript imports with suffixes (`?url`, `?worker&url`)

The same imports were also replicated internally within each project to compare the results between internal and external imports.

---

## **Reproduction Steps**

### Vite Project

1. Navigate to the `vite-example` folder:

   ```bash
   cd vite-example
   ```

2. Install dependencies and run the project in development mode:

   ```bash
   yarn
   git checkout origin/main node_modules/suffix-node-modules/
   yarn dev
   ```

3. Build will fail.

4. Build for production and run:

   ```bash
   yarn build
   yarn preview
   ```

   Check logs.

---

### React Router Project

1. Navigate to the `react-router-example` folder:

   ```bash
   cd react-router-example
   ```

2. Install dependencies and run in development mode:

   ```bash
   yarn
   git checkout origin/main node_modules/suffix-node-modules/
   yarn dev
   ```

3. Build will fail.

4. Build for production and run:

   ```bash
   yarn build
   yarn start
   ```

   Check logs.

---

## **Key Observation**

- **Dev Mode:** Fails to handle import suffixes for JavaScript files from `node_modules`.
- **Prod Mode:** Works as expected and applies the suffixes correctly.

---

## **Question**

Am I missing any configuration that handles suffix imports in development mode, or is this a bug in Vite? Any insights or recommendations are appreciated.
