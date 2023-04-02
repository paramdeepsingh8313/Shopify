import React from "react";
import Body from "../../components/body/Body";
import CartBody from "../../components/cartBody/CartBody";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import { useStateValue } from "../../redux/StateProvider";

function Cart() {
  const [{ apiData }, dispatch] = useStateValue();
  return (
    <div>
      <Header />
      <CartBody />
      <Footer />
    </div>
  );
}

export default Cart;
