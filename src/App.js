function App() {
  return (
    <div className="wrapper">
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
            <img width={18} height={18} src='/img/cart.svg' />
            <span>1260 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src='/img/user.svg' />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1 className="all-cross">Все кроссовки</h1>
        
        <div className="shpickers">
          <div className="card">
            <img className="card-img" width={133} height={112} src="/img/cross/cross-1.jpg" alt="cross" />
            <p className="card-info">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card-bottom">
              <div className="card-bottom-price">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="card-bottom-button-plus">
                <img width={32} height={32} src="/img/card-button.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img className="card-img" width={133} height={112} src="/img/cross/cross-2.jpg" alt="cross" />
            <p className="card-info">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card-bottom">
              <div className="card-bottom-price">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="card-bottom-button-plus">
                <img width={32} height={32} src="/img/card-button.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img className="card-img" width={133} height={112} src="/img/cross/cross-3.jpg" alt="cross" />
            <p className="card-info">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card-bottom">
              <div className="card-bottom-price">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="card-bottom-button-plus">
                <img width={32} height={32} src="/img/card-button.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img className="card-img" width={133} height={112} src="/img/cross/cross-4.jpg" alt="cross" />
            <p className="card-info">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card-bottom">
              <div className="card-bottom-price">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="card-bottom-button-plus">
                <img width={32} height={32} src="/img/card-button.svg" alt="Plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
