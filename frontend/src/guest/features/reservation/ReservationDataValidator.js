export default class ReservationDataValidator {
  constructor(selectorToForm) {
    this.isValidate = false;
    this.selectorToForm = selectorToForm;
  }

  setIsValidate(newValue) {
    if (typeof newValue === "boolean") this.isValidate = newValue;
  }

  getIsValidate() {
    return this.isValidate;
  }

  typingNumberPhone = (e, keyCode) => {
    let numberPhone = e.target.value;
    //NUMBERS
    if (this.#isSelectedFromList(keyCode))
      numberPhone = this.#formatNumberPhone(numberPhone);

    if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105)) {
      numberPhone = this.#formatNumberPhone(numberPhone);
    } else if (keyCode === 8) {
      //BACKSPACE
      numberPhone = this.#formatNumberPhone(numberPhone);
      e.target.value = this.#deleteSpace(numberPhone);
      return;
    } else if (keyCode === 9) return; //TAB
    else numberPhone = numberPhone.slice(0, numberPhone.length - 1);

    e.target.value = numberPhone;
  };

  #pushSpace(str, start, position) {
    return str.substring(start, position) + " " + str.substring(position);
  }

  #deleteSpace(str) {
    if (str[str.length - 1] === " ") return str.substring(0, str.length - 1);
    else return str;
  }

  #formatNumberPhone(numberPhone) {
    numberPhone = numberPhone.replace(/\D/g, "");
    if (numberPhone.length > 3)
      numberPhone = this.#pushSpace(numberPhone, 0, 3);

    if (numberPhone.length > 7)
      numberPhone = this.#pushSpace(numberPhone, 0, 7);

    if (numberPhone.length === 12)
      return numberPhone.substring(0, numberPhone.length - 1);

    return numberPhone;
  }

  #isSelectedFromList(keyCode) {
    return keyCode === "undefined" ? false : true;
  }

  checkValue(element) {
    if (!element.value) {
      this.#addInvalidStyles(element);
      this.isValidate &&= false;
    } else this.isValidate &&= true;
  }

  validateEmail(element) {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regex.test(element.value)) {
      this.#addInvalidStyles(element);
      element.value = "";
      this.isValidate &&= false;
    } else this.isValidate &&= true;
  }

  #addInvalidStyles(target) {
    setTimeout(() => {
      target.parentElement.parentElement.className = "invalid";
      target.parentElement.className = "invalid";
    }, 1);
  }

  removeInvalidStyles(target) {
    if (!target.parentElement.parentElement.className) return;
    target.parentElement.parentElement.className = "";
    target.parentElement.className = "";
  }

  #clearStyles() {
    let invalidElements = document.querySelectorAll(".invalid");
    invalidElements.forEach((element) => {
      element.className = "";
    });
  }

  scrollToTopForm() {
    if (!this.isValidate)
      document
        .querySelector(this.selectorToForm)
        .parentElement.scrollIntoView();
  }

  validateForm() {
    this.#clearStyles();
    const allInputs = document.querySelectorAll(
      this.selectorToForm + ` *[data-to-validate]`
    );
    this.setIsValidate(true);
    allInputs.forEach((input) => {
      if (input.attributes.name.value === "email") this.validateEmail(input);
      else this.checkValue(input);
    });
    this.scrollToTopForm();
  }
}
