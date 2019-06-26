import React, { Component } from "react";
import { connect } from "react-redux";

import { Col } from "reactstrap";

import { getProductData } from "../../../common/actions";

import { ProductList, Cart } from "../../molecules";

class Content extends Component {
  render() {
    return (
      <div className="row">
        <Col sm="12" md="9">
          <ProductList />
        </Col>
        <Col sm="12" md="3">
          <Cart />
        </Col>
      </div>
    );
  }
}

const mapStoreToProps = state => {
  return {
    user: state.productData
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
)(Content);
