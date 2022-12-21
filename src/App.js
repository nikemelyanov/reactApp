function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="cart">
          <h2 className="cart-margin-bottom">Корзина</h2>

          <div className="cart-items">
            <div className="cart-item">
              <div className="cart-item-cross-img" style={{ backgroundImage: 'url(/img/photo-shpickers/cross-1.jpg)' }}>
              </div>
              <div className="cart-center-info">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="cart-item-remove-button" src="/img/icon-cart-remove-active.svg" alt="remove" />
            </div>
            <div className="cart-item">
              <div className="cart-item-cross-img" style={{ backgroundImage: 'url(/img/photo-shpickers/cross-1.jpg)' }}>
              </div>
              <div className="cart-center-info">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="cart-item-remove-button" src="/img/icon-cart-remove-active.svg" alt="remove" />
            </div>
          </div>
          
          <ul className="cart-bottom">
            <li className="cart-bottom-ul">
              <span>Итого:</span>
              <div>
                <img src="" alt="" />
              </div>
              <b>21 498 руб. </b>
            </li>
            <li className="cart-bottom-ul">
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
        </div>
      </div>

      <header>
        <div className="header-logo">
          <img width={40} height={40} src="/img/logo.png" />
          <div className="header-logo-title">
            <h3>React Sneakers</h3>
            <p>Магазин кроссов</p>
          </div>
        </div>
        <ul className="header-right">
          <li>
            <img width={18} height={18} src='/img/header/icon-cart.svg' />
            <span>1260 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src='/img/header/icon-head-likes.svg' />
          </li>
          <li>
            <img width={18} height={18} src='/img/header/icon-user.svg' />
          </li>
        </ul>
      </header>

      <div className="content">
        <div className="all-cross-and-input-serach">
          <h1 className="all-cross">Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/icon-input-search.svg" alt="Search" />
            <input placeholder="Поиск..."></input>
          </div>
        </div>

        <div className="shpickers">
          <div className="card">
            <div className="card-favorite">
              <img width={30} height={30} src="/img/icon-card-likes.svg" alt="icon-card-likes" />
            </div>
            <img className="card-img" width={133} height={112} src="/img/photo-shpickers/cross-1.jpg" alt="cross" />
            <p className="card-info">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card-bottom">
              <div className="card-bottom-price">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="card-bottom-button-plus">
                <img width={32} height={32} src="/img/icon-card-plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
