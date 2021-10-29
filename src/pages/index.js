import { useEffect, useState } from "react"
import axios from "axios"
import styles from "../styles/home.module.css"

function Home() {
  const [pokemon, setPokemon] = useState([])
  const [url, setUrl] = useState("")

  function randomPokemon() {
    const url = "https://pokeapi.co/api/v2/pokemon/"
    const random = Math.floor(Math.random() * 150) + 1
    const urlRandom = url + random.toString()
    setUrl(urlRandom)
    console.log(urlRandom)
  }

  async function getPokemon() {
    try {
      const { data } = await axios.get(url)
      console.log(data)
      setPokemon(data)
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    getPokemon()
  }, [url])

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <h1>Pokemon</h1>
        <button onClick={randomPokemon}>Random pokemon</button>
        <img
          src={pokemon?.sprites?.other?.dream_world?.front_default}
          style={{ width: "200px" }}
        />
        <h3>{pokemon?.name}</h3>
      </div>
    </main>
  )
}
export default Home
