import { useLocation, useNavigate } from "react-router-dom";
import {useEffect, useRef, useState} from "react";

import ProductTopBar from "./ProductTopBar";
import ProductInfo from "./ProductInfo";
import ProductMore from "./ProductMore";

import "./product.css";
import {useSelector} from "react-redux";

const Product = () => {
  const location = useLocation();
  let { dish } = location.state;
  const [product,setProduct] = useState(dish);
  const dishRef = useRef();
  const navigate = useNavigate();
  const { dishes } = useSelector((state) => state.dishes);

  const handleGoToBack = () => {
    dishRef.current.classList.remove("active");
    goToBack(1000);
  };

  const goToBack = (animationDuration) => {
    setTimeout(() => {
      navigate(-1);
    }, animationDuration);
  };

  useEffect(() => {
    setProduct(dishes.find(d => d.id === dish.id))
  }, [dishes]);

  useEffect(() => {
    dish && setProduct(dish)
  }, [location, location.state]);

  return (
    <div className="dish-detail-box active" ref={dishRef}>
      <ProductTopBar dish={product} />
      <div className="bottom">
        <ProductInfo dish={product} />
        <ProductMore dish={product} goToBack={handleGoToBack} />
      </div>
    </div>
  );
};

export default Product;
