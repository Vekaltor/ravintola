import OtherOptions from "./OtherOptions";
import SearchForm from "./SearchForm";

function Topbar() {
  return (
    <section>
      <div className="top-bar">
        <SearchForm />
        <OtherOptions />
      </div>
    </section>
  );
}

export default Topbar;
