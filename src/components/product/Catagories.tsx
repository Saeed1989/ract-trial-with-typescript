import * as React from "react";
import { useRouteMatch, Link } from "react-router-dom";

type Props = {
  to: string;
  label: string;
};

export const NavigationLink: React.FC<Props> = (props) => {
  return (
    <Link
      style={{
        fontSize: 56,
        border: "solid 1px white",
        borderRadius: 20,
        margin: 20,
        padding: 20,
        textAlign: "center",
        backgroundColor: "#0D1424",
        textTransform: "capitalize",
      }}
      to={props.to}
    >
      {props.label.toLowerCase()}
    </Link>
  );
};

export const Catagories: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <section className="banner">
      <img src="images/banner3.png" alt="" />
      <div className="col-md-12" style={{ position: "absolute", top: 50 }}>
        <div className="container jumboContainer">
          <div
            className="col-md-8 middle"
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <NavigationLink to={`${url}/0`} label="Catagory 1" />
            <NavigationLink to={`${url}/1`} label="Catagory 2" />
            <NavigationLink to={`${url}/2`} label="Catagory 3" />
          </div>
        </div>
      </div>
    </section>
  );
};
