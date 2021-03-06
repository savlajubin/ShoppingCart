import React, { Component } from "react";
import { connect } from "react-redux";

import CartItem from "../../atoms/CartItem";

import _ from "lodash";

class Cart extends Component {

  render() {
    let { cartData } = this.props;
    let itemsInCart = _.countBy(cartData, 'addedToCart');

    return (
      <div>
        <div className="row">
          <div className="col-12 text-center">
            <span>Shopping Cart</span>
          </div>
        </div>
        <div className="shopping-cart-wrapper">
          <div className="row">
            <div className="col-12 text-center">
              {itemsInCart.true ? (
                cartData.map(c => {
                  return c.addedToCart ? (
                    <div key={c.productName}>
                      <CartItem productDetail={c} />
                    </div>
                  ) : (
                      ""
                    );
                })
              ) : (
                  <div>No Products</div>
                )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = state => {
  return {
    cartData: state.product.productData
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // getcartData: () => dispatch(getcartData())
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Cart);
