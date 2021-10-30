import styles from "./button.module.css"
import { useContext } from "react"
import { RandomPokemonContext } from "../../context/randomPokemonContext"

function Button() {
  const { randomPokemon } = useContext(RandomPokemonContext)
  return (
    <>
      <button className={styles.button} onClick={randomPokemon}>
        POKÉMON ALEATÓRIO
      </button>
    </>
  )
}

export default Button
