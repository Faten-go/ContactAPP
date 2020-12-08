import './App.css';
import { Route, Switch } from 'react-router-dom';
import ContactList from './Components/ContactList';
import Add from './Components/Add';

function App() {
  return (
    <div className="App">
      MERN
<Switch>
  <Route exact path="/" component={ContactList} />
  <Route path={["/add","/edit/:id"]} component={Add} />
</Switch>


    </div>
  );
}

export default App;
