import * as React from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import { NetworkUtils } from "../../../utils/common/NetworkUtils";
import { Product } from "../../../models/product.model";

export const ProductList: React.FC = () => {
  const data: Product[] = NetworkUtils.getPlayers();
  const { url } = useRouteMatch();

  return (
    <>
      {data.map(({ id, name }) => (
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
      ))}
    </>
  );
};
