import React from "react";
import "./Card.css";

import cart from "../../assets/icons/cart.svg";
import wishlist from "../../assets/icons/wishlist.svg";

function Card(props) {
  return (
    <div className="card">
      <div className="cardImg">
        {props.data && props?.data?.categoryId === 1001 ? (
          <img
            src={require(`../../assets/images/men/${
              props.data && props?.data?.img
            }`)}
          />
        ) : props.data && props?.data?.categoryId === 1002 ? (
          <img
            src={require(`../../assets/images/women/${
              props.data && props?.data?.img
            }`)}
          />
        ) : (
          <img
            src={require(`../../assets/images/kids/${
              props.data && props?.data?.img
            }`)}
          />
        )}
      </div>

      <div className="cardDesc">
        <p>{props.data && props?.data?.brand}</p>
      </div>
      <div className="cardBtnDiv">
        <button className="cardBtn">
          <img src={wishlist} />
        </button>
        <button className="cardBtn">
          <img src={cart} />
        </button>
      </div>
    </div>
  );
}

export default Card;
