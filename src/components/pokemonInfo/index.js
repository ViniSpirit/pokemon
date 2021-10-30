import styles from "./pokemonInfo.module.css"
import { useContext } from "react"
import { RandomPokemonContext } from "../../context/randomPokemonContext"

function PokemonInfo() {
  const { pokemon } = useContext(RandomPokemonContext)

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <div className={styles.info}>
      <div>
        <h3>Nome:</h3>
        <p className={styles.name}>{capitalizeFirstLetter(pokemon?.name)}</p>
      </div>
      <div>
        <h3>Habilidades:</h3>
        {pokemon?.abilities.map((item) => (
          <p key={Math.random()}>{item.ability.name}</p>
        ))}
      </div>
      <div>
        <h3>Tipo:</h3>
        {pokemon?.types?.map((item) => (
          <p key={Math.random()}>{item.type.name}</p>
        ))}
      </div>
    </div>
  )
}

export default PokemonInfo
