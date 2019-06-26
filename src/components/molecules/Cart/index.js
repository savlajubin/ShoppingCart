import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductData } from "../../../common/actions";

class Cart extends Component {
  // componentDidMount() {
  //   this.props.getUserDataById(this.props.match.params.id);
  // }

  render() {
    console.log("dash prop", this.props);
    return (
      <div>
        <div className="row">
          <div className="col-12 text-center">
            <span>User Profile</span>
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
    getUserData: () => dispatch(getProductData())
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Cart);
