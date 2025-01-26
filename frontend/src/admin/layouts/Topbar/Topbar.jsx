import OtherOptions from "./OtherOptions";
import SearchForm from "./SearchForm";

import { BiMenu, BiMenuAltLeft } from "react-icons/bi";
import { useRef } from "react";

function Topbar({ activeTopBar, setActiveSideBar, setActiveTopBar }) {
  const topBarMenuRef = useRef();

  const toggleTopBar = () => {
    if (activeTopBar) {
      topBarMenuRef.current.classList.add("hidden");
      setTimeout(() => {
        setActiveTopBar();
      }, 500);
    } else setActiveTopBar();
  };

  const toggleSideBar = () => {
    setActiveSideBar();
  };

  let stylesTopBarMenu = activeTopBar ? "container active" : "container";
  return (
    <section>
      <div className="top-bar">
        <div className="btn-side-bar" onClick={toggleSideBar}>
          <BiMenuAltLeft />
        </div>
        <div className="header">ravintola</div>
        <div className={stylesTopBarMenu} ref={topBarMenuRef}>
          <SearchForm />
          <OtherOptions />
        </div>
        <div className="btn-top-bar" onClick={toggleTopBar}>
          <BiMenu />
        </div>
      </div>
    </section>
  );
}

export default Topbar;
