import React from "react";
import Card from "../components/Card";
import AppContext from "../context";

function Home({
  items,
  cartItems,
  searchValue,
  onAddToCart,
  onAddToFavorite,
  onChangeSearchInput,
  isLoading,
}) {

  const { isItemAdded } = React.useContext(AppContext)

  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (isLoading ? [...Array(10)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        addToCart={(obj) => onAddToCart(obj)}
        addToFavorite={(obj) => onAddToFavorite(obj)}
        added={isItemAdded(item && item.id)}
        loading={isLoading}
        {...item}
      />
    ));
  };

  return (
    <div className="content">
      <div className="allCrossAndInputSerach">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
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

      <div className="shpickers">{renderItems()}</div>
    </div>
  );
}

export default Home;
