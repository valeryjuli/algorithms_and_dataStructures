# Typescript Configuration

The presence of a tsconfig.json file in a directory indicates that the directory is the root of a TypeScript project. The tsconfig.json file specifies the root files and the compiler options required to compile the project.

## Template
- **OPTION A**: Run `tsc --init`.
- **OPTION B**: Create it, check specs on [TypescriptConfig](https://javascript.plainenglish.io/typescript-configuration-options-tsconfig-json-561d4a2ad4b).

```
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */
    /* Basic Options */
    // "incremental": true,                   /* Enable incremental compilation */
    "target": "es5" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */,
    "module": "commonjs" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. output module resolution system that is used*/,
    // "lib": [],                             /* Specify library files to be included in the compilation. */
    // "allowJs": true,                       /* Allow javascript files to be compiled. */
    // "checkJs": true,                       /* Report errors in .js files. */
    // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
    // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "sourceMap": true,                     /* Generates corresponding '.map' file. */
    // "outFile": "./",                       /* Concatenate and emit output to single file. */
    "outDir": "./build" /* Redirect output structure to the directory. */,
    // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    // "composite": true,                     /* Enable project compilation */
    // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
    // "removeComments": true,                /* Do not emit comments to output. */
    // "noEmit": true,                        /* Do not emit outputs. */
    // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */
    /* Strict Type-Checking Options */
    "strict": true /* Enable all strict type-checking options. */,
    // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,              /* Enable strict null checks. */
    // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
    // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */
    /* Additional Checks */
    // "noUnusedLocals": true,                /* Report errors on unused locals. */
    // "noUnusedParameters": true,            /* Report errors on unused parameters. */
    // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */
    /* Module Resolution Options */
    // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
    // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                       /* List of folders to include type definitions from. */
    // "types": [],                           /* Type declaration files to be included in compilation. */
    // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */,
    // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
    // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */
    /* Source Map Options */
    // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */
    /* Experimental Options */
    // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
    // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */
    /* Advanced Options */
    "skipLibCheck": true /* Skip type checking of declaration files. */,
    "forceConsistentCasingInFileNames": true /* Disallow inconsistently-cased references to the same file. */,
    "resolveJsonModule": true
  },
  "include": ["./src/index.ts"]
}
```

## Files Inclusion
:warning: ***If files and include is not provided,*** TypeScript will automatically compile all files (.ts, .tsx) in the directory except for the files that excludes option specifies.

- **"files":** specifies the files to be compiled. If the `.ts` is excluded, it automatically searches for .ts and .tsx file by default.
- **"include"** specify the files to be compiled in the program using an array of filenames or the glob pattern.
- **"exclude"** specify the files to be compiled in the program using an array of filenames or the glob pattern.
````
{
  "compilerOptions": {},
  "files": [
    "index.ts",
    "hello"
  ]
  "include": [
    "src/**/*"
  ]
  "exclude": [
    "node_modules",
    "src/exclude.ts"
  ]
}
````

### References [^1] [^2]

Allow to specify dependant packages in the `tsconfig.json` that the current package depends on. When you build a package with dependencies, then the dependencies get built first.

It can improve build times and enforce logical separation between components. Is recommended to be used when building **monorepo's** [Monorepositories](../Project%20Structure/Projects_File_Structure.md)

The path property of each reference can point to a directory containing a tsconfig.json file, or to the config file itself (which may have any name).
````
{
  "compilerOptions": {
    "composite": true,
  },
  "references": [
      { "path": "../app" }
  ]
}
````

## Project Options
### Incremental
When incremental is true, TypeScript will save information about the project graph from the latest compilation. It compares the diff between the previous one and the current one and compiles the only files that you changed. 

TypeScript will generate tsconfig.tsbuildinfo which is used to detect the least costly way to type check and to emit changes.
```
{
  "compilerOptions": {
    "incremental": true
  },
  "include": [
    "src/**/*"
  ]
}
```
### Target
You can choose which version to generate JavaScript files when building. So if you choose es2015:
```
{
  "compilerOptions": {
    "target": "es2015"
  }
}
```
### AllowJS
When allowJs is true, TypeScript will allow JavaScript files to be compiled but, it will not do type-checking.
```
{
  "compilerOptions": {
    "outDir": "./dist",
    "allowJs": false
  }
}
```

:warning: You can review other options in [TypescriptConfig](https://javascript.plainenglish.io/typescript-configuration-options-tsconfig-json-561d4a2ad4b)

[^1]: https://blog.logrocket.com/boost-your-productivity-with-typescript-project-references/
[^2]: https://www.typescriptlang.org/docs/handbook/project-references.html
