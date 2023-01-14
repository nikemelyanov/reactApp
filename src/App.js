import React from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import Cart from "./components/Cart";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
//

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favoriteItems, setFavoriteItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      const favoritesResponce = await axios.get(
        "https://63bf0554585bedcb36bd8a4b.mockapi.io/Favorites"
      );
      const cartResponce = await axios.get(
        "https://63b8300a6f4d5660c6cf202e.mockapi.io/Cart"
      );
      const itemsResponce = await axios.get(
        "https://63b8300a6f4d5660c6cf202e.mockapi.io/items"
      );

      setIsLoading(false)

      setCartItems(cartResponce.data);
      setFavoriteItems(favoritesResponce.data);
      setItems(itemsResponce.data);
    }
    fetchData();
  }, []);

  const onAddToFavorite = async (obj) => {
    try {
      if (favoriteItems.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://63bf0554585bedcb36bd8a4b.mockapi.io/Favorites/${obj.id}`
        );
        // setFavoriteItems((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          "https://63bf0554585bedcb36bd8a4b.mockapi.io/Favorites",
          obj
        );
        setFavoriteItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в избранное");
    }
  };

  const onAddToCart = (obj) => {
    console.log(obj);
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(
        `https://63b8300a6f4d5660c6cf202e.mockapi.io/Cart/${obj.id}`
      );
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } else {
      axios.post("https://63b8300a6f4d5660c6cf202e.mockapi.io/Cart", obj);
      setCartItems((prev) => [...prev, obj]);
    }
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
        <Route
          path="/"
          element={
            <Home
              items={items}
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToCart={onAddToCart}
              onAddToFavorite={onAddToFavorite}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              items={favoriteItems}
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
