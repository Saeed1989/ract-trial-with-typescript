import React from "react";
import { Home } from "./components/home/Home";
import { ProductShell } from "./components/product/ProductShell";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/core/Header";
import { Footer } from "./components/core/Footer";
import { AuthProvider } from "./utils/context/AuthProvider";
import { AboutUs } from "./components/about/AboutUs";
import { Admin } from "./components/admin/Admin";
//import { useAppInit } from "./useAppInit";

export const AppRouter: React.FC = () => {
  //const [loading] = useAppInit();
  return (
    <div id="wrapper">
      <Router>
        <Header />
        {false ? (
          <p>Reticulating splines...</p>
        ) : (
          <Switch>
            <Route path="/our-story">
              <AboutUs />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/product">
              <ProductShell />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default App;
