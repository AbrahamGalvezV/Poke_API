import type { Pokemon } from "../types/pokemon.interface";

const POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon";
const MAX_POKEMON_COUNT = 151;

// Por si quiero crear una cuenta atras para darle emoción al resultado
// const fakePromise = <T>(data: TaskController, delay: number = 1000): Promise<T> => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(data);
//         }, delay)
//     })
// }

// await fakePromise(null, 3000); incluir dentro de getRandomIntInclusive


const getRandomIntInclusive = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomPokemon = async (): Promise<Pokemon> => {
  const randomId = getRandomIntInclusive(1, MAX_POKEMON_COUNT);

  const response = await fetch(`${POKEMON_API_URL}/${randomId}`);

  if (!response.ok) {
    throw new Error(`Error fetching Pokémon with ID ${randomId}`);
  }

  const data = await response.json();

  console.log(data.name);
  

  return {
    id: data.id,
    name: data.name,
    image: data.sprites.other["official-artwork"].front_default,
  };
};

const normalizePokemonName = (name: string): string => {
  return name
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036F]/g, "")
    .replace(/[^a-z0-9]/g, "");
};

const isPokemonNameValid = (
  pokemonName: string,
  userInput: string,
): boolean => {
  const normalizedPokemonName = normalizePokemonName(pokemonName);
  const normalizedUserInput = normalizePokemonName(userInput);

  return normalizedPokemonName === normalizedUserInput;
};

export const pokemonService = {
  getRandomPokemon,
  isPokemonNameValid,
};
