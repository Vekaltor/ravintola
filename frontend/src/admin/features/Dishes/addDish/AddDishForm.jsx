import { useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addDishAsync } from "../dishesSlice";

import AddDishMessage from "./AddDishMessage";
import DetailsForm from "./DetailsForm";
import OtherSettingsForm from "./OtherSettingsForm";

import { categoryMeals } from "../../../../data/categoryMeals";
import { currencies } from "../../../../data/currenciesData";

import "./addDish.css";

const AddDishForm = () => {
  const [details, setDetails] = useState({
    name: "",
    category: categoryMeals[0].originalName,
    currency: currencies[0].nameCurrency,
    gramature: "",
    price: "",
    description: "",
    img: "",
    recommended: false,
  });
  const [submited, setSubmited] = useState(false);
  const boxRef = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmited(true);
    await handleAddDish(); // Oczekujemy zakończenia dodania dania przed kontynuacją
    scrollToTop();
    goToBack();
  };

  const goToBack = () => {
    setTimeout(() => {
      navigate(-1);
    }, 2000);
  };

  const changeDetail = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleAddDish = async () => {
    let boolRecommended = details.recommended === "true" ? true : false;

    let newDish = {
      name: details.name,
      description: details.description,
      mealCategory: details.category,
      weight: details.gramature,
      price: details.price,
      image: details.img,
      isRecommended: boolRecommended,
    };

    // Dispatch asynchronicznego thunk do API
    try {
      await dispatch(addDishAsync(newDish)).unwrap();
    } catch (error) {
      console.error("Nie udało się dodać dania:", error);
    }
  };

  const handleFiles = (e) => {
    let file = e.target.files[0];
    if (!e.target.files || !file) return;

    const FR = new FileReader();
    FR.onload = () => {
      let imageBase64 = FR.result;
      setDetails({ ...details, [e.target.name]: imageBase64 });
    };
    FR.readAsDataURL(file);
  };

  const scrollToTop = () => {
    boxRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };

  const MessageSuccess = submited ? <AddDishMessage /> : <Outlet />;

  return (
      <div className="box-form-add-dish" ref={boxRef}>
        {MessageSuccess}
        <div className="form-add-dish">
          <form onSubmit={handleSubmit} autoComplete="off">
            <DetailsForm
                changeDetail={changeDetail}
                handleFiles={handleFiles}
                currency={details.currency}
            />
            <OtherSettingsForm
                changeDetail={changeDetail}
                uploadedImg={details.img}
            />
          </form>
        </div>
      </div>
  );
};

export default AddDishForm;
