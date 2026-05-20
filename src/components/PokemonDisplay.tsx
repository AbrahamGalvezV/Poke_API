

export const PokemonDisplay = () => {
    const image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png";
    const name = "Bulbasur"

    const showAnswar = false; 

  return (
    <div className="card">
      <div className="card-header">
        <h1 className="text-center">
            {showAnswar ? name.toUpperCase() : "Guess the Pokémon"}
        </h1>
      </div>
      <div className="card-body">
        <img
          src={image}
          alt=""
          className="img-fluid mx-auto d-block"
          style={{
            maxHeight: "300px",
            filter: showAnswar ? "none" : "brightness(0)",
            transition: "filter 0.3s ease-in-out"
          }}
        />
      </div>
    </div>
  );
};
