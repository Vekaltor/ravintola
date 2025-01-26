import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormTextarea from "./FormTextarea";

import { categoryMeals } from "../../../../data/categoryMeals";
import { currencies } from "../../../../data/currenciesData";

const DetailsForm = (props) => {
  const { currency, changeDetail, handleFiles } = props;

  const categoryOptions = categoryMeals.map((category) => (
    <option key={category.id} value={category.originalName}>
      {category.polishName}
    </option>
  ));

  const currencyOptions = currencies.map((crr) => (
    <option key={crr.id} value={crr.nameCurrency}>
      {crr.nameCurrency}
    </option>
  ));

  return (
    <div className="main-form section-form">
      <div className="header">Formularz dodawania produktu</div>
      <div className="content-form">
        <FormInput
          type="text"
          name={["name", "Nazwa produktu"]}
          changeDetail={changeDetail}
          required
          pattern="^[a-zA-Z\s]*$"
          errorMessage="Pole nie może być puste oraz nazwa nie może zawierać cyfr ani znaków specjalnych."
        />
        <FormSelect
          name={["category", "Wybierz kategorie"]}
          options={categoryOptions}
          changeDetail={changeDetail}
        />
        <FormSelect
          name={["currency", "Waluta"]}
          options={currencyOptions}
          changeDetail={changeDetail}
        />
        <FormInput
          type="text"
          name={["gramature", "Gramatura"]}
          changeDetail={changeDetail}
          required
          mark="g"
          pattern="^(\d{0,4})$"
          errorMessage="Waga nie może być większa niż 9999 gram."
        />
        <FormInput
          type="text"
          name={["price", "Cena"]}
          changeDetail={changeDetail}
          required
          mark={currency}
          pattern="^\d{0,4}$"
          errorMessage={`Cena nie może być większa niż 9999 ${currency}.`}
        />
        <FormTextarea
          name={["description", "Opis"]}
          changeDetail={changeDetail}
          placeholder="Wiadomość"
        />
        <FormInput
          className="uploaded-image"
          type="file"
          required
          placeholder="Dodaj zdjęcie..."
          name={["img", "Zdjęcie produktu"]}
          accept="image/png, image/jpeg,image/jpg"
          changeDetail={handleFiles}
        />
      </div>
    </div>
  );
};

export default DetailsForm;
