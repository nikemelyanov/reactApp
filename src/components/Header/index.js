import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { useCart } from "../../hooks/useCart";

function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header>
      <Link to={"/"}>
        <div className={styles.headerLogo}>
          <img width={40} height={40} src="/img/logo.png" />
          <div className={styles.headerLogoTitle}>
            <h3>React Sneakers</h3>
            <p>Магазин кроссов</p>
          </div>
        </div>
      </Link>
      <ul className={styles.headerRight}>
        <li onClick={props.onClickCart}>
          <img
            width={18}
            height={18}
            src="/img/header/icon-cart.svg"
            alt="Cart"
          />
          <span>{totalPrice} руб.</span>
        </li>
        <li>
          <Link to={"favorites"}>
            <img
              width={18}
              height={18}
              src="/img/header/icon-head-likes.svg"
              alt="Favorite"
            />
          </Link>
        </li>
        <li>
          <Link to={"orders"}>
            <img
              width={18}
              height={18}
              src="/img/header/icon-user.svg"
              alt="User"
            />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
