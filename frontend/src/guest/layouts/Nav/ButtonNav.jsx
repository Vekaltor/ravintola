const ButtonNav = (props) => {
  return (
    <>
      <button
        onClick={props.click}
        className={props.isActive ? "buttonNav active" : "buttonNav"}
        title='Button of navigation'
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
