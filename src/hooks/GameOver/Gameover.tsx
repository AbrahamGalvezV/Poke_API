import styles from "./GameOver.module.css";

interface Props {
  correctPokemon: number;
  nextPokemon: number;
  textFail: number;
}

const GameOver = ({ correctPokemon, nextPokemon, textFail }: Props) => {
  return (

      <div className={styles.game_over}>

        <div className={styles.game_over_grid} />
        <div className={styles.game_over_glow} />

        <p className={styles.game_over_text}>
          Pokémons acertados: {correctPokemon}
        </p>
        <p className={styles.game_over_text}>
          Veces siguiente pókemon: {nextPokemon}
        </p>
        <p className={styles.game_over_text}>
          Veces que fallaste: {textFail}
        </p>
      </div>

  );
};

export default GameOver
