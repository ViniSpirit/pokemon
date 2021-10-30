import styles from "./sprite.module.css"
import defaultImage from "../../images/defaultImage.png"
import Image from "next/image"
import { useContext } from "react"
import { RandomPokemonContext } from "../../context/randomPokemonContext"

function Sprite() {
  const { pokemon } = useContext(RandomPokemonContext)

  const sprite1 = pokemon?.sprites?.other?.dream_world?.front_default
  const sprite2 = pokemon?.sprites?.other?.home?.front_default
  const image = sprite1 ? sprite1 : sprite2

  return (
    <>
      {image ? (
        <img src={image} className={styles.sprite} />
      ) : (
        <Image src={defaultImage} width={200} height={200} />
      )}
    </>
  )
}

export default Sprite
