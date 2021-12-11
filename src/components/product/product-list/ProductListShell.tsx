import * as React from "react";
import { ProductList } from "./ProductList";

export const ProductListShell: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <ProductList />
        </div>
      </div>
    </>
  );
};
