import type { GameState } from "../../hooks/use-game-manager";
import { useState } from "react";
import styles from "./PokemonForm.module.css";

interface Props {
  handlePokemonNameSubmit: (userInput: string) => void;
  gameState: GameState;
}

const PokemonForm = ({ handlePokemonNameSubmit, gameState }: Props) => {
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
      <input
        type="text"
        
        className={styles.form_card_input}
        placeholder="¿Cual es este pokémon?"
        aria-label="¿Cual es este pokémon?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        autoFocus
        disabled={gameState !== "playing"}
        spellCheck={false}
        autoComplete="off"
        autoCorrect="off"
      />
      <button
        className={styles.form_card_btn}
        type="submit"
        disabled={!inputValue.trim() || gameState !== "playing"}
        // onClick={hanndleClick}
      >
        Comprobar
      </button>
    </form>
  );
};

export default PokemonForm;
