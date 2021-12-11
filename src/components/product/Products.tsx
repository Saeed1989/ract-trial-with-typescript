import * as React from "react";
import "./style-sessions.css";
import { Link, useParams } from "react-router-dom";
import { NetworkUtils } from "../../utils/common/NetworkUtils";
import { Product } from "../../models/product.model";

const ProductList: any = () => {
  const data: Product[] = NetworkUtils.getPlayers();

  console.log(data);

  return data.map(({ id, name, price: bio, details: matches }) => (
    <div
      key={id}
      className="col-xs-12 col-sm-6 col-md-6"
      style={{ padding: 5 }}
    >
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{name}</h3>
        </div>
        <div className="panel-body">
          <h5>{bio}</h5>
        </div>
        <div className="panel-body">
          <h5>{matches}</h5>
        </div>
      </div>
    </div>
  ));
};

const ProductDetails = () => {
  //const { player_id: player_id } = useParams();
  const data = NetworkUtils.getPlayerById("");

  const speaker = data;
  if (!speaker) {
    return <div>No speaker.</div>;
  }

  const { id, name, price: bio, details: matches } = speaker;

  return (
    <div key={id} className="col-xs-12" style={{ padding: 5 }}>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{name}</h3>
        </div>
        <div className="panel-body">
          <h5>{bio}</h5>
        </div>
        <div className="panel-body">
          <h5>{matches}</h5>
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
