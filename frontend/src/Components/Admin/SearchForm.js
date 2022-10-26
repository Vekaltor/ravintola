function SearchForm() {
  return (
    <aside>
      <nav className="top-bar">
        <form className="form-search" role="search">
          <input
            className="input-search"
            type="search"
            placeholder="Wpisz szukaną frazę ..."
          />
          <button className="btn-search" type="submit">
            Wyszukaj
          </button>
        </form>
      </nav>
    </aside>
  );
}

export default SearchForm;
