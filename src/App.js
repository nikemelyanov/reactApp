import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";

// 1:30
const arr = [
  {
    title: "Мужские кросовки Nike Blazer Mid suede",
    price: 12999,
    imageUrl: "/img/photo-shpickers/cross-1.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 12999,
    imageUrl: "/img/photo-shpickers/cross-2.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Lebron XVIII Low",
    price: 7999,
    imageUrl: "/img/photo-shpickers/cross-3.jpg",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 15999,
    imageUrl: "/img/photo-shpickers/cross-4.jpg",
  },
  {
    title: "Мужские Кроссовки Under Armour Curry 8",
    price: 12999,
    imageUrl: "/img/photo-shpickers/cross-5.jpg",
  },
  {
    title: "Мужские Кроссовки Jordan Air Jordan 11",
    price: 6900,
    imageUrl: "/img/photo-shpickers/cross-6.jpg",
  },
];

function App() {
  return (
    <div className="wrapper">
      <Cart />

      <Header />

      <div className="content">
        <div className="allCrossAndInputSerach">
          <h1>Все кроссовки</h1>
          <div className="searchBlock">
            <img src="/img/icon-input-search.svg" alt="Search" />
            <input placeholder="Поиск..."></input>
          </div>
        </div>

        <div className="shpickers">
          {arr.map((obj) => (
            <Card
              key={obj.id}
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
