import React from "react";
import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useStateValue } from "../../redux/StateProvider";

function Home() {
  const [{ apiData }, dispatch] = useStateValue();
  // console.log("apiDataaaaaaaaaaaaaa", apiData);
  return (
    <div>
      <Header />
      <Body data={apiData} />
      <Footer />
    </div>
  );
}

export default Home;
