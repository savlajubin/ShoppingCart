import React, { Component } from "react";
import { connect } from "react-redux";

import { getProductData, updateProduct } from "../../../common/actions";

import Product from "../../atoms/Product";

class ProductList extends Component {
  componentDidMount() {
    this.props.getProductData(this.props.match.params.id);
  }

  render() {
    console.log("dash prop", this.props);
    let { productData } = this.props;

    const ProductDataList = productData.length ? (
      productData.map(p => {
        return (
          <div className="row m-1 border-bottom border-warning" key={p.id}>
            <div className="col-sm-4">
              <Product productDetail={p} />
            </div>
          </div>
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
          <div className="col-12">{ProductDataList}</div>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = state => {
  return {
    productData: state.productData
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getProductData: () => dispatch(getProductData()),
    updateUser: () => dispatch(updateProduct())
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(ProductList);
