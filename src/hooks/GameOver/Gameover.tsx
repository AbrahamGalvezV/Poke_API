import { Container } from "../../components/Container/Container";
import styles from "./GameOver.module.css";

interface Props {
  resetGame: () => void;
}

const GameOver = ({ resetGame }: Props) => {
  return (
    <Container>
      <div className={styles.game_over}>

        <div className={styles.game_over_grid} />
        <div className={styles.game_over_glow} />

        <h1 className={styles.game_over_title}>
          GAME OVER
        </h1>

        <p className={styles.game_over_text}>
          Has perdido todas tus vidas.
        </p>

        <button
          className={styles.game_over_btn}
          onClick={resetGame}
        >
          Jugar otra vez
        </button>

      </div>
    </Container>
  );
};

export default GameOver;