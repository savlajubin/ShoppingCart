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

import { addToCart } from "../../../common/actions";

class Product extends Component {
  // componentDidMount() {
  //   this.props.getUserData(this.props.match.params.id);
  // }

  render() {
    const { productDetail, addToCart } = this.props;
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>{productDetail.productName}</CardTitle>
            <CardImg
              top
              src={productDetail.productImage}
              alt={productDetail.productName}
            />
            <CardText>${productDetail.price}</CardText>
            <Button onClick={() => {
              addToCart(productDetail)
            }}>
            Add to cart
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

const mapStoreToProps = state => {
  return {
    // productData: state.product.productData
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: (productDetail) => dispatch(addToCart(productDetail))
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Product);
