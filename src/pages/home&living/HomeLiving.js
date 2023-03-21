import React, { useState, useEffect } from "react";
import "./HomeLiving.css";

import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useStateValue } from "../../redux/StateProvider";

function HomeLiving() {
  const [{ apiData }, dispatch] = useStateValue();

  const [HomeData, setHomeData] = useState();

  useEffect(() => {
    let tempArray = [];

    apiData &&
      apiData.map((element) => {
        if (element?.categoryId === 1005) {
          tempArray.push(element);
        }
      });

    setHomeData(tempArray);
  }, [apiData]);

  return (
    <div>
      <Header />
      <Body data={HomeData && HomeData} />
      <Footer />
    </div>
  );
}

export default HomeLiving;
