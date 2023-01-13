import React from "react";
import styles from "./Card.module.scss";

function Card({ id, title, price, imageUrl, addToCart, addToFavorite, favorited = false}) {
  const [isLiked, setIsLiked] = React.useState(favorited);
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickLike = () => {
    setIsLiked(!isLiked);
    addToFavorite({ id, title, imageUrl, price });
  };

  const onClickPlus = () => {
    setIsAdded(!isAdded);
    addToCart({ title, imageUrl, price });
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardFavorite}>
        <img
          alt="Favorite"
          width={30}
          height={30}
          onClick={onClickLike}
          src={
            isLiked
              ? "/img/icon-card-likes-active.svg"
              : "/img/icon-card-likes.svg"
          }
        />
      </div>
      <img
        className={styles.carImageUrl}
        width={133}
        height={112}
        src={imageUrl}
        alt="cross"
      />
      <h5 className={styles.cardInfo}>{title}</h5>
      <div className={styles.cardBottom}>
        <div className={styles.cardBottomPrice}>
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          alt="plus"
          className={styles.plus}
          onClick={onClickPlus}
          src={
            isAdded
              ? "/img/icon-card-plus-active.svg"
              : "/img/icon-card-plus.svg"
          }
        />
      </div>
    </div>
  );
}

export default Card;
