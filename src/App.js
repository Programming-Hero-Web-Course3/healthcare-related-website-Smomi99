
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Services from './components/Services/Services';
import DoctorInfo from './components/DoctorInfo/DoctorInfo';
import SingleService from './components/SingleService/SingleService';
import Signup from './components/Singup/Signup';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/signup">
              <Signup></Signup>
            </Route>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute
              path="/doctors">
              <DoctorInfo></DoctorInfo>
            </PrivateRoute>
            <PrivateRoute
              path="/service/:serviceId">
              <SingleService></SingleService>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
