import Card from "../components/card"
import DefaultContainer from "../components/defaultContainer"
import Button from "../components/button"

import { useContext } from "react"
import { RandomPokemonContext } from "../context/randomPokemonContext"

function Home() {
  const { pokemon } = useContext(RandomPokemonContext)

  const firstType = pokemon?.types[0]?.type?.name

  return (
    <main className="main defaultBackground" id={firstType}>
      <h1>Escolha Seu Pokémon</h1>
      <Button />
      {pokemon === null ? <DefaultContainer /> : <Card />}
    </main>
  )
}
export default Home
