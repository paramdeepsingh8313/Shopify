import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import DescriptionBody from "../../components/descriptionBody/DescriptionBody";
import { useStateValue } from "../../redux/StateProvider";

function Description() {
  const { state } = useLocation();

  const [{ apiData }, dispatch] = useStateValue();

  const result =
    apiData &&
    apiData.filter((element, index) => {
      return element?.itemID === state.id;
    });

  return (
    <div>
      <Header />
      <DescriptionBody data={result} />

      <Footer />
    </div>
  );
}

export default Description;
