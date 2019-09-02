import React, { useState, useContext, useEffect } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Checkbox,
  CardActions,
  CardMedia
} from "@material-ui/core";
import ConsoleLog from "./ConsoleLog";
import Product from "./Product";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: props => props.maxWidth || 250
  },
  media: {
    height: 100
  }
}));

const Products = props => {
  const { data, handleClick } = props;
  const classes = useStyles(props);

  useEffect(() => {
    console.log("Products.useEffect");
  });

  return (
    <Grid container>
      <ConsoleLog>render()!</ConsoleLog>
      {data.map((d, idx) => {
        return (
          <Grid item lg={3} key={d.name}>
            <Product data={d} idx={idx} handleClick={handleClick}></Product>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Products;
