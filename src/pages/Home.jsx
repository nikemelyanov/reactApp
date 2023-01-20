import React from "react";
import Card from "../components/Card";
import Poster from "../components/Poster";

function Home({
  items,
  searchValue,
  onAddToCart,
  onAddToFavorite,
  onChangeSearchInput,
  isLoading,
}) {
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (isLoading ? [...Array(10)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        addToCart={(obj) => onAddToCart(obj)}
        addToFavorite={(obj) => onAddToFavorite(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };

  return (
    <div className="content">
      <Poster />

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
