import React, { Component } from "react";
import { connect } from "react-redux";

import { removeFromCart } from "../../../common/actions";

import {
  Button
} from "reactstrap";

class CartItem extends Component {

  render() {
    const { productDetail } = this.props;
    return (
      <div>
        {productDetail.productName}
        <Button onClick={() => {
          removeFromCart(productDetail)
        }}>
          Remove
        </Button>
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
