# JavaScript and Browsers
JavaScript is an interpreted language, the browser runs directly the code of the .js files. But in some cases JS code interpreters use a **just-in-time compiling** technique that **compiles** JS code into a binary mode for better performance.

## JS Client side and Server Side
JavaScript nowdays can be used to perform tasks in the client side via the browser, or on the server side (using JS based tools like NodeJS). 

The difference is that for client side, everything is executed in the context of the browser and accesibl information is limited by the browser. 

On the other hand, on server side JS, an extended JS version that enables access to the backend information outside the browser is accesible, like the hard disk.

## JS Client side
A Browser tab can execute JavaScript, each browser tab is known as **Execution enviroment**. Whatever is shown on the browser tab is from the client-side JavaScript

On the browser we can make use of browser or third party APIs (Application Programming Interfaces)

### Browser APIs
* DOM (Document Object Model)
* Geolocation API
* Canvas and WebGL
* Audio and video APIs

### Third party APIs
* Twitter
* Facebook

## Internal and External JavaScript
### Internal JS
Internal JS is when the JS code is included directly in the HTML file:
```HTML
<div> Ahoy !</div>
<script>
  const name = 'Valery';
  console.log(name);
</script>
```

### External JS
External JS is when JS code is contained in an external file. To use it on the HTML page we use the **src**
```HTML
<script src="script.js"></script>
```

## JavaScript Script loading strategies
Because sometimes the DOM can after some JS code requires its elements we need a way to avoid this conflict.
### Internal JS Script loading
On the internal JS Script we could use:
``` HTML
<script>
document.addEventListener("DOMContentLoaded", function() {
  ...
})
</script>
``` 
### External JS Script loading
#### Use *defer*
For the external loaded JS we can use the **defer** attribute *which tells the browser to continue downloading the HTML content once the `<script>` tag element has been reached*

* Scripts using **defer** will run in the order they appear on page.

```HTML
<script src="script.js" defer></script>
```

#### Use `<script async>`
Using **async** means that the browser will download the script without blocking rendering the page and will execute it as soon as the script finishes downloading. You get **no guarantee that scripts will run in any specific order**, only that they will not stop the rest of the page from displaying.

* :warning: Use async when the scripts in the page run independently from each other and depend on no other script on the page.