import type { GameState } from "../../hooks/use-game-manager";
import { useState } from "react";
import styles from "./PokemonForm.module.css";

export type Difficulty = "Fácil" | "Medio" | "Difícil" | "Experto";

interface Props {
  handlePokemonNameSubmit: (userInput: string) => void;
  gameState: GameState;
  loadNewPokemon: () => void;
  handlePokemonLevel: (level: string) => void;
}

const PokemonForm = ({
  handlePokemonNameSubmit,
  gameState,
  loadNewPokemon,
  handlePokemonLevel,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      console.log("Input is empty");
      return;
    }
    handlePokemonNameSubmit(inputValue.trim().toLowerCase());
    setInputValue("");
  };

  const difficulties: Difficulty[] = ["Fácil", "Medio", "Difícil", "Experto"];

  const handleSelect = (level: Difficulty) => {
    setIsOpen(false);
    handlePokemonLevel(level)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.input_wrapper}>
        <button
          className={`${styles.input_icon} ${styles.left_icon}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Selección de nivel"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.icon}
          >
            <path d="M4 6h16" />
            <path d="M4 12h16" />
            <path d="M4 18h16" />
          </svg>
        </button>

        {isOpen && (
          <div
            className={styles.input_dropdown_position}
          >
            {difficulties.map((level) => (
              <button
                type="button"
                key={level}
                onClick={() => handleSelect(level)}
                className={styles.input_dropdown}
              >
                {level}
              </button>
            ))}
          </div>
        )}

        {/* Aquí va el nivel */}
        {/* <p className={styles.input_level}>
          Dificultad seleccionada: <strong>{difficulty}</strong>
        </p> */}

        <input
          type="text"
          className={styles.form_card_input}
          placeholder="¿Cuál es este pokémon?"
          aria-label="¿Cuál es este pokémon?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          autoFocus
          disabled={gameState !== "playing"}
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
        />

        <button
          className={`${styles.input_icon} ${styles.right_icon}`}
          aria-label="Siguiente Pokémon"
          type="button"
          onClick={loadNewPokemon}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.icon}
          >
            <path d="M7 7l5 5l-5 5" />
            <path d="M13 7l5 5l-5 5" />
          </svg>
        </button>
      </div>

      <button
        type="submit"
        className={styles.grid_btn}
        disabled={!inputValue.trim() || gameState !== "playing"}
      >
        Comprobar
      </button>
    </form>
  );
};

export default PokemonForm;
