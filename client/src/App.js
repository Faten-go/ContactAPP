import { useDispatch } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "./App.css";
import Add from "./Components/Add";
import ContactList from "./Components/ContactList";
import Error from "./Components/Error";
import { toggleFalse } from "./JS/actions/edit";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>MERN Contact App</h2>
      <Button inverted color="blue" onClick={() => dispatch(toggleFalse())}>
        <Link to="/add">Add Contact</Link>
      </Button>
      <Button inverted color="blue">
        <Link to="/">Show Contacts</Link>
      </Button>
      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route path={["/add", "/edit/:id"]} component={Add} />
        <Route path="/*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
