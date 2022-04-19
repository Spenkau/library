import Card from "../components/Card";

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearch,
  onAddToFavorite,
  onAddToCart,
}) {
  return (
    <div className="content">
      <div className="middleHeader">
        <h1>{searchValue ? `Guest pose: "${searchValue}"` : "All books"}</h1>
        <div className="searchBlock">
          <img width={18} height={18} src="/images/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clearSearch"
              src="/images/btn-x.svg"
              alt="Clear"
            />
          )}{" "}
          <input
            maxLength={30}
            onChange={onChangeSearch}
            value={searchValue}
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="books">
        {items.map((item) => (
          <Card
            key={item.title}
            title={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
            id={item.id}
            onFavorite={(obj) => onAddToFavorite(obj)}
            onPlus={(obj) => onAddToCart(obj)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
