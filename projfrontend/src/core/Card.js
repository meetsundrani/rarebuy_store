import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import { addItemToCart } from "./helper/cartHelper";
import ImageHelper from "./helper/ImageHelper";
const Card = ({ product, removeFromCart = false }) => {
  const cartTitle = product ? product.name : "A photo from pixel";
  const cartDescription = product ? product.description : "Default Description";
  const cartPrice = product ? product.price : "default price";

  const [redirect, setRedirect] = useState(false);
  const [count, setcount] = useState(product.count);

  const addToCart = () => {
    addItemToCart(product, () => setRedirect(true));
  };
  const getARedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCart = () => {
    return (
      addToCart && (
        <button
          onClick={addToCart()}
          className="btn btn-block btn-outline-success mt-2 mb-2"
        >
          Add to Cart
        </button>
      )
    );
  };
  const showRemoveFromCart = () => {
    return (
      removeFromCart && (
        <button
          onClick={() => {}}
          className="btn btn-block btn-outline-danger mt-2 mb-2"
        >
          Remove from cart
        </button>
      )
    );
  };

  return (
    <div className="card text-white bg-dark border border-info ">
      <div className="card-header lead">{cartTitle}</div>
      <div className="card-body">
        {getARedirect(redirect)}
        <ImageHelper product={product} />
        <p className="lead bg-success font-weight-normal text-wrap">
          {cartDescription}
        </p>
        <p className="btn btn-success rounded  btn-sm px-4">${cartPrice}</p>
        <div className="row">
          <div className="col-12">{showAddToCart()}</div>
          <div className="col-12">{showRemoveFromCart()}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
