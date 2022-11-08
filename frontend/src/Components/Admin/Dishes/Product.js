import { useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";

import ProductTopBar from "./ProductTopBar";
import ProductInfo from "./ProductInfo";
import ProductMore from "./ProductMore";

const animationDuration = 500;

const Product = () => {
  const location = useLocation();
  const { dish } = location.state;
  const dishRef = useRef();
  const navigate = useNavigate();

  const handleGoToBack = () => {
    dishRef.current.classList.remove("active");
    setTimeout(() => {
      goToBack();
    }, animationDuration);
  };

  const goToBack = () => {
    navigate(-1);
  };

  return (
    <div className="dish-detail-box active" ref={dishRef}>
      <ProductTopBar dish={dish} />
      <div className="bottom">
        <ProductInfo dish={dish} />
        <ProductMore dish={dish} goToBack={handleGoToBack} />
      </div>
    </div>
  );
};

export default Product;
