function LocalizationMap() {
  return (
    <div className="right">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            title="localization "
            width="100%"
            height="100%"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Poland%20Warszawa%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default LocalizationMap;
