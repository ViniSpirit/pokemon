import styles from "./pokemonInfo.module.css"
import { useContext } from "react"
import { RandomPokemonContext } from "../../context/randomPokemonContext"
import { BackgroundContext } from "../../context/backgroundContext"

function PokemonInfo() {
  const { pokemon } = useContext(RandomPokemonContext)

  const { typeAndBackground } = useContext(BackgroundContext)

  const typesAndBg = typeAndBackground()

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <div className={styles.info}>
      <div>
        <h3>Name:</h3>
        <p className={styles.name}>{capitalizeFirstLetter(pokemon?.name)}</p>
      </div>
      <div>
        <h3>Skills:</h3>
        {pokemon?.abilities.map((item) => (
          <p key={Math.random()}>{item.ability.name}</p>
        ))}
      </div>
      <div>
        <h3>Type:</h3>
        {typesAndBg.map((item) => (
          <p
            style={{ background: item.bg }}
            key={Math.random()}
            className={styles.types}
          >
            {item.type}
          </p>
        ))}
      </div>
    </div>
  )
}

export default PokemonInfo
