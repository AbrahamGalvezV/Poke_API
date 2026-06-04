import { useState } from "react";

const [selectedLevel, setSelectedLevel] = useState(levels[0]);

// objeto con la info
const levels = [
  {level: 'I Kanto', count: 151}, 
  {level: 'II Johto', count: 251},
  {level: 'III Hoenn', count: 386},
  {level: 'IV Sinnoh', count: 493},
  {level: 'V Unova', count: 649},
  {level: 'VI Kalos', count: 721},
  {level: 'VII Alola', count: 809},
  {level: 'VIII Galar', count: 905},
  {level: 'IX Paldea', count: 1025},
] as const;

console.log(levels.map((level) => level.count));

const handleSelectedLevel = (level: (typeof levels)[number]) => {
  setSelectedLevel(level);
  setIs
}