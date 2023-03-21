import React from "react";
import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import WishlistCart from "../../components/wishlistCart/WishlistCart";

function Wishlist() {
  return (
    <div>
      <Header />
      <WishlistCart />
      <Footer />
    </div>
  );
}

export default Wishlist;
