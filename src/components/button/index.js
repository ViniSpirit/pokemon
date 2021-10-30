import styles from "./button.module.css"

function Button({ randomPokemon }) {
  return (
    <>
      <button className={styles.button} onClick={randomPokemon}>
        Random Pokémon
      </button>
    </>
  )
}

export default Button
