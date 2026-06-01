import type { GameState } from "../../hooks/use-game-manager";
import { useState } from "react";
import styles from "./PokemonForm.module.css";

interface Props {
  handlePokemonNameSubmit: (userInput: string) => void;
  gameState: GameState;
  loadNewPokemon: () => void
}

const PokemonForm = ({ handlePokemonNameSubmit, gameState, loadNewPokemon }: Props) => {
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


  return (
<form onSubmit={handleSubmit}>
  
  <div className={styles.input_wrapper}>
    
    <button
      className={`${styles.input_icon} ${styles.left_icon}`}
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
    className={styles.grid_btn}
    type="submit"
    disabled={!inputValue.trim() || gameState !== "playing"}
  >
    Comprobar
  </button>

</form>
  );
};

export default PokemonForm;
