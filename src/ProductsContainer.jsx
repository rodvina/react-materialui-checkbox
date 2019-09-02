import React, { useState, useContext, useEffect } from "react";
import _ from "lodash";

import Products from "./Products";
const initialData = [
  { name: "Bob", checked: true, image: "./IMG_1844.jpg" },
  { name: "Lisa", checked: false, image: "./IMG_1844.jpg" },
  { name: "Rodney", checked: false, image: "./IMG_1844.jpg" }
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

  return (
    <div>
      <Products maxWidth={300} data={data} handleClick={handleClick}></Products>
      <Products
        maxWidth={300}
        data={data.filter(d => {
          return d.checked;
        })}
        handleClick={handleClick}
      ></Products>
    </div>
  );
};

export default ProductsContainer;
