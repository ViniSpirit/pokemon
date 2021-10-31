import styles from "./button.module.css"
import { useContext } from "react"
import { RandomPokemonContext } from "../../context/randomPokemonContext"

function Button() {
  const { randomPokemon, loading } = useContext(RandomPokemonContext)
  return (
    <>
      <button
        disabled={loading ? true : false}
        className={styles.button}
        onClick={randomPokemon}
      >
        Get a Random Pokémon
      </button>
    </>
  )
}

export default Button
