import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormTextarea from "./FormTextarea";

import { categoryOrder } from "../../../Main/pages/Menu/Data";
import { currencies } from "../../data/currenciesData";

const DetailsForm = (props) => {
  const { currency, changeDetail, typingNumbers } = props;

  const categoryOptions = categoryOrder.map((ctg) => (
    <option key={ctg.id} value={ctg.categoryName}>
      {ctg.polishTitle}
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
          errorMessage="Nazwa nie może zawierać cyfr ani znaków specjalnych."
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
          pattern="^\d{1,4}$"
          errorMessage="Waga nie może być większa niż 9999 gram."
        />

        <FormInput
          type="text"
          name={["price", "Cena"]}
          changeDetail={changeDetail}
          required
          mark={currency}
          pattern="^\d{1,4}$"
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
          placeholder="Dodaj zdjęcie..."
          name={["img", "Zdjęcie produktu"]}
          changeDetail={changeDetail}
        />
      </div>
    </div>
  );
};

export default DetailsForm;
