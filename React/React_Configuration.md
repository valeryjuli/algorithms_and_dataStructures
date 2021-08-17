# ReactJS

## React JS and React Native
Reactjs, eventually, is a JavaScript library, which enables the programmer to create an engaging and high performing UI Layer while React Native is an entire framework for building cross-platform apps, be it web, iOS or Android. 
* In Reactjs, virtual DOM is used to render browser code in Reactjs while in React Native, native APIs are used to render components in mobile.

## Creation with bolierplate
1. Install create-react-app ``npm install -g create-react-app``
2. On the directory create a react app with `npx create-react-app app-name`

This will install different tools for React app development for example:
* **Babel**: Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. **ES6** introduced arrow functions, let, const and some other features not availabe in older versions of JS, Babel allows us to do backwards compatibility.

3. Run the react app ````npm start```` 

## Backend on different port (PROXY SETTINGS) 
On full-stack applications one may want to run the FrontEnd App using an origin and port **A:8000** and a different origin and port for the BackEnd **B:5000**. For this to work, we need to:\
* Specify on package.json the proxy, then any unrecognized request without a text/html accept header will be redirected to the specified proxy.[^2]

The proxy option supports HTTP, HTTPS and WebSocket connections. Now we can use the backend server specified with proxy and our application.


[^1] https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

[^2] Tutorial React + Express (PT) https://www.twilio.com/blog/configure-um-app-react-com-um-proxy-de-servidor-node-js

