import {React, useState, useEffect} from 'react';
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = (props) => {
  const [user, setUser] = useState(props.isAuth);
  useEffect(() => {setUser(props.isAuth);}, [props.isAuth]);

  if (user === true) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/login" />;
  }
}

export default ProtectedRoute
