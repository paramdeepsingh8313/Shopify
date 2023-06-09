import React, { useEffect, useState } from "react";
import "./WishlistBody.css";
import { useStateValue } from "../../redux/StateProvider";
import { NavLink, useNavigate } from "react-router-dom";

function WishlistBody() {
  const [{ WishlistArray, apiData, cartArray }, dispatch] = useStateValue();

  const Navigate = useNavigate();

  const [temp, setTemp] = useState([]);

  function refresh() {
    let temp = [];

    apiData &&
      apiData.map((element) => {
        WishlistArray &&
          WishlistArray.map((elem) => {
            if (element?.itemID === elem) {
              temp.push(element);
            }
          });
      });
    setTemp(temp);
  }

  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    refresh();
  }, [WishlistArray]);

  function removeItem(id) {
    let result =
      WishlistArray &&
      WishlistArray.filter((element) => {
        return element !== id;
      });

    dispatch({
      type: "WISHLIST",
      value: result,
    });

    refresh();
  }

  function addToCart(id) {
    if (cartArray.includes(id)) {
      //do nothing
    } else {
      let temp = cartArray;
      temp.push(id);

      dispatch({
        type: "CARTLIST",
        value: temp,
      });
    }
  }

  function handleCart(id) {
    if (cartArray.includes(id)) {
      //do nothing
    } else {
      let temp = cartArray;
      temp.push(id);

      dispatch({
        type: "CARTLIST",
        value: temp,
      });
    }

    Navigate("/cart");
  }

  return (
    <div className="WishListBodyParent">
      {temp.length > 0 ? (
        <div className="WishlistCart">
          {temp &&
            temp.map((element) => {
              return (
                <div className="itemContainer">
                  <div className="itemImg">
                    {element && element?.categoryId === 1001 ? (
                      <img
                        src={require(`../../assets/images/men/${element?.img}`)}
                      />
                    ) : element && element?.categoryId === 1002 ? (
                      <img
                        src={require(`../../assets/images/women/${element?.img}`)}
                      />
                    ) : element && element?.categoryId === 1003 ? (
                      <img
                        src={require(`../../assets/images/kids/${element?.img}`)}
                      />
                    ) : element && element?.categoryId === 1004 ? (
                      <img
                        src={require(`../../assets/images/beauty/${element?.img}`)}
                      />
                    ) : (
                      <img
                        src={require(`../../assets/images/home&living/${element?.img}`)}
                      />
                    )}
                  </div>
                  <div className="itemContent">
                    <p>{element?.brand}</p>

                    <p>Rs. {element?.price}</p>

                    {element?.stock === true ? (
                      <p className="InStock">In Stock</p>
                    ) : (
                      <p className="outOfStock">Out of Stock</p>
                    )}

                    <div>
                      <button
                        onClick={() => removeItem(element?.itemID)}
                        className="wishlistPageRemoveBtn"
                      >
                        Remove
                      </button>
                      <button
                        onClick={() => addToCart(element?.itemID)}
                        className="wishlistPageCartBtn"
                        disabled={element?.stock ? false : true}
                      >
                        Cart
                      </button>
                      {/* <NavLink to="/cart" state={{ id: element?.itemID }}> */}
                      <button
                        className="wishlistPageBuyBtn"
                        onClick={() => handleCart(element?.itemID)}
                        disabled={element?.stock ? false : true}
                      >
                        Buy Now
                      </button>
                      {/* </NavLink> */}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      ) : (
        <h1 className="noItemFoundWishList">
          Currently No Item found in the Wishlist
        </h1>
      )}
    </div>
  );
}

export default WishlistBody;
