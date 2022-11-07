# Turboversion

A lightweight script for monorepo versioning and publishing library.

## Library in monorepo convention

Turboversion will work if you keep the same version of each package in monorepo. It will update all package versions at once.
You also need `prettier` as peerdependency to use it.

## Installation

```bash
yarn add -W -D turboversion
```

## Run script

For these examples we will take `yourscope` as a npm scope package.

### Major upgrade

```bash
yarn turboversion yourscope major
```

### Minor upgrade

```bash
yarn turboversion yourscope minor
```

### Patch upgrade

```bash
yarn turboversion yourscope patch
```
