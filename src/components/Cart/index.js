import styles from "./Cart.module.scss";

function Overlay({ onClose, items = [], remuveCartItem }) {
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

        {items.length > 0 ? (
          <div>
            <div className={styles.cartItems}>
              {items.map((obj) => (
                <div key={obj.id} className={styles.cartItem}>
                  <div
                    className={styles.cartItemCrossImg}
                    style={{
                      backgroundImage: `url(${obj.imageUrl})`,
                    }}
                  ></div>
                  <div className={styles.cartCenterInfo}>
                    <p>{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    className={styles.cartItemRemoveButton}
                    src="/img/icon-cart-remove-active.svg"
                    alt="removeCartItem"
                    onClick={() => remuveCartItem(obj.id)}
                  />
                </div>
              ))}
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
        ) : (
          <div className={styles.emplyBasketWrapper}>
            <div className={styles.emplyBasket}>
              <img src="/img/empty basket.png" alt="empty basket"></img>
              <h2>Корзина пустая</h2>
              <div className={styles.emplyBasketInfo}>
                <p>
                  Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
                </p>
              </div>
              <button
                onClick={() => onClose()}
                className={styles.cartBasketRemove}
              >
                <img src="/img/icon-cart-button-arrow.svg" alt="Arrow" />
                Вернуться назад
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Overlay;
