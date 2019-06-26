import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductData } from "../../../common/actions";

class ProductList extends Component {
  // componentDidMount() {
  //   this.props.getUserData(this.props.match.params.id);
  // }

  render() {
    console.log("dash prop", this.props);
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

const mapStoreToProps = state => {
  return {
    productData: state.productData
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getUserData: () => dispatch(getProductData()),
    updateUser: () => dispatch(updateProduct())
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(ProductList);
