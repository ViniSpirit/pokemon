import styles from "./defaultContainer.module.css"
import Image from "next/image"
import defaultImage from "../../images/defaultImage.png"
import Loading from "../loading"
import { useContext } from "react"
import { RandomPokemonContext } from "../../context/randomPokemonContext"

function DefaultContainer() {
  const { loading } = useContext(RandomPokemonContext)
  return (
    <div className={styles.defaultContainer}>
      {loading ? (
        <Loading />
      ) : (
        <Image src={defaultImage} width={200} height={200} />
      )}
    </div>
  )
}

export default DefaultContainer
