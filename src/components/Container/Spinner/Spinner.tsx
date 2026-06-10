import styles from "./Spinner.module.css"

export const Spinner = () => {

  return (
    <div className="text-center">
      <img src="../img/pokemon.png" className={styles.spinner}/>
      <img src="../img/pokeball.png" className={styles.spinner_pokeball}/>
    </div>
  );
};
