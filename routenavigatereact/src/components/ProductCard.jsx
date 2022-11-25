import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({product, index}) => {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <Link to={`/details/${index}`}>
        <button>See More</button>
      </Link>
    </div>
  );
};

export default ProductCard;
