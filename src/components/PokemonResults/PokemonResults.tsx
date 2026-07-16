import { GameState } from "../../hooks/use-game-manager";
import styles from "./PokemonResults.module.css";

interface Props {
  loadNewPokemon: () => void;
  resetGame: () => void;
  gameState: GameState;
  isGameOver: boolean;
}

const PokemonResults = ({
  loadNewPokemon,
  gameState,
  isGameOver,
  resetGame,
}: Props) => {
  if (gameState === GameState.Playing) {
    return null;
  }

  const handleClick = () => {
    if (isGameOver) {
      resetGame();
    } else {
      loadNewPokemon();
    }
  };

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
      <button className={styles.reset_btn} onClick={handleClick}>
        {isGameOver ? "Empezar de nuevo" : "Siguiente Pokémon"}
      </button>
    </div>
  );
};
export default PokemonResults;
