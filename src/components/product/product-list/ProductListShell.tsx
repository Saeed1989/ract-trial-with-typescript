import * as React from "react";
import { ProductList } from "./ProductList";

export function ProductListShell() {
  return (
    <>
      <div className="container">
        <div className="row">
          <ProductList />
        </div>
      </div>
    </>
  );
}
