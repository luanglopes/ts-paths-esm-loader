# ts-paths-esm-loader

This is a simple loader made from https://github.com/TypeStrong/ts-node/discussions/1450#discussioncomment-1806115

Installation:

```bash
npm i -D ts-paths-esm-loader
```

To run your code use following command

```bash
node --experimental-specifier-resolution=node --loader ts-paths-esm-loader
```

Transpile only version

```bash
node --experimental-specifier-resolution=node --loader ts-paths-esm-loader/transpile-only
```

It was used with Node 16 and have no guarantees that it will work on any other version 
