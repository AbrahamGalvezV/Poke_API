import { GameState } from "../../hooks/use-game-manager";
import type { Pokemon } from "../../types/pokemon.interface";
import { Spinner } from "../Container/Spinner/Spinner";
import styles from "./PokemonDisplay.module.css";

interface Props {
  pokemon: Pokemon | null;
  isLoading: boolean;
  gameState: GameState;
  level: {
    level: string;
    count: number;
  };
  fail: number;
}

const PokemonDisplay = ({ pokemon, isLoading, gameState, level, fail }: Props) => {
  const showAnswer = gameState !== GameState.Playing;

  const image = pokemon?.image;
  const name = pokemon?.name;

  // ARREGLADO: Ahora el array tiene sintaxis válida para TypeScript
  const totalLives = Array.from({ length: 3});

  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <h1 
          className={`
            ${styles.card_header_text}
            ${
              gameState === GameState.Correct
                ? styles.correct
                : gameState === GameState.Wrong
                ? styles.wrong
                : ""
            }
          `}
        >
              {showAnswer ? name?.toUpperCase() : "¿CUÁL ES ESTE POKÉMON?"}
        </h1>
        <p className={styles.card_header_level}>
          Generación: {level.level} {level.count}
        </p>
        {/* <p style={{textAlign: "center"}}>Vidas restantes: {3 - fail}</p> */}
        
        <div className={styles.card_header_lifes}>
          {totalLives.map((_, index) => {
            const isLost = fail > index;

            return (
              <span
                key={index}
                className={`${styles.life_heart} ${isLost ? styles.lost : styles.active}`}
              />
            );
          })}
        </div>
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
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            className={`${styles.pokemon_image} ${showAnswer ? styles.show : styles.hidden}`}
          />
        )}
      </div>
    </div>
  );
};

export default PokemonDisplay;
