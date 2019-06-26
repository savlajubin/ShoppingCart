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
        <Card>
          <CardBody>
            <CardTitle>{productDetail.productName}</CardTitle>
            <CardImg
              top
              width="100%"
              src={productDetail.image}
              alt={productDetail.productName}
            />
            <CardText>{productDetail.price}</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ProductList;
