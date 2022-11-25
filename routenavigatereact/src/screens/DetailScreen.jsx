import React from "react";
import { useParams } from "react-router-dom";

const DetailScreen = ({allProducts}) => {
    const {index} = useParams();

    return (
        <div>
            <h1>Detail Screen</h1>
            <h2>{allProducts[index].name}</h2>
            <h3 className="colored-text">{allProducts[index].price}</h3>
            <p>{allProducts[index].description}</p>
        </div>
    );
};

export default DetailScreen;