import { useState } from "react";

export const PokemonForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.formEvent) => {
    if (!inputValue.trim()) {
      console.log("Input is empty");
      return;
    }

    console.log("Searching for Pokémon: ${inputValue}");
  };

  return (
    <form className="input-group my-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="¿Quien es ese Pokémon?"
        aria-label="¿Quien es ese Pokémon?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        autoFocus
      />
      <button
        className="btn btn-outline-secondary"
        type="submit"
        disabled={!inputValue.trim()}
        // onClick={hanndleClick}
      >
        Comprobar
      </button>
    </form>
  );
};
