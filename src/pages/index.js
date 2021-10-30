import { useEffect, useState } from "react"
import axios from "axios"
import styles from "../styles/home.module.css"
import Card from "../components/card"

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
      console.log(data)
    } catch (error) {
      console.error(error.message)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (url !== null) getPokemon()
  }, [url])

  let backgrounds = "white"

  switch (pokemon?.types[0]?.type?.name) {
    case "water":
      backgrounds = "blue"
      break
    case "fire":
      backgrounds = "red"
      break
    case "grass":
      backgrounds = "green"
      break
    case "normal":
      backgrounds = "#6b6b6b"
      break
    case "poison":
      backgrounds = "purple"
      break
    case "electric":
      backgrounds = "yellow"
      break
    case "ground":
      backgrounds = "brown"
      break
    case "psychic":
      backgrounds = "pink"
      break
    case "fighting":
      backgrounds = "#8c864c"
      break
    case "bug":
      backgrounds = "#538c4c"
      break
    case "ice":
      backgrounds = "#4c898c"
      break
    case "ghost":
      backgrounds = "#2f3a3b"
      break
    case "fairy":
      backgrounds = "#9e76a6"
      break
    case "rock":
      backgrounds = "#523333"
      break
  }

  return (
    <main className={styles.main} style={{ background: backgrounds }}>
      <div>
        <h1>Pokemon</h1>

        <button type="button" onClick={randomPokemon}>
          Random pokemon
        </button>
      </div>
      {pokemon === null ? (
        <div>test</div>
      ) : (
        <Card pokemon={pokemon} loading={loading} />
      )}
    </main>
  )
}
export default Home
