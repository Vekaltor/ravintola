

const LoadingComponent = ({ className }) => {
  return (
    <div className={`${className} loading-component`}>
      <span className="loader"></span>
    </div>);
}

export default LoadingComponent;