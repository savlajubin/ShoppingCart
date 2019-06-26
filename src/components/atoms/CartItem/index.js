import React, { Component } from "react";
import { connect } from "react-redux";

import { removeFromCart } from "../../../common/actions";

import {
  Button
} from "reactstrap";

class CartItem extends Component {

  render() {
    const { productDetail, removeFromCart } = this.props;
    return (
      <div className="margin-m bordered-box">
        <div className="row">
          <div className="col-6">{productDetail.productName}</div>
          <div className="col-6">
            <Button onClick={() => {
              removeFromCart(productDetail)
            }}>
              Remove
        </Button>
          </div>
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
    removeFromCart: (productDetail) => dispatch(removeFromCart(productDetail))
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(CartItem);
