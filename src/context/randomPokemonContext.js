import { createContext, useState, useEffect } from "react"
import axios from "axios"

export const RandomPokemonContext = createContext()

export function PokemonContext({ children }) {
  const [pokemon, setPokemon] = useState(null)
  const [url, setUrl] = useState(null)
  const [loading, setLoading] = useState(false)

  function randomPokemon() {
    const url = "https://pokeapi.co/api/v2/pokemon/"
    const random = Math.floor(Math.random() * 898) + 1
    const urlRandom = url + random.toString()
    setUrl(urlRandom)
  }

  useEffect(() => {
    async function getPokemon() {
      setLoading(true)
      try {
        const { data } = await axios.get(url)
        setPokemon(data)
        console.log(data)
      } catch (error) {
        console.error(error.message)
      }
      setLoading(false)
    }

    if (url !== null) getPokemon()
  }, [url])

  return (
    <RandomPokemonContext.Provider value={{ randomPokemon, pokemon, loading }}>
      {children}
    </RandomPokemonContext.Provider>
  )
}
