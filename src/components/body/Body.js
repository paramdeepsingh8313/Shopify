import React from "react";
import Card from "../card/Card";
import "./Body.css";
import { useStateValue } from "../../redux/StateProvider";

function Body(props) {
  const [{ name, age }, dispatch] = useStateValue();
  return (
    <>
      <div className="body">
        {props.data}
        {name && name}
        {age && age}
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
