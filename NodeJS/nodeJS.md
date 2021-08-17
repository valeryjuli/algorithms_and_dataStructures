# Node JS
Please read at least the first 10pages of https://nodejs.dev/learn/

Node.js is an open-source and cross-platform JavaScript runtime environment. 
- Node.js can generate dynamic page content
- Node.js can create, open, read, write, delete, and close files on the server
- Node.js can collect form data
- Node.js can add, delete, modify data in your database

Node.js apps bring with them a huge advantage: the comfort of programming everything - the frontend and the backend - in a single language.

In Node.js we dont have access to browser elements like the DOM, but we can use lots of cool modules for more machine center functionalities like fileaccess.

## Nodemon
nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

Installation:


``npm install --save-dev nodemon``


For execution, as an example, in a package.json:
```` javascript

...
"scripts": {
    "start": "nodemon index.js production",
    "start-dev": "nodemon index.js debug",
    "test": "test"
  },
````