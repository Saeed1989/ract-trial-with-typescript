import * as React from "react";
import { Link, useParams } from "react-router-dom";
import { NetworkUtils } from "../../../utils/common/NetworkUtils";

export const ProductDetails = () => {
  const { productId } = useParams() as any;
  const data = NetworkUtils.getPlayerById(+productId);

  const product = data;
  if (!product) {
    return <div>Product details not found</div>;
  }

  const { id, name, price, details } = product;

  return (
    <div key={id} className="col-xs-12" style={{ padding: 5 }}>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Name: {name}</h3>
        </div>

        <div className="panel-body">
          <h5>Price : {price}</h5>
        </div>
        <div className="panel-body">
          <h5>Details: {details}</h5>
        </div>
      </div>
    </div>
  );
};
