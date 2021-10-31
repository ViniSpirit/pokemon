import Card from "../components/card"
import DefaultContainer from "../components/defaultContainer"
import Button from "../components/button"

import { useContext } from "react"
import { RandomPokemonContext } from "../context/randomPokemonContext"
import { BackgroundContext } from "../context/backgroundContext"

function Home() {
  const { pokemon } = useContext(RandomPokemonContext)
  const { generateBackground } = useContext(BackgroundContext)

  return (
    <main
      className="main defaultBackground"
      style={{ background: generateBackground() }}
    >
      <Button />
      {pokemon === null ? <DefaultContainer /> : <Card />}
    </main>
  )
}
export default Home
