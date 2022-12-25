import styles from './Header.module.scss'

function Header() {
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
        <li>
          <img width={18} height={18} src="/img/header/icon-cart.svg" />
          <span>1260 руб.</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/header/icon-head-likes.svg" />
        </li>
        <li>
          <img width={18} height={18} src="/img/header/icon-user.svg" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
