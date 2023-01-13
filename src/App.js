import React from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./pages/Home";
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
    axios.post("https://63bf0554585bedcb36bd8a4b.mockapi.io/Favorites", obj);
    setFavoriteItems((prev) => [...prev, obj]);
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

      <Routes>
        <Route path="/" element={
          <Home
            items={items}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToCart={onAddToCart}
            onAddToFavorite={onAddToFavorite}
          />
        }
        />
      </Routes>

    </div>
  );
}

export default App;
