import * as React from "react";
import { ProductDetails } from "./ProductDetails";

export function ProductDetailsShell() {
  return (
    <>
      <div className="container">
        <div className="row">
          <ProductDetails />
        </div>
      </div>
    </>
  );
}
