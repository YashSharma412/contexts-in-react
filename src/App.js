import React from "react";
import Hello from "./Components/Hello";
import Hi from "./Components/Hi";
import Hey from "./Components/Hey";
function App() {
  return (
    <div className="App">
      
      <Hello />
      <hr />
      <Hi />
      <hr />
      <Hey />
      <h3>This is the App.js code Use Context concept</h3>
      <p>
        We create a global variable and access and update it in multiple other
        components
      </p>
      <p>
        while using context in a project , it is advisible to have a seperate
        folder named 'context' similar to the 'components' folder.
      </p>
      <p>Three steps to creating an object: </p>
      <ol>
        <li>create an object which is global in nature(empty object)</li>
        <li>add value to the object</li>
        <li>access the value of this global object</li>
      </ol>
    </div>
  );
}

export default App;
