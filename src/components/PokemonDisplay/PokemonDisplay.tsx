import { GameState } from "../../hooks/use-game-manager";
import type { Pokemon } from "../../types/pokemon.interface";
import { Spinner } from "../Spinner";
import styles from "./PokemonDisplay.module.css";

interface Props {
  pokemon: Pokemon | null;
  isLoading: boolean;
  gameState: GameState;
}

const PokemonDisplay = ({ pokemon, isLoading, gameState }: Props) => {
  const showAnswer = gameState !== GameState.Playing;

  const image = pokemon?.image;
  const name = pokemon?.name;

  return (
    <div className={styles.card}>
      {/* HEADER */}
      <div className={styles.card_header}>
        <h1 className={styles.card_header_text}>
          {showAnswer ? name?.toUpperCase() : "¿CUÁL ES ESTE POKÉMON?"}
        </h1>
      </div>

      {/* DISPLAY */}
      <div className={styles.card_body}>
        {/* GRID */}
        <div className={styles.card_grid}></div>

        {/* GLOW */}
        <div className={styles.card_glow}></div>

        {/* FLOOR */}
        <div className={styles.card_floor}></div>

        {isLoading ? (
          <Spinner />
        ) : (
          <img
            src={image}
            alt={name}
            className={`${styles.pokemon_image} ${showAnswer ? styles.show : styles.hidden}`}
          />
        )}
      </div>
    </div>
  );
};

export default PokemonDisplay;
