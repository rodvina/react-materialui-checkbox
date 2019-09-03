import React, { useState, useContext, useEffect } from "react";
import { Grid, Card, CardActionArea, CardContent, Checkbox, CardActions, CardMedia, GridListTile, GridListTileBar, IconButton } from "@material-ui/core";
import ConsoleLog from "./ConsoleLog";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: props => props.maxWidth || 250,
    width: props => props.width || 200
  },
  media: {
    height: 100
  },
  gridList: {
    width: 200,
    height: 150
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
}));

const Product = props => {
  const { data, handleClick, idx, grid } = props;
  const classes = useStyles(props);

  useEffect(() => {
    console.log("Product.useEffect");
  });

  const renderGrid = () => {
    return (
      <React.Fragment>
        <Checkbox checked={data.checked} onChange={handleClick(idx)} value={data.name}></Checkbox>
        <GridListTile key={data.image}>
          <img src={data.image} alt={data.name} />
          <GridListTileBar
            title={data.name}
            subtitle="no subtitle"
            // actionIcon={
            //   <IconButton
            //     aria-label={`info about ${data.name}`}
            //     className={classes.icon}
            //   >
            //     <InfoIcon />
            //   </IconButton>
            // }
          />
        </GridListTile>
      </React.Fragment>
    );
  };
  const renderCard = () => {
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <Checkbox checked={data.checked} onChange={handleClick(idx)} value={data.name}></Checkbox>

          <CardContent>Hello {data.name}</CardContent>

          {/* <CardActions></CardActions> */}
          <CardMedia className={classes.media} image={data.image}></CardMedia>
        </CardActionArea>
      </Card>
    );
  };

  if (grid) {
    return renderGrid();
  }
  return renderCard();
};

export default Product;
