import "./App.css";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Wishlist from "./pages/wishlist/Wishlist";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [apiResp, setApiResp] = useState();

  useEffect(() => {
    fetch("http://localhost:3001/product")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setApiResp(data);
      });
  }, []);

  console.log("apiiiiiii", apiResp);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
