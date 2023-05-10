import React from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import Cart from "./components/Cart";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

import AppContext from "./context";
//1:57

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favoriteItems, setFavoriteItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const favoritesResponce = await axios.get(
          "https://63bf0554585bedcb36bd8a4b.mockapi.io/Favorites"
        );
        const cartResponce = await axios.get(
          "https://63b8300a6f4d5660c6cf202e.mockapi.io/Cart"
        );
        const itemsResponce = await axios.get(
          "https://63b8300a6f4d5660c6cf202e.mockapi.io/items"
        );

        setIsLoading(false);

        setCartItems(cartResponce.data);
        setFavoriteItems(favoritesResponce.data);
        setItems(itemsResponce.data);
      } catch (error) {
        alert("Ошибка при запросе данных.");
      }
    }

    fetchData();
  }, []);

  const onAddToFavorite = async (obj) => {
    try {
      if (favoriteItems.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://63bf0554585bedcb36bd8a4b.mockapi.io/Favorites/${obj.id}`
        );
        setFavoriteItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
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

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find(
        (item) => Number(item.parrentId) === Number(obj.id)
      );
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parrentId) !== Number(obj.id))
        );
        await axios.delete(
          `https://63b8300a6f4d5660c6cf202e.mockapi.io/Cart/${findItem.id}`
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post(
          "https://63b8300a6f4d5660c6cf202e.mockapi.io/Cart",
          obj
        );
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parrentId === data.parrentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert("Не удалось добавить товар в корзину.");
    }
  };

  const onRemuveCart = (id) => {
    try {
      axios.delete(`https://63b8300a6f4d5660c6cf202e.mockapi.io/Cart/${id}`);
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      );
    } catch (error) {
      alert("Не удалось удалить товар из корзины.");
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parrentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favoriteItems,
        isItemAdded,
        setCartOpened,
        setCartItems,
        onAddToCart,
        onAddToFavorite,
      }}
    >
      <div className="wrapper">
        <Cart
          onClose={() => setCartOpened(false)}
          items={cartItems}
          remuveCartItem={onRemuveCart}
          opened={cartOpened}
        />

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
                onAddToCart={onAddToCart}
                onAddToFavorite={onAddToFavorite}
              />
            }
          />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
