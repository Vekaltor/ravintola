import { RiArrowDropDownLine } from "react-icons/ri";

const FiltrRecommended = ({ select }) => {
  return (
    <div className="select-wrapper">
      <select className="recommended" onChange={(e) => select(e)}>
        <option value="all" hidden selected>
          Rekomendacja
        </option>
        <option value="all">Wszystkie</option>
        <option value={true}>Rekomendowane</option>
        <option value={false}>Zwykłe</option>
      </select>
      <span className="arrow">
        <RiArrowDropDownLine />
      </span>
    </div>
  );
};

export default FiltrRecommended;
