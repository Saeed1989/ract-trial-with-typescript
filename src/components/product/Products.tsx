import * as React from "react";
import "./style-sessions.css";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import { NetworkUtils } from "../../utils/common/NetworkUtils";
import { Product } from "../../models/product.model";

const ProductList: any = () => {
  const data: Product[] = NetworkUtils.getPlayers();
  const { url } = useRouteMatch();

  return data.map(({ id, name }) => (
    <div
      key={id}
      className="col-xs-12 col-sm-6 col-md-6"
      style={{ padding: 5 }}
    >
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{name}</h3>
        </div>
        <Link to={`${url}/${id}`}>{"LINK"}</Link>
      </div>
    </div>
  ));
};

const ProductDetails = () => {
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
