import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "../../app_bar/presentation/appBar";
import "../../../styles/index.css";
import "./availablePlans.css";
import handlePurchase from "../data/handlePurchase"
import getPlans from "../data/getPlans";

function ProductCard({ product }) {
  const [error, setError] = useState("");

  const navigate = useNavigate();
  
  const handleContinue = () => {
    // Add logic for any actions before navigating
    navigate("/my_plans");
  };


  return (
    <div className="product-card">
      <div className="product-details">
        <div className="product-title-box">
          <h3 className="product-title">{product.name}</h3>
        </div>
        <div className="product-icon">
          <br></br>
        <i className="mdi mdi-tag-heart mdi-48px"></i>
      </div>
        <p>Roadmap:</p>
        <div className="product-step">
          {product.steps && product.steps.map((step, index) => (
          <div key={index} className="product-step">
            {step.name}
          </div>
        ))}
        </div>
        <div className="product-details">
          <span>${product.price}</span>
        </div>
        <button className="buy-button" onClick={() => {handlePurchase(product, handleContinue, setError)}}>
          Purchase Now
        </button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}


function ProductList() {
  const [productData, setProductData] = useState([]);

  const navigate = useNavigate();

  const handleContinue = () => {
    // Add logic for any actions before navigating
    navigate("/my_plans");
  };

  
  useEffect(() => {
    // Fetch data from the REST API
    getPlans(setProductData)
  }, []);

  return (
    <div>
      <AppBar />
      <div className="product-list-container">
        <h1>Select a new plan</h1>
        <div className="product-list">
          {productData.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        <button className="continue-button" onClick={handleContinue}>
          Continue to My Plans
        </button>
      </div>
    </div>
  );
}

export default ProductList;
