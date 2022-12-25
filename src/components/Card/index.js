import styles from "./Card.module.scss";

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.cardFavorite} onClick={props.addToFavorite}>
        <img
          width={30}
          height={30}
          src="/img/icon-card-likes.svg"
          alt="Favorite"
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
        <button className="cardBottomButtonPlus" onClick={props.addToCart}>
          <img
            width={32}
            height={32}
            src="/img/icon-card-plus.svg"
            alt="Plus"
          />
        </button>
      </div>
    </div>
  );
}

export default Card;
