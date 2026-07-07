import { useGameManager } from "./hooks/use-game-manager";
import { Container } from "./components/Container/Container";
import PokemonDisplay from "./components/PokemonDisplay/PokemonDisplay";
import PokemonForm from "./components/PokemonForm/PokemonForm";
import PokemonResults from "./components/PokemonResults/PokemonResults";
import { Spinner } from "./components/Container/Spinner/Spinner";
import "./App.css";

const App = () => {
  const {
    loadNewPokemon,
    pokemon,
    error,
    isLoading,
    gameState,
    handlePokemonNameSubmit,
    handlePokemonLevel,
    level,
    fail,
  } = useGameManager();

  if (isLoading) {
    return <Spinner />;
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
        level={level}
        fail={fail}
      />

      {gameState === "playing" ? (
        <PokemonForm
          gameState={gameState}
          handlePokemonNameSubmit={handlePokemonNameSubmit}
          loadNewPokemon={loadNewPokemon}
          handlePokemonLevel={handlePokemonLevel}
        />
      ) : (
        <PokemonResults loadNewPokemon={loadNewPokemon} gameState={gameState} />
      )}
    </Container>
  );
};

export default App;
