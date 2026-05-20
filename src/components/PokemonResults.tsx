
export const PokemonResults = () => {
    const result = "correct"
    
    return (
        <div className={`alert alert-${result === "correct" ? "success" : "danger"} text-center`}
        >
            {result === "correct" ? <h2>¡Correcto!</h2> : <h2>¡Incorrecto!</h2>}
            <button className="btn btn-dark mt-3">Volver a intentar</button>
        </div>
    )
}