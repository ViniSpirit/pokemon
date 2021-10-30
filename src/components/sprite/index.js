import styles from "./sprite.module.css"
import defaultImage from "../../images/defaultImage.png"
import Image from "next/image"

function Sprite({ sprite }) {
  return (
    <>
      {sprite ? (
        <img src={sprite} className={styles.sprite} />
      ) : (
        <Image src={defaultImage} width={200} height={200} />
      )}
    </>
  )
}

export default Sprite
