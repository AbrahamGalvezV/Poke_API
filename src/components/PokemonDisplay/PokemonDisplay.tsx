import { GameState } from "../../hooks/use-game-manager";
import type { Pokemon } from "../../types/pokemon.interface";
import { Spinner } from "../Spinner";
import styles from "./PokemonDisplay.module.css";

interface Props {
  pokemon: Pokemon | null;
  isLoading: boolean;
  gameState: GameState;
  level: {
    level: string;
    count: number;
  };
}

const PokemonDisplay = ({ pokemon, isLoading, gameState, level }: Props) => {
  const showAnswer = gameState !== GameState.Playing;

  const image = pokemon?.image;
  const name = pokemon?.name;

  return (
    <div className={styles.card}>

      <div className={styles.card_header}>
        <h1 className={styles.card_header_text}>
          {showAnswer ? name?.toUpperCase() : "¿CUÁL ES ESTE POKÉMON?"}
        </h1>
        <p className={styles.card_header_level}>
          Generación: {level.level} {level.count}
        </p>
      </div>
      

      <div className={styles.card_body}>

        <div className={styles.card_grid}></div>

        <div className={styles.card_glow}></div>

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
