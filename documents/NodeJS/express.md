# EXPRESS NODE
Install express and start using it:

1. ````const express = require('express')````

2. Create an express app object:\
The app returned by express() is in fact a JavaScript Function, designed to be passed to Node’s HTTP servers as a callback to handle requests. This makes it easy to provide both HTTP and HTTPS versions of your app with the same code base, as the app does not inherit from these (it is simply a callback)\
````const app = express();````

3. Serve static files\
Here we could use one of the express APIs:
   * **app.use([path,] callback [, callback...])**\
     * Will bind the callback to the given path so it will respond to **ANY** 'path' independent of the HTTP requests type (GET, PUT ...).
     * ``app.use(express.static("folderX"))``will inform Express.js to serve all the files from specified **folderX** 
   * **app.get(path, callback [, callback ...])**
     * Will bind the callback to the given path so it will respond to **ANY** path starting with 'path' **ONLY** for GET HTTP requests.
