# Typescript on Node
## Modules Requirements
When using packages on node and writing code on Typescript we **ALWAYS NEED TO INSTALL THE @TYPES** Node.js packages are written in JavaScript and not Typescript. To get the type definitions for its packages, you need to install third-party packages called @types.

##  a single file
1. First we can install typescript on node like `npm install -D typescript`
2. Configure a `tsconfig.json` see [TSconfig](Typescript_Config.md)
3. To execute a typescript file on node we do `tsc file.ts`, this will build the file
   and output a JS file on the specified **outDir** specified in the `tsconfig.json`

## Build multiple files
We can use **TS-node** to transform typescript to javascript without precompiling.

1. Install `ts-node` `npm install --save-dev ts-node`
2. We can build with a command on the `package.json` like `"start": "ts-node ./src/index.ts"`
