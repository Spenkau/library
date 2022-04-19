import Card from "../components/Card";

function Favorites({ items, onAddToFavorite }) {
  return (
    <div className="content">
      <div className="middleHeader">
        <h1>Закладки</h1>
      </div>
      <div className="books">
        {items.map((item) => (
          <Card
            key={item.title}
            title={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
            id={item.id}
            favorited={true}
            onFavorite={onAddToFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
