import React from "react";
import styles from "./Info.module.scss";

import AppContext from "../../context";

const Info = ({ image, title, description }) => {
  const { setCartOpened } = React.useContext(AppContext);

  return (
    <div className={styles.emplyBasketWrapper}>
      <div className={styles.emplyBasket}>
        <img src={image} alt="empty basket"></img>
        <h2>{title}</h2>
        <div className={styles.emplyBasketInfo}>
          <p>{description}</p>
        </div>
        <button
          onClick={() => setCartOpened(false)}
          className={styles.cartBasketRemove}
        >
          <img src="/img/icon-cart-button-arrow.svg" alt="Arrow" />
          Вернуться назад
        </button>
      </div>
    </div>
  );
};

export default Info;
