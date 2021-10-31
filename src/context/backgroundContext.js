import { createContext, useContext } from "react"
import { RandomPokemonContext } from "./randomPokemonContext"

export const BackgroundContext = createContext()

const types = {
  bug: "#3c9851",
  dark: "#595978",
  dragon: "#62cbd8",
  electric: "#fbfb72",
  fairy: "#e91269",
  fighting: "#ee6238",
  fire: "#fc4a5a",
  flying: "#95b3c7",
  ghost: "#906690",
  grass: "#27ca51",
  ground: "#6f481f",
  ice: "#86d3f4",
  normal: "#cb98a7",
  poison: "#9a69db",
  psychic: "#f61c92",
  rock: "#8b3f23",
  steel: "#61746e",
  water: "#1553e0",
}

export function Background({ children }) {
  const { pokemon } = useContext(RandomPokemonContext)

  const pokemonTypes = pokemon?.types?.map((item) => item.type.name)

  const colors = pokemonTypes?.map((item) => types[item])

  function generateBackground() {
    if (!pokemonTypes) return
    if (pokemonTypes.length > 1) {
      return `linear-gradient(${colors.join(",")})`
    }
    return types[pokemonTypes[0]]
  }

  return (
    <BackgroundContext.Provider value={generateBackground}>
      {children}
    </BackgroundContext.Provider>
  )
}
