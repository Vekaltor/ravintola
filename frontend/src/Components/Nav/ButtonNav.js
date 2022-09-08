import "./Nav.css";

const ButtonNav = (props) => {
  return (
    <>
      <button
        onClick={props.click}
        className={props.isActive ? "buttonNav active" : "buttonNav"}
      >
        <HamburgerNav />
      </button>
    </>
  );
};

const HamburgerNav = () => {
  return (
    <>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </>
  );
};

export default ButtonNav;
