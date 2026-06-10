import { useCallback, useEffect, useState } from "react";
import type { Pokemon } from "../types/pokemon.interface";
import { pokemonService } from "../services/pokemon.service";
import { levels } from "../components/Container/PokemonLevels";

export const GameState = {
  Playing: "playing",
  Correct: "correct",
  Wrong: "wrong",
} as const;

type Level = {
  level: string,
  count: number
}

export type GameState = (typeof GameState)[keyof typeof GameState];

export const useGameManager = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [level, setLevel] = useState<Level>(levels[0]);

  const [gameState, setGameState] = useState<GameState>(GameState.Playing);
  

  const handlePokemonNameSubmit = useCallback(
    (userInput: string) => {
      if (!pokemon) return;

      const isValid = pokemonService.isPokemonNameValid(
        pokemon?.name,
        userInput,
      );

      setGameState(isValid ? GameState.Correct : GameState.Wrong);
    },
    [pokemon],
  );

  const handlePokemonLevel = (level:string) => {
    const selectedLevel = levels.find(
      (item) => item.level === level,
    );
    
    if (selectedLevel) {
      setLevel(selectedLevel);
    }
  } 

  const loadNewPokemon = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setGameState(GameState.Playing);

    const startTime = Date.now();

    try {
      const randomPokemon = await pokemonService.getRandomPokemon(level.count);

      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, 400 - elapsedTime);

      await new Promise((resolve) => setTimeout(resolve, remainingTime));


      setPokemon(randomPokemon);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  }, [level]);

  useEffect(() => {
    loadNewPokemon();
  }, [loadNewPokemon]);

  return {
    pokemon,
    isLoading,
    error,
    loadNewPokemon,
    handlePokemonNameSubmit,
    gameState,
    handlePokemonLevel,
    level,
  };
};
