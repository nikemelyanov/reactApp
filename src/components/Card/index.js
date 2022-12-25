import styles from './Card.module.scss'

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.cardFavorite}>
        <img
          width={30}
          height={30}
          src="/img/icon-card-likes.svg"
          alt="icon-card-likes"
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
        <button className="cardBottomButtonPlus">
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
