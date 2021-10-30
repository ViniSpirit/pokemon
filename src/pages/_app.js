import "../styles/globals.css"
import { PokemonContext } from "../context/randomPokemonContext"

function MyApp({ Component, pageProps }) {
  return (
    <PokemonContext>
      <Component {...pageProps} />
    </PokemonContext>
  )
}

export default MyApp
