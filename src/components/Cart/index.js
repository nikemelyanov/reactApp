import styles from "./Cart.module.scss";

function Overlay(props) {
  return (
    <div className={styles.overlay}>
      <div className={styles.cart}>
        <h2 className={styles.cartName}>
          Корзина{" "}
          <img
            onClick={props.onClose}
            className={styles.cartItemRemoveButton}
            src="/img/icon-cart-remove-active.svg"
            alt="Remove"
          />
        </h2>

        <div className={styles.cartItems}>
          <div className={styles.cartItem}>
            <div
              className={styles.cartItemCrossImg}
              style={{
                backgroundImage: "url(/img/photo-shpickers/cross-1.jpg)",
              }}
            ></div>
            <div className={styles.cartCenterInfo}>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className={styles.cartItemRemoveButton}
              src="/img/icon-cart-remove-active.svg"
              alt="Remove"
            />
          </div>
        </div>

        <div className={styles.cartBottom}>
          <ul className={styles.cartBottomUl}>
            <li className={styles.cartBottomLi}>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li className={styles.cartBottomLi}>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className={styles.cartBottomButton}>
            Оформить заказ{" "}
            <img src="/img/icon-cart-button-arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Overlay;
