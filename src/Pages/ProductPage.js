import React from "react";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const Products = [
    { id: "p1", product: "product-1" },
    { id: "p2", product: "product-2" },
    { id: "p3", product: "product-3" },
    { id: "p4", product: "product-4" },
    { id: "p5", product: "product-5" },
  ];

  return (
    <>
      <h1>Product Page</h1>
      <ul>
        {Products.map((prod) => (
          <li key={prod.id}>
            <Link to={`${prod.product}`}>{prod.product}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductPage;
