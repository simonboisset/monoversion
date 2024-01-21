# Monoversion

A lightweight script for monorepo versioning and publishing library.

## Library in monorepo convention

Monoversion will work if you keep the same version of each package in monorepo. It will update all package versions at once.
You also need `prettier` as peerdependency to use it.

## Installation

```bash
yarn add -W -D monoversion
```

## Run script

For these examples we will take `yourscope` as a npm scope package.

This will update your package.json version for your packages named `@yourscope/yourpackage` and `yourscope` in your monorepo.

### Major upgrade

```bash
yarn monoversion yourscope major
```

### Minor upgrade

```bash
yarn monoversion yourscope minor
```

### Patch upgrade

```bash
yarn monoversion yourscope patch
```
