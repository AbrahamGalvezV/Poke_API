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
  level: string;
  count: number;
};

export type GameState = (typeof GameState)[keyof typeof GameState];

export const useGameManager = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.Playing);
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [level, setLevel] = useState<Level>(levels[0]);
  const [correctPokemon, setCorrectPokemon] = useState(0);
  const [textFail, setTextFail] = useState(0);
  const [nextPokemon, setNextPokemon] = useState(0);

  const fail = textFail + nextPokemon;

  const handlePokemonNameSubmit = useCallback(
    (userInput: string) => {
      if (!pokemon) return;

      const isValid = pokemonService.isPokemonNameValid(
        pokemon.name,
        userInput,
      );

      if (isValid) {
        setCorrectPokemon((prev) => prev + 1);
        setGameState(GameState.Correct);
        return;
      }

      const nextFail = fail + 1;

      setTextFail((prev) => prev + 1);

      if (nextFail >= 3) {
        setGameState(GameState.Wrong);
        setIsGameOver(true);
      } else {
        setGameState(GameState.Wrong);
      }
    },
    [pokemon, fail],
  );

  const handlePokemonLevel = (level: string) => {
    const selectedLevel = levels.find(
      (item) => item.level === level,
    );

    if (!selectedLevel) return;

    setLevel(selectedLevel);

    setTextFail(0);
    setNextPokemon(0);
    setCorrectPokemon(0);
    setIsGameOver(false);
    setGameState(GameState.Playing);
  };

  const loadNewPokemon = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    const startTime = Date.now();

    try {
      const randomPokemon = await pokemonService.getRandomPokemon(
        level.count,
      );

      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, 400 - elapsedTime);

      await new Promise((resolve) =>
        setTimeout(resolve, remainingTime),
      );

      setPokemon(randomPokemon);
      setGameState(GameState.Playing);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred",
      );
    } finally {
      setIsLoading(false);
    }
  }, [level]);

  const handleSkipPokemon = () => {
    const nextFail = fail + 1;

    setNextPokemon((prev) => prev + 1);

    if (nextFail >= 3) {
      setGameState(GameState.Wrong);
      setIsGameOver(true);
      return;
    }

    loadNewPokemon();
  };

  const resetGame = () => {
    setIsGameOver(false);
    setCorrectPokemon(0);
    setTextFail(0);
    setNextPokemon(0);
    setGameState(GameState.Playing);
    loadNewPokemon()
  };

  useEffect(() => {
    loadNewPokemon();
  }, [loadNewPokemon]);

  return {
    pokemon,
    isLoading,
    error,
    gameState,
    isGameOver,
    level,
    fail,
    textFail,
    nextPokemon,
    correctPokemon,
    loadNewPokemon,
    handlePokemonNameSubmit,
    handlePokemonLevel,
    handleSkipPokemon,
    resetGame,
  };
};