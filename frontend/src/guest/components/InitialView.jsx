const InitialView = (props) => {
  const scrollToTop = () => {
    window.scroll(0, 0);
  };

  const { className, title } = props;
  return (
    <div className={className} onLoad={scrollToTop()}>
      <div>
        <div className="decoration"></div>
        <div className="header-text">
          <h1>{title}</h1>
        </div>
        <div className="decoration"></div>
      </div>
    </div>
  );
};

export default InitialView;
