const PrototypeDish = () => {
  return (
    <li className="dish prototype">
      <div className="checkbox">
        <input type="checkbox" />
      </div>
      <div className="image"></div>
      <div className="name">Nazwa</div>
      <div className="description">Opis</div>
      <div className="recommended">Rekomendowane</div>
      <div className="price">Cena</div>
      <div className="settings">Ustawienia</div>
    </li>
  );
};

export default PrototypeDish;
