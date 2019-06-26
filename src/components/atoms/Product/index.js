import React, { Component } from "react";
import { connect } from "react-redux";

class ProductList extends Component {
  // componentDidMount() {
  //   this.props.getUserData(this.props.match.params.id);
  // }

  render() {
    const { productDetail } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-12 text-center">
            <span>{productDetail.productName}</span>
          </div>
          <div className="col-12 text-center">
            <img src={productDetail.image} alt={productDetail.productName} />
          </div>
          <div className="col-12 text-center">
            <span>{productDetail.price}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
