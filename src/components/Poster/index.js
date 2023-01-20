import styles from "./Poster.module.scss";

function Poster() {
  return (
    <div>
      <div className={styles.posterOne}>
        <div className={styles.posterOneTitle}>Новинки сезона</div>
      </div>
      <div className={styles.posterFlex}>
        <div className={styles.posterTwo}>
          <div className={styles.posterTwoTitle}>-25% на первый заказ!</div>
        </div>
        <div className={styles.posterThree}>
          <div className={styles.posterThreeTitle}>сток</div>
        </div>
      </div>
    </div>
  );
}

export default Poster;
