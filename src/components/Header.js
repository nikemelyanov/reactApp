function Header() {
    return (
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
    );
}

export default Header