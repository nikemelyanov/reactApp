import Card from "../components/Card";

function Home({items, searchValue, onAddToCart, onAddToFavorite, onChangeSearchInput}) {
  return (
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
              addToCart={(obj) => onAddToCart(obj)}
              addToFavorite={(obj) => onAddToFavorite(obj)}
              {...item}
            />
          ))}
      </div>
    </div>
  )
}

export default Home;