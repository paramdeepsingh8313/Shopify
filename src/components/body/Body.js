import React from "react";
import Card from "../card/Card";
import "./Body.css";

function Body(props) {
  return (
    <>
      <div className="body">
        {props.data}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default Body;
