import React from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  return (
    <>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
      {/* <Link to={'..'} relative="route">back</Link> default relative is route */}
      <Link to={'..'} relative="path">back</Link>
    </>
  );
};

export default ProductDetail;
