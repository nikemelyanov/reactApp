import React from "react";

import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";
//

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://63b8300a6f4d5660c6cf202e.mockapi.io/items')
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        setItems(json)
      })
  })

  const onAddToFavorite = (obj) => {}

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj])
  }

  return (
    <div className="wrapper">
      {cartOpened && <Cart
        onClose={() => setCartOpened(false)}
        items={cartItems}
      />}

      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content">
        <div className="allCrossAndInputSerach">
          <h1>Все кроссовки</h1>
          <div className="searchBlock">
            <img src="/img/icon-input-search.svg" alt="Search" />
            <input placeholder="Поиск..."></input>
          </div>
        </div>

        <div className="shpickers">
          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              addToCart={(obj) => onAddToCart(obj)}
              addToFavorite={() => console.log('нажали лайк')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
