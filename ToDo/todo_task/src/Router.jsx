import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import ToDoManager from "./Components/ToDoManager/ToDoManager";
import ToDoForm from "./Components/ToDoForm/ToDoForm";

export default class BasicExample extends React.Component {
  render() {
    return (
      <Router>
        <Route
          exact
          path="/"
          component={(props) => <ToDoManager {...props} />}
        />
        <Route
          path="/Add"
          exact
          component={(props) => <ToDoForm {...props} />}
        />
      </Router>
    );
  }
}
