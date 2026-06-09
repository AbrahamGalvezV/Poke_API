import { GameState } from "../../hooks/use-game-manager";
import styles from "./PokemonResults.module.css";

interface Props {
  loadNewPokemon: () => void;
  gameState: GameState;
}

const PokemonResults = ({ loadNewPokemon, gameState }: Props) => {
  if (gameState === GameState.Playing) {
    return null; 
  }
 
  return (
    <div
      className={`alert-${
        gameState === GameState.Correct ? "success" : "danger"
      } text-center`}
    >
      <h2
        className={`${styles.result} ${gameState === GameState.Correct ? styles.correct : styles.incorrect} `}
      >
        {gameState === GameState.Correct ? "¡Correcto!" : "¡Incorrecto!"}
      </h2>
      {/*     {gameState === GameState.Correct ? (
          <h2 className={styles.result_correct}>¡Correcto!</h2>
        ) : (
          <h2 className={styles.result_incorrect}>¡Incorrecto!</h2>
        )} */}
      <button className={styles.reset_btn} onClick={loadNewPokemon}>
        Siguiente Pokémon
      </button>
    </div>
  );
};
export default PokemonResults;
