import React from "react";
import styles from "./Card.module.scss";

function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded)
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardFavorite} onClick={props.addToFavorite}>
        <img
          alt="Favorite"
          width={30}
          height={30}
          src="/img/icon-card-likes.svg"
        />
      </div>
      <img
        className={styles.carImageUrl}
        width={133}
        height={112}
        src={props.imageUrl}
        alt="cross"
      />
      <h5 className={styles.cardInfo}>{props.title}</h5>
      <div className={styles.cardBottom}>
        <div className={styles.cardBottomPrice}>
          <span>Цена:</span>
          <b>{props.price} руб.</b>
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
