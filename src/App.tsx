import { PokemonDisplay } from "./components/PokemonDisplay"
import { PokemonForm } from "./components/PokemonForm"
import { PokemonResults } from "./components/PokemonResults"

const App = () => {



  return (
    <div className="container mx-auto my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 ">
          <PokemonDisplay />
          <PokemonForm />
          <PokemonResults />      
        </div>
      </div>
    </div>
  )
}

export default App