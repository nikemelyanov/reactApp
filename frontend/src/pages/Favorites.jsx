import React from "react";
import Card from "../components/Card";
import AppContext from "../context";

function Favorites({ onAddToCart, onAddToFavorite }) {
  const { favoriteItems } = React.useContext(AppContext);

  return (
    <div className="content">
      <div className="allCrossAndInputSerach">
        <h1>Мои закладки</h1>
      </div>

      <div className="shpickers">
        {favoriteItems.map((item) => (
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
