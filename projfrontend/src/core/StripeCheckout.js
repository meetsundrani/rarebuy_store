import React from "react";
import { cartEmpty } from "./helper/cartHelper";
import { useState } from "react";
import { isAutheticated } from "../auth/helper";

const StripeCheckout = ({
  products,
  setReload = (f) => f,
  reload = undefined,
}) => {
  const [data, setdata] = useState({
    loading: false,
    success: false,
    error: "",
    address: "",
  });

  const token = isAutheticated() && isAutheticated().token;
  const userId = isAutheticated() && isAutheticated().user._id;

  const getFinalPrice = () => {
    return products.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue;
    }, 0);
  };

  return (
    <div className="text-white center">Stripe checkout {getFinalPrice()}</div>
  );
};

export default StripeCheckout;
