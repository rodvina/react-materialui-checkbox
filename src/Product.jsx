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
  const { data, handleClick, idx } = props;
  const classes = useStyles(props);

  useEffect(() => {
    console.log("Product.useEffect");
  });

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Checkbox
          checked={data.checked}
          onChange={handleClick(idx)}
          value={data.name}
        ></Checkbox>

        <CardContent>Hello {data.name}</CardContent>

        {/* <CardActions></CardActions> */}
        <CardMedia className={classes.media} image={data.image}></CardMedia>
      </CardActionArea>
    </Card>
  );
};

export default Products;
