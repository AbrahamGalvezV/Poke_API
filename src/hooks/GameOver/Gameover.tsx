import styles from "./GameOver.module.css";


const GameOver = () => {
  return (

      <div className={styles.game_over}>

        <div className={styles.game_over_grid} />
        <div className={styles.game_over_glow} />

        <p className={styles.game_over_text}>
          Has perdido todas tus vidas.
        </p>

      </div>

  );
};

export default GameOver
