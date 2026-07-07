import styles from "./Spinner.module.css"
import pokemon from "../../../assets/pokemon.png"
import pokeball from "../../../assets/pokeball.png"

export const Spinner = () => {

  return (
    <div className="text-center">
      <img src={pokemon} className={styles.spinner}/>
      <img src={pokeball} className={styles.spinner_pokeball}/>
    </div>
  );
};
