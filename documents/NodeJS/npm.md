# NPM
## Packages
Is a file or directory that is **described by a package.json file**. 

A package must contain a package.json file in order to be published to the npm registry. 

Packages can be unscoped or scoped to a user or organization, and scoped packages can be private or public.

### Packages formats
- a) A folder containing a program described by a package.json file.
- b) A gzipped tarball containing (a).
- c) A URL that resolves to (b).
- d) A <name>@<version> that is published on the registry with (c).
- e) A <name>@<tag> that points to (d).
- f) A <name> that has a latest tag satisfying (e).
- g) A git url that, when cloned, results in (a).

## Modules
A module is any file or directory in the node_modules directory that can be loaded by the Node.js require() function.

To be loaded by the Node.js require() function, a module must be one of the following:

A folder with a package.json file containing a "main" field.
A JavaScript file.

## Package JSON file
A package.json file:

- lists the packages your project depends on
- specifies versions of a package that your project can use using semantic versioning rules
- makes your build reproducible, and therefore easier to share with other developers

**How to create using CLI?**
Run `npm init` on the desired directory
- You can run `npm init --yes` to create a package.json from information on the directory.

### Fields
- **name**: contains the package's name, MUST BE lowercase
- **version** form of X.X.X
- **exports** defining the entry points of a package when imported by name loaded either via a node_modules lookup or a self-reference to its own name. 
  
### Exporting module message
Now, when the npm package will be published, whenever someone requires our package we can display a message. For that:
- Go to index.js of the repo, or whatever was defined as the start file
- Add a exports object that will mke available the code for other people
- Add a `.printMsg()` attribute as a function. This function can display a messsage when the package is required by others.
  ```javascript
    exports.printMsg = function() {
     console.log("This is a message from the demo package");
  ```

### Scripts
https://docs.npmjs.com/cli/v7/using-npm/scripts

The "scripts" property of your package.json file supports a number of built-in scripts and their preset life cycle events as well as arbitrary scripts. These all can be executed by running npm run-script <stage> or npm run <stage> for short

### Pre and postscripts
To create "pre" or "post" scripts for any scripts defined in the "scripts" section of the package.json, simply create another script with a matching name and add "pre" or "post" to the beginning of them.
```javascript
{
  "scripts": {
    "precompress": "{{ executes BEFORE the `compress` script }}",
    "compress": "{{ run command to compress files }}",
    "postcompress": "{{ executes AFTER `compress` script }}"
  }
}
```

### DevDepencies and dependencies
When we run `npm install` the **dependencies** and **devDependencies** are installed according to the *semantic version*[^1]

#### **DevDependencies**
Packages that are only needed for local development and testing.
- How to add them? By cmd
  - `npm install <package-name> [--save-dev]`

#### **Dependencies**
Packages required by your application in production
- How to add them? By cmd
  - `npm install <package-name> [--save-prod]`

#### **Generate .tar.gz npm pack**
To build a `<package-name>-<version>.tar.gz`, on the directory do `npm pack`

#### Install from **.tar.gz**
To install from a generated package do:
```JSON
"dependencies": {
  "my-package": "file:/./tmp/my-package-1.3.3.tar.gz"
}
```
## How to use the packages?
you can use a package in your module by passing it as an argument to the require function.
```javascript
var lodash = require('lodash');
```

For scoped packages you can use:
- `var projectName = require("@scope/package-name")`


[^1] https://docs.npmjs.com/about-semantic-versioning