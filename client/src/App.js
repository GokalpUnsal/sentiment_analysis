import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, { useState } from "react";
import ProductDetails from './components/ProductDetails';
import ProductList from './components/ProductList';

export const AppContext = React.createContext();

function App() {

  const [appState, setAppState] = useState({
    product:null,
    url:"http://localhost:8080"
  });

  return (
    <AppContext.Provider value={{ appState: appState, setAppState: setAppState }}>
    <Router>
      <Switch>
          <Route path="/detail">
            <ProductDetails />
          </Route>
          <Route path="/">
          <ProductList />
          </Route>
        </Switch>
    </Router>
    </AppContext.Provider>
  );
}

export default App;
