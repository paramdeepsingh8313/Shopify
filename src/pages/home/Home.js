import React, { useEffect, useState } from "react";
import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useStateValue } from "../../redux/StateProvider";

function Home() {
  const [data, setData] = useState([]);

  const [{ apiData, searchContext }, dispatch] = useStateValue();

  useEffect(() => {
    setData(apiData);
  }, [apiData]);

  useEffect(() => {
    const temp = searchContext && searchContext.length - 1;
    let tempArray = [];
    if (searchContext[temp]) {
      apiData &&
        apiData.map((element) => {
          if (
            element?.brand
              .toLowerCase()
              .includes(searchContext[temp].toLowerCase())
          ) {
            tempArray.push(element);
          }
        });

      setData(tempArray);
    } else {
      setData(apiData);
    }
  }, [searchContext]);

  return (
    <div>
      <Header />
      <Body data={data} />
      <Footer />
    </div>
  );
}

export default Home;
