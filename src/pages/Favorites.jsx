import Card from "../components/Card";

function Favorites({ items, onAddToCart, onAddToFavorite }) {
  return (
    <div className="content">
      <div className="allCrossAndInputSerach">
        <h1>Мои закладки</h1>
      </div>

      <div className="shpickers">
        {items.map((item) => (
            <Card
              key={item.title}
              favorited={true}
              addToCart={(obj) => onAddToCart(obj)}
              addToFavorite={(obj) => onAddToFavorite(obj)}
              {...item}
            />
          ))}
      </div>
    </div>
  );
}

export default Favorites;
