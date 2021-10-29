import { useEffect, useState } from "react"
import axios from "axios"
import styles from "../styles/home.module.css"
import Loading from "../components/loading"
import Sprite from "../components/sprite"

function Home() {
  const [pokemon, setPokemon] = useState(null)
  const [url, setUrl] = useState(null)
  const [loading, setLoading] = useState(false)

  function randomPokemon() {
    setLoading(true)
    const url = "https://pokeapi.co/api/v2/pokemon/"
    const random = Math.floor(Math.random() * 150) + 1
    const urlRandom = url + random.toString()
    setUrl(urlRandom)
  }

  async function getPokemon() {
    try {
      const { data } = await axios.get(url)
      setPokemon(data)
    } catch (error) {
      console.error(error.message)
    }

    setLoading(false)
  }

  useEffect(() => {
    if (url !== null) getPokemon()
    console.log(pokemon)
  }, [url])

  return (
    <main
      className={styles.main}
      style={
        pokemon?.types[0]?.type?.name === "water"
          ? { background: "blue" }
          : { background: "white" }
      }
    >
      <div className={styles.card}>
        <h1>Pokemon</h1>
        <button type="button" onClick={randomPokemon}>
          Random pokemon
        </button>
        {pokemon === null ? <div>test</div> : <div>test2</div>}

        <div>
          {loading ? (
            <Loading />
          ) : (
            <Sprite
              sprite={pokemon?.sprites?.other?.dream_world?.front_default}
            />
          )}
        </div>
        <div>
          <h3>{pokemon?.name}</h3>
          {pokemon?.types?.map((item) => (
            <h3>{item.type.name}</h3>
          ))}
        </div>
      </div>
    </main>
  )
}
export default Home
