import React, { useState, useContext, useEffect } from "react";
import { Grid, Card, CardActionArea, CardContent } from "@material-ui/core";
import ConsoleLog from "./ConsoleLog";

import { makeStyles, styled, withStyles } from "@material-ui/styles";
import Products from "./Products";

const initialStyle = {
  card: {
    maxWidth: 345,
    height: 500,
    backGround: "#ffffff"
  },
  media: {
    height: 340
  }
};

const MyProducts = props => {
  const { classes, data } = props;
  const [style, setStyle] = useState([initialStyle]);

  useEffect(() => {});

  const handleClick = event => () => {
    console.log("handleClick!");
    // setStyle({ ...style }, { card: { background: "#000000" } });
  };

  return (
    <Products maxWidth={100} data={data} handleClick={handleClick}></Products>
  );
};

export default MyProducts;
