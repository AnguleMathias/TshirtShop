/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getProductsQuery } from "../../queries/products";
import "./productList.scss";

// eslint-disable-next-line react/prefer-stateless-function
class ProductsList extends Component {
  render() {
    const { product } = this.props.data;

    return (
      <div className="more">
        <div className="containers">
          <h3>You might also like:</h3>
          <div className="row">
            {product &&
              product.map(prod => {
                return (
                  <div className="card-div col-md-3">
                    <div
                      data-key={prod.product_id}
                      className="card"
                      role="button"
                      id={prod.product_id}
                      tabIndex="0"
                    >
                      <div data-key={prod.product_id} className="card-image">
                        <img
                          data-key={prod.product_id}
                          src={require(`../../assets/images/${prod.image}`)}
                          alt="Tshirt Image"
                        />
                      </div>
                      <div data-key={prod.product_id} className="card-body">
                        <h4 data-key={prod.product_id}>
                          <b data-key={prod.product_id}>{prod.name}</b>
                        </h4>
                        <small data-key={prod.product_id}>
                          {prod.description}
                        </small>
                        {prod.discounted_price === "0.00" ? (
                          <p data-key={prod.product_id} className="price">
                            &euro; {prod.price}
                          </p>
                        ) : (
                          <p data-key={prod.product_id} className="price">
                            <small>&euro; {prod.discounted_price}</small>
                            <p data-key={prod.product_id} className="price">
                              <strike>&euro; {prod.price}</strike>
                            </p>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default graphql(getProductsQuery)(ProductsList);
