import React, { useState, useContext, useEffect } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Checkbox,
  CardActions,
  CardMedia,
  GridListTile,
  ListSubheader,
  GridList,
  GridListTileBar,
  Container
} from "@material-ui/core";
import ConsoleLog from "./ConsoleLog";
import Product from "./Product";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 350,
    height: 300
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  },
  card: {
    maxWidth: props => props.maxWidth || 250
  },
  media: {
    height: 100
  }
}));

const Products = props => {
  const { data, handleClick, grid } = props;
  const classes = useStyles(props);

  useEffect(() => {
    console.log("Products.useEffect");
  });

  const renderGrid = () => {
    return (
      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <ConsoleLog>render()!</ConsoleLog>
          {data.map((d, idx) => {
            return (
              <Grid item lg={2} key={d.name}>
                <Product data={d} idx={idx} handleClick={handleClick} grid={grid}></Product>
                {/* <Product {...props} idx={idx}></Product> */}
              </Grid>
            );
          })}
        </Grid>
      </Container>
    );
  };
  const renderGridList = () => {
    return (
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" rows={2} cols={6}>
            <ListSubheader component="div">December</ListSubheader>
          </GridListTile>
          {data.map((d, idx) => {
            // return <Product data={d} idx={idx} handleClick={handleClick} grid={grid}></Product>;
            return (
              <GridListTile key={data.image} cols={6} rows={2}>
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
            );
          })}
        </GridList>
      </div>
    );
  };

  if (grid) {
    return renderGridList();
  }
  return renderGrid();
};

export default Products;
