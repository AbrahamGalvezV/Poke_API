import type { GameState } from "../../hooks/use-game-manager";
import { useState } from "react";
import styles from "./PokemonForm.module.css";
import { levels } from "../Container/PokemonLevels";

interface Props {
  handlePokemonNameSubmit: (userInput: string) => void;
  gameState: GameState;
  handleSkipPokemon: () => void;
  handlePokemonLevel: (levelName: string) => void;
}

const PokemonForm = ({
  handlePokemonNameSubmit,
  gameState,
  handleSkipPokemon,
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

  const handleSelect = (level: string) => {
    setIsOpen(false);
    handlePokemonLevel(level);
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
          <div className={styles.input_dropdown_position}>
            <div className={styles.input_dropdown_scroll}>
              {levels.map((item) => (
                <button
                  type="button"
                  key={item.level}
                  onClick={() => handleSelect(item.level)}
                  className={styles.input_dropdown}
                >
                  {item.level} | Pokémon: {item.count}
                </button>
              ))}
            </div>
          </div>
        )}

        <input
          type="text"
          className={styles.form_card_input}
          placeholder="¿Cuál es este pokémon?"
          aria-label="¿Cuál es este pokémon?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          // autoFocus
          disabled={gameState !== "playing"}
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
        />

        <button
          className={`${styles.input_icon} ${styles.right_icon}`}
          aria-label="Siguiente Pokémon"
          type="button"
          onClick={handleSkipPokemon}
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
