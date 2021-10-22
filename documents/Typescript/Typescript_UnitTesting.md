# Typescript unit testing

## Unit test tools
We can use Mocha, Chai and Sinon:
* **Mocha** – the core framework: it provides common testing functions including describe and it and the main function that runs tests.
* **Chai** – the library with many assertions. It allows to use a lot of different assertions, for now we need only assert.equal.
* **Sinon** – a library to spy over functions, emulate built-in functions and more, we’ll need it much later.

1. Install typescript dependencies
```Node
npm install typescript --save-dev
npm install @types/node --save-dev
```
2. Add mocha, sinon and chai + types mocha and ts-node dependencies
```Node
npm install chai mocha sinon ts-node @types/chai @types/mocha @types/sinon --save-dev
```
1. Add test script to node
`"test": "mocha --recursive ts-node/register folder_with_tests/**/*.spec.ts"`
  - `ts-node/register` Here we tell npm to run mocha with ts-node as interpreter
  - `recursive` here we tell to test all the files, not individual files

## Test coverage report

We can use Istanbul to generate the unit testing reports. Istanbul instruments your ES5 and ES2015+ JavaScript code with line counters, so that you can track how well your unit-tests exercise your codebase.

### Configuration
1. Run `npm install --save-dev nyc @istanbuljs/nyc-config-typescript`
2. Add a **NYC** configuration file `.nyrc` or add into `package.json`

#### On package.json
``` JSON
"nyc": {
    "all": true, // Check all files
    "check-coverage": true, // Enforce a coverage threshold
    "statements": 90, // Minimum coverage for statements (%)
    "functions": 90, // Minimum coverage for functions (%)
    "branches": 90, // Minimum coverage for branches (%)
    "lines": 90, // Minimum coverage for lines (%)
    "include": [
        "code/**/!(*.test.*).[tj]s?(x)"  // Specifies files to be included in the report
    ],
    "exclude": [
        "code/**/*.*" // Specifies the files to be committed from the report, we don’t have to report coverage on tests files itself.
    ],
    "reporter": [ // Reporters used
        "html",
        "lcov",
        "text",
        "text-summary"
    ],
    "report-dir": "coverage" 
}
```

#### On .nycrc file
```JSON
{
  "reporter": [
    "html",
    "text-summary"
  ],
  "extension": [
    ".ts"  
  ],
  "include": [
    "code/**/*.ts" 
  ],  
  "exclude": [
    "src/**/*.spec.*"
  ],
  "require": [
    "ts-node/register"
  ],
  "all": true
}

```