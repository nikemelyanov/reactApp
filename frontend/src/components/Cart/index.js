import React from "react";
import axios from "axios";

import Info from "../Info/Info";
import { useCart } from "../../hooks/useCart";

import styles from "./Cart.module.scss";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Overlay({ onClose, items = [], remuveCartItem, opened}) {
  const { cartItems, setCartItems, totalPrice} = useCart();
  const [orderId, setOrderId] = React.useState(null);
  const [isCompleteOrder, setIsCompleteOrder] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://63bf0554585bedcb36bd8a4b.mockapi.io/orders",
        {
          items: cartItems,
        }
      );
      setOrderId(data.id);
      setIsCompleteOrder(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          "https://63b8300a6f4d5660c6cf202e.mockapi.io/Cart/" + item.id
        );
        await delay(1000);
      }
    } catch (error) {
      alert("Ошибка при создании заказа.");
    }
    setIsLoading(false);
  };

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible  : ''}`}>
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
          <div className={styles.cartWrapper}>
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
                  <b>{totalPrice} руб.</b>
                </li>
                <li className={styles.cartBottomLi}>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{(totalPrice / 100) * 5} руб.</b>
                </li>
              </ul>
              <button
                onClick={onClickOrder}
                disabled={isLoading}
                className={styles.cartBottomButton}
              >
                Оформить заказ
                <img src="/img/icon-cart-button-arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isCompleteOrder ? "Заказ оформлен!" : "Корзина пустая"}
            image={
              isCompleteOrder
                ? "/img/order has been placed.png"
                : "/img/empty basket.png"
            }
            description={
              isCompleteOrder
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, что бы оформить заказ."
            }
          />
          // <Info
          //   title="Заказ оформлен!"
          //   image="/img/order has been placed.png"
          //   description="Ваш заказ #18 скоро будет передан курьерской доставке"
          // />
        )}
      </div>
    </div>
  );
}

export default Overlay;
