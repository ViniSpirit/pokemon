import { useEffect, useState } from "react"
import axios from "axios"
import Card from "../components/card"
import DefaultImage from "../components/defaultImage"
import Button from "../components/button"

function Home() {
  const [pokemon, setPokemon] = useState(null)
  const [url, setUrl] = useState(null)
  const [loading, setLoading] = useState(false)

  function randomPokemon() {
    setLoading(true)
    const url = "https://pokeapi.co/api/v2/pokemon/"
    const random = Math.floor(Math.random() * 898) + 1
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

  return (
    <main className="main defaultBackground" id={pokemon?.types[0]?.type?.name}>
      <h1>Pokémon</h1>
      <div>
        <Button randomPokemon={randomPokemon} />
      </div>
      {pokemon === null ? (
        <DefaultImage />
      ) : (
        <Card pokemon={pokemon} loading={loading} />
      )}
    </main>
  )
}
export default Home
