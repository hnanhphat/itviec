import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import JobDetail from './components/JobDetail';
import JobsList from './components/JobsList';
import ProtectedRoute from './components/ProtectedRoute';
import FourOhFourPage from './components/FourOhFourPage';
import {useState} from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
      <Navbar isAuth={isAuth} />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={() => <LoginPage isAuth={isAuth} setIsAuth={setIsAuth} />} />
        <Route path="/jobs" exact component={JobsList} />
        {/* <Route path="/jobs/:id" component={JobDetail} /> */}
        <ProtectedRoute
          path="/jobs/:id"
          isAuth={isAuth}
          render={(props) => <JobDetail {...props} />}
        />
        <Route path="*" component={FourOhFourPage} />
      </Switch>
    </div>
  );
}

export default App;
