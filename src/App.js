import "./App.css";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Wishlist from "./pages/wishlist/Wishlist";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState, useReducer } from "react";

import Men from "./pages/men/Men";
import Women from "./pages/women/Women";
import Kids from "./pages/kids/Kids";
import HomeLiving from "./pages/home&living/HomeLiving";
import Beauty from "./pages/beauty/Beauty";

import { useStateValue } from "./redux/StateProvider";
import Checkout from "./pages/checkout/Checkout";

function App() {
  const [apiResp, setApiResp] = useState();

  const [, dispatch] = useStateValue();

  useEffect(() => {
    fetch("http://localhost:3001/product")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setApiResp(data);
      });
  }, []);

  useEffect(() => {
    dispatch({ type: "APIDATA", value: apiResp });
  }, [apiResp]);

  // console.log("apiiiiiii", apiResp);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="cart" element={<Cart />} />

          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/home&living" element={<HomeLiving />} />
          <Route path="/checkout/:id" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
