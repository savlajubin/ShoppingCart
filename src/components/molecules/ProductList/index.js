import React, { Component } from "react";
import { connect } from "react-redux";

import { getProductData } from "../../../common/actions";

import Product from "../../atoms/Product";

class ProductList extends Component {
  componentDidMount() {
    this.props.getProductData();
  }

  render() {
    console.log("productlist prop", this.props);
    let { productData } = this.props;

    const ProductDataList =
      productData && productData.length ? (
        productData.map(p => {
          return (p.isPublished === "true" && !p.addedToCart) ? (
            <div className="col-sm-4 margin-s-b" key={p.productName}>
              <Product productDetail={p} />
            </div>
          ) : (
            ""
          );
        })
      ) : (
        <div>No Products</div>
      );

    return (
      <div>
        <div className="row">
          <div className="col-12 text-left">
            <span>Product List</span>
          </div>
          <div className="row">{ProductDataList}</div>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = state => {
  return {
    productData: state.product.productData
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getProductData: () => dispatch(getProductData())
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(ProductList);
