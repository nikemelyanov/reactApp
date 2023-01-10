import styles from "./Cart.module.scss";

function Overlay({ onClose, items = [] }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.cart}>
        <h2 className={styles.cartName}>
          Корзина{" "}
          <img
            onClick={onClose}
            className={styles.cartItemRemoveButton}
            src="/img/icon-cart-remove-active.svg"
            alt="Remove"
          />
        </h2>

        <div className={styles.cartItems}>
          {
            items.map((item) => (
              <div className={styles.cartItem}>
                <div
                  className={styles.cartItemCrossImg}
                  style={{
                    backgroundImage: `url(${item.imageUrl})`,
                  }}
                ></div>
                <div className={styles.cartCenterInfo}>
                  <p>{item.title}</p>
                  <b>{item.price} руб.</b>
                </div>
                <img
                  className={styles.cartItemRemoveButton}
                  src="/img/icon-cart-remove-active.svg"
                  alt="removeCartItem"
                />
              </div>
            ))
          }
        </div>

        <div className={styles.cartBottom}>
          <ul className={styles.cartBottomUl}>
            <li className={styles.cartBottomLi}>
              <span>Итого:</span>
              <div></div>
              <b>0 руб.</b>
            </li>
            <li className={styles.cartBottomLi}>
              <span>Налог 5%:</span>
              <div></div>
              <b>0 руб.</b>
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
