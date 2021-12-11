import * as React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import "./style-sessions.css";
import { ProductDetailsShell, ProductListShell } from "./Products";
import { AboutUs } from "../about/AboutUs";
import { Catagories } from "./Catagories";
import ErrorBoundary from "./ErrorBoundary";

export function ProductShell() {
  const { path } = useRouteMatch();

  return (
    <ErrorBoundary>
      <Switch>
        <Route path={`${path}/:catId/:productId`}>
          <ProductDetailsShell />
        </Route>
        <Route path={`${path}/:catId`}>
          <ProductListShell />
        </Route>
        <Route path={`${path}`}>
          <Catagories />
        </Route>
      </Switch>
    </ErrorBoundary>
  );
}
