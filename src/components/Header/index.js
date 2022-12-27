import styles from "./Header.module.scss";

function Header(props) {

  return (
    <header>
      <div className={styles.headerLogo}>
        <img width={40} height={40} src="/img/logo.png" />
        <div className={styles.headerLogoTitle}>
          <h3>React Sneakers</h3>
          <p>Магазин кроссов</p>
        </div>
      </div>
      <ul className={styles.headerRight}>
        <li onClick={props.onClickCart}>
          <img
            width={18}
            height={18}
            src="/img/header/icon-cart.svg"
            alt="Cart"
          />
          <span>1260 руб.</span>
        </li>
        <li>
          <img
            width={18}
            height={18}
            src="/img/header/icon-head-likes.svg"
            alt="Favorite"
          />
        </li>
        <li>
          <img
            width={18}
            height={18}
            src="/img/header/icon-user.svg"
            alt="User"
          />
        </li>
      </ul>
    </header>
  );
}

export default Header;
