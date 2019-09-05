import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getProductsQuery } from "../../graphql/queries/products";
import "../Home.css";
import ProductDescription from "./product/ProductDescription";
import ProductsList from "./ProductsList";

class Home extends Component {
  render() {
    return (
      <div className="home overflow-auto" style={{ height: "100vh" }}>
        <ProductDescription />
        <ProductsList />
      </div>
    );
  }
}

export default graphql(getProductsQuery)(Home);
