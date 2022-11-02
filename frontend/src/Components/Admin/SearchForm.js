function SearchForm() {
  return (
    <aside>
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
    </aside>
  );
}

export default SearchForm;
