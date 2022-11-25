import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const HomeScreen = ({ allProducts }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    alert("We are leaving town!");
    navigate("/details");
  };

  const productDisplay = allProducts.map((product, index) => {
    return <ProductCard product={product} index={index}/>;
  });

  return (
    <div>
      <h1>Home Screen</h1>
      <button onClick={handleClick}>Send me Somewhere</button>
      <div className="col-container">{productDisplay}</div>
    </div>
  );
};

export default HomeScreen;
