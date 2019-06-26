import React, { Component } from "react";
import { connect } from "react-redux";
import { getcartData } from "../../../common/actions";
import CartItem from "../../atoms/CartItem";

class Cart extends Component {
  componentDidMount() {
    this.props.getcartData();
  }

  render() {
    console.log("cart prop", this.props);
    // let { cartData } = this.props;
    let cartData = [
      {
        isPublished: "true",
        productName: "Apple iPhone X",
        productImage:
          "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-x/iphone-x-silver-grid.png",
        price: "299"
      },
      {
        isPublished: "true",
        productName: "Apple iPhone 8",
        productImage:
          "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-8/iphone-8-silver-grid.png",
        price: "100"
      },
      {
        isPublished: "false",
        productName: "Apple iPhone 8 Plus",
        productImage:
          "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-8/iphone-8plus-space-grey-grid.png",
        price: "99"
      }
    ];

    const cartList =
      cartData && cartData.length ? (
        cartData.map(c => {
          return c.isPublished === "true" ? (
            <div className="col-sm-4">
              <CartItem productDetail={c} key={c.productName} />
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
          <div className="col-12 text-center">
            <span>Shopping Cart</span>
          </div>
        </div>
        <div className="shopping-cart-wrapper">
          <div className="row">
            <div className="col-12 text-center" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = state => {
  return {
    cartData: state.cartData
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getcartData: () => dispatch(getcartData())
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Cart);
