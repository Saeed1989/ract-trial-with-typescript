import * as React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import "./style-sessions.css";
import { ProductDetailsShell, ProductListShell } from "./Products";
import { AboutUs } from "../about/AboutUs";
import { ProductList } from "./Catagories";
import ErrorBoundary from "./ErrorBoundary";

export function ProductShell() {
  const { path } = useRouteMatch();

  return (
    <ErrorBoundary>
      <Switch>
        <Route path={`${path}/products/:speaker_id`}>
          <ProductDetailsShell />
        </Route>
        <Route path={`${path}/products`}>
          <ProductListShell />
        </Route>
        <Route path={`${path}/about`}>
          <AboutUs />
        </Route>
        <Route path={`${path}`}>
          <ProductList />
        </Route>
      </Switch>
    </ErrorBoundary>
  );
}
