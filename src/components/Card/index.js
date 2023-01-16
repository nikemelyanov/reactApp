import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";

function Card({
  id,
  title,
  price,
  imageUrl,
  addToCart,
  addToFavorite,
  favorited = false,
  added = false,
  loading = false,
}) {
  const [isLiked, setIsLiked] = React.useState(favorited);
  const [isAdded, setIsAdded] = React.useState(added);
 
  const onClickLike = () => {
    setIsLiked(!isLiked);
    addToFavorite({ id, title, imageUrl, price });
  };

  const onClickPlus = () => {
    setIsAdded(!isAdded);
    addToCart({ id, title, imageUrl, price });
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={165}
          height={220}
          viewBox="0 0 150 200"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
          <rect x="0" y="99" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="123" rx="5" ry="5" width="100" height="15" />
          <rect x="0" y="168" rx="5" ry="5" width="80" height="25" />
          <rect x="118" y="162" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
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
            width={133} // ='100%'
            height={112} // ={140}
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
        </>
      )}
    </div>
  );
}

export default Card;
