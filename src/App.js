import "./App.css";
import React from "react";
import Form from "./components/Form";

class App extends React.Component {
  constructor() {
    super();
    this.state = { taskValue: [] };
  }
 
  render() {
    return (
      <div className="todo-app">
         <h1 className="rubik-mono-one-regular">Daily Tasks</h1>
         <hr/>
       <Form/>
      </div>
    );
  }
}
export default App;
