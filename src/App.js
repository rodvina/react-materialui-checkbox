import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";

import { makeStyles } from "@material-ui/styles";

import logo from "./logo.svg";
import "./App.css";
import { StylesProvider } from "@material-ui/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Products from "./Products";
import MyProducts from "./MyProducts";
import ProductsContainer from "./ProductsContainer";

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      contained: {
        backgroundColor: "#328389"
      }
    }
  }
});
const style = {
  card: {
    maxWidth: 345,
    height: 300
  },
  media: {
    height: 340
  }
};

const handleClick = event => () => {
  console.log("handleClick!");
  // setStyle({ ...style }, { card: { background: "#000000" } });
};

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        {/* <StylesProvider injectFirst> */}
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <p>What is the plan for today, Rodney</p>
        <Typography variant="h1" component="h2">
          h1. Variant Heading. h2 component
        </Typography>
        <Typography variant="h2" component="span">
          h2. Variant Heading
        </Typography>
        <h1>h1. Tag Heading</h1>
        <h2>h2. Tag Heading</h2>
        {/* <Products
          maxWidth={200}
          data={["Bob", "Lisa", "Rodney"]}
          handleClick={handleClick}
        ></Products> */}
        <ProductsContainer></ProductsContainer>
        {/* </StylesProvider> */}
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default App;
