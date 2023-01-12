import React from "react";
import axios from "axios";

import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";
//1:18

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favoriteItems, setFavoriteItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("https://63b8300a6f4d5660c6cf202e.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://63b8300a6f4d5660c6cf202e.mockapi.io/Cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToFavorite = (obj) => {
    
  };

  const onAddToCart = (obj) => {
    axios.post("https://63b8300a6f4d5660c6cf202e.mockapi.io/Cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemuveCart = (id) => {
    axios.delete(`https://63b8300a6f4d5660c6cf202e.mockapi.io/Cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper">
      {cartOpened && (
        <Cart
          onClose={() => setCartOpened(false)}
          items={cartItems}
          remuveCartItem={onRemuveCart}
        />
      )}

      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content">
        <div className="allCrossAndInputSerach">
          <h1>
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : "Все кроссовки"}
          </h1>
          <div className="searchBlock">
            <img src="/img/icon-input-search.svg" alt="Search" />
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск..."
            ></input>
          </div>
        </div>

        <div className="shpickers">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item) => (
              <Card
                key={item.title}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                addToCart={(obj) => onAddToCart(obj)}
                addToFavorite={() => console.log("нажали лайк")}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
