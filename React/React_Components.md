# React Components
React components are like JS functions, they receive as parameters certain *properties* called **props** in React, and they produce an output. In React, the output are React Elements that will be shown on screen.

* PROPS are readonly
* All React components must act like pure functions with respect to their props.

## Function components
The function components accept an argumen **props** and returns REact objects, for example an JSX h1 element.

```` javascript
function myComponent (props) {
  return <h1>Component, {props.name}</h1>
}

const myComponent = (props) => {
  return <h1>Component, {props.name}</h1>
}
````
### State management
The stae management for functional components can be done with **ReactHooks** and *useState*

### Render of component

## Class components
The function components accept an argumen **props** and returns REact objects, for example an JSX h1 element.

```` javascript
function myComponent (props) {
  return <h1>Component, {props.name}</h1>
}

const myComponent = (props) => {
  return <h1>Component, {props.name}</h1>
}
````
### State management
...