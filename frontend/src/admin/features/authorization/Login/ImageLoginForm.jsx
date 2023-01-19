import logo from "../../../../assets/img/logo.png";

const ImageLoginForm = () => {
  return (
    <div className="image-login-form">
      <span className="background"></span>
      <div className="image">
        <img src={process.env.PUBLIC_URL + logo} alt="logo-ravintola" />
      </div>
      <span className="title">
        rav<span>admin</span>
      </span>
    </div>
  );
};

export default ImageLoginForm;
