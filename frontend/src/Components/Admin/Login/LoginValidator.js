export default class Validator {
  constructor(login, password) {
    this.isValidate = false;
    this.login = login;
    this.password = password;
    this.error = "";
  }

  getIsValidate() {
    return this.isValidate;
  }

  getMessage() {
    return this.error;
  }

  setMessage(message) {
    this.error = message;
  }

  #isEmpty(element) {
    if (element) return false;
    else return true;
  }

  #errorMessage() {
    let message = "";
    if (this.#isEmpty(this.login) || this.#isEmpty(this.password))
      message = "Uzupełnij wszystkie pola !";
    return message;
  }

  validate() {
    const message = this.#errorMessage();
    if (message === "") this.isValidate = true;
    else {
      this.isValidate = false;
      this.error = message;
    }
  }
}
