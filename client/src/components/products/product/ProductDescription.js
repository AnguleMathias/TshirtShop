/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getOneProduct } from "../../../graphql/queries/products";
import "./productDescription.scss";

class ProductDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  sizes() {
    const tshirtSizes = [
      { id: 1, value: "S" },
      { id: 2, value: "M" },
      { id: 3, value: "L" },
      { id: 4, value: "XL" },
      { id: 5, value: "XXL" }
    ];
    return tshirtSizes.map(tshirt => (
      <div data-value={tshirt.value} className="col-2">
        <input
          id={tshirt.id}
          type="radio"
          name="option-0"
          value={tshirt.value}
        />
        <label htmlFor={tshirt.id}>{tshirt.value}</label>
      </div>
    ));
  }

  color() {
    const tshirtColor = [
      { id: 6, value: "White" },
      { id: 7, value: "Black" },
      { id: 8, value: "Red" },
      { id: 9, value: "Orange" },
      { id: 10, value: "Yellow" },
      { id: 11, value: "Green" },
      { id: 12, value: "Blue" },
      { id: 13, value: "Indigo" },
      { id: 14, value: "Purple" }
    ];
    return tshirtColor.map(tcolor => {
      const colour = {
        backgroundColor: ""
      };
      colour.backgroundColor = tcolor.value;
      return (
        <div data-value={tcolor.value} className="col-2">
          <input
            id={tcolor.value}
            type="radio"
            name="option-1"
            value={tcolor.value}
          />

          <label htmlFor={tcolor.value}>
            <span style={colour} />
          </label>
        </div>
      );
    });
  }

  render() {
    const { data } = this.props;
    if (data.getSingleProduct === undefined) {
      return (
        <div className=" spinner-grow" role="status">
          <span className="sr-only"> Loading ...</span>
        </div>
      );
    }
    const imageName = require(`../../../assets/images/${this.props.data.getSingleProduct[0].image}`);
    return (
      <div
        className="containers p-3 bg-white rounded"
        style={{ height: "75%" }}
      >
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col-5">
                <div className="col-4 d-flex flex-column p-1 img-small">
                  <img
                    src={imageName}
                    className="img-rounded img-thumbnail m-1 img"
                    alt=""
                  />
                  <img
                    src={imageName}
                    className="img-rounded img-thumbnail m-1 img"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-7">
                <img
                  src={imageName}
                  className="img-fluid m-auto img img-big"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col">
            <h1 itemProp="name">{data.getSingleProduct[0].name}</h1>
            <div itemProp="offers">
              {data.getSingleProduct[0].discounted_price === 0 ? (
                <div className="price-shipping mb-4 ml-4">
                  <h4>
                    &euro; 
                    {data.getSingleProduct[0].price}
                  </h4>
                </div>
              ) : (
                <div className="row price-shipping mb-4 ml-4">
                  <span className="col-2">
                    <h4>
                      &euro; 
                      {data.getSingleProduct[0].discounted_price}
                    </h4>
                  </span>
                  <span>
                    <h4>
                      <strike>
                        &euro; 
                        {data.getSingleProduct[0].price}
                      </strike>
                    </h4>
                  </span>
                </div>
                )}
            </div>
            <div className="ml-0 mr-0 mt-1 mb-15 row">
              <div className="col-6" data-option-index="0">
                <div className="header">
                  <h4>SIZE</h4>
                </div>
                <div className="size-switch row">{this.sizes()}</div>
              </div>
              <div className="swatch clear-fix col -6">
                <div className="header">
                  <h4>COLOR</h4>
                </div>
                <div className="color-switch row">{this.color()}</div>
              </div>
            </div>
            <form id="add-to-cart-form">
              <div id="add-to-cart">
                <button className="btn btn-primary btn-lg btn-1">
                  {" "}
                  Add to Cart
                </button>
              </div>
            </form>
            <div className="description">
              <div className="description-label">
                <h4>Description</h4>
              </div>
              <div className="description-text">
                <small>
                  {data.getSingleProduct[0].description}{" "}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default graphql(getOneProduct, {
  options: () => ({
    variables: {
      product_id: 2
    }
  })
})(ProductDescription);
