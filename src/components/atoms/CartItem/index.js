import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

class ProductList extends Component {
  // componentDidMount() {
  //   this.props.getUserData(this.props.match.params.id);
  // }

  render() {
    const { productDetail } = this.props;
    return (
      <div>
        {productDetail.productName}
      </div>
    );
  }
}

export default ProductList;
