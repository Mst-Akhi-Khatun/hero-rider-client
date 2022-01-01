import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Menubar from './components/Header/Menubar/Menubar';
import Rider from './components/Rider/Rider';
import Banner from './components/Header/Banner/Banner';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Learner from './components/Learner/Learner';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/rider">
            <Rider></Rider>
          </Route>
          <Route path="/learner">
            <Learner></Learner>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
