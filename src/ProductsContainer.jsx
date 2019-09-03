import React, { useState, useContext, useEffect } from "react";
import _ from "lodash";

import Products from "./Products";
import img from "./IMG_1844.jpg";
import { Button } from "@material-ui/core";
// const img = "./IMG_1844.jpg";

const initialData = [
  { name: "Bob", checked: true, image: img },
  { name: "Lisa", checked: false, image: img },
  { name: "Rodney", checked: false, image: img },
  { name: "Scott", checked: true, image: img },
  { name: "Tom", checked: false, image: img },
  { name: "Billy", checked: false, image: img }
];
const ProductsContainer = props => {
  const [data, setData] = useState(initialData);
  useEffect(() => {
    console.log("Products.useEffect");
  });

  const handleClick = idx => event => {
    console.log("handleClick!");
    console.log("event=" + event.target.checked);
    console.log("idx=" + idx);
    let clonedData = _.clone(data);
    clonedData[idx].checked = event.target.checked;
    setData(clonedData);
  };

  // filter the checked products
  const handleSubmit = () => {
    console.log("Submit");
    console.log(
      "selected=" +
        _.filter(data, d => {
          return d.checked;
        }).length
    );
  };
  return (
    <div>
      <Products maxWidth={300} data={data} handleClick={handleClick} grid={false}></Products>
      <Products
        maxWidth={300}
        data={data.filter(d => {
          return d.checked;
        })}
        handleClick={handleClick}
        grid={false}
      ></Products>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default ProductsContainer;
