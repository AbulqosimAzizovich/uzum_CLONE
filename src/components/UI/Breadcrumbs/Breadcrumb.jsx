import React from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ product }) => {
  console.log(product)
  return (
    <>
      <Breadcrumbs>
        <Link to="/" className="opacity-60">
          Bosh sahifa
        </Link>
        <Link to="/" className="opacity-60">
          product
        </Link>

        <Link to="/" className="opacity-60">
          {product?.name}
        </Link>
      </Breadcrumbs>
    </>
  );
};

export default Breadcrumb;
