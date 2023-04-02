import React from "react";
import Card from "../card/Card";
import "./Body.css";

function Body(props) {
  return (
    <>
      <div className="body">
        {props.data &&
          props?.data.map((element, index, arr) => {
            return <Card data={element} index={index} key={index} />;
          })}
      </div>
    </>
  );
}

export default Body;
