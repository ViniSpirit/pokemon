import styles from "./card.module.css"
import Loading from "../loading"
import Sprite from "../sprite"
import PokemonInfo from "../pokemonInfo"
import { useContext } from "react"
import { RandomPokemonContext } from "../../context/randomPokemonContext"

function Card() {
  const { pokemon, loading } = useContext(RandomPokemonContext)

  return (
    <>
      <div className={styles.card}>
        <p>#{pokemon?.id}</p>
        {loading ? <Loading /> : <Sprite />}
        <PokemonInfo />
      </div>
    </>
  )
}

export default Card
