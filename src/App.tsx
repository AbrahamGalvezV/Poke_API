import { useGameManager } from "./hooks/use-game-manager";
import PokemonDisplay from "./components/PokemonDisplay/PokemonDisplay";
import PokemonForm from "./components/PokemonForm/PokemonForm";
import PokemonResults from "./components/PokemonResults/PokemonResults";
import "./App.css";
import { Container } from "./components/Container/Container";

const App = () => {
  const {
    loadNewPokemon,
    pokemon,
    error,
    isLoading,
    gameState,
    handlePokemonNameSubmit,
  } = useGameManager();

  if (isLoading) {
    return <div className="text-center">Cargando pokémon...</div>;
  }

  if (error) {
    return <div className="alert alert-danger text-center">{error}</div>;
  }

  return (
    <Container>
      <PokemonDisplay
        pokemon={pokemon}
        isLoading={isLoading}
        gameState={gameState}
      />

      {gameState === "playing" ? (
        <PokemonForm
          gameState={gameState}
          handlePokemonNameSubmit={handlePokemonNameSubmit}
        />
      ) : (
        <PokemonResults loadNewPokemon={loadNewPokemon} gameState={gameState} />
      )}
    </Container>
  );
};

export default App;
