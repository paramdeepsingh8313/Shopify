import React, { useEffect, useState } from "react";
import "./WishlistCart.css";
import { useStateValue } from "../../redux/StateProvider";

function WishlistCart() {
  const [{ WishlistArray, apiData }, dispatch] = useStateValue();

  const [temp, setTemp] = useState([]);

  useEffect(() => {
    apiData &&
      apiData.map((element) => {
        if (WishlistArray.includes(element?.itemID)) {
          setTemp((temp) => [...temp, element]);
        }
      });
  }, [apiData, WishlistArray]);

  //   const [finalArray, setFinalArray] = useState([]);

  //   useEffect(() => {
  //     let TempStr = [];
  //     temp &&
  //       temp.map((element) => {
  //         TempStr.push(String(element));
  //       });

  //     let uniqueVal = setTemp(TempStr);
  //     setFinalArray(uniqueVal);
  //   }, [temp]);

  //   console.log("finalArray", finalArray);

  return (
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
              <h1>{element?.brand}</h1>
              <br />
              <h1>{element?.price}</h1>
              <br />
            </div>
          );
        })}
    </div>
  );
}

export default WishlistCart;
