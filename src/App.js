import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
