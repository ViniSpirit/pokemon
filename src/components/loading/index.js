import styles from "./loading.module.css"
import Image from "next/image"
import gif from "../../images/pokebola.gif"

function Loading() {
  return (
    <>
      <Image
        src={gif}
        alt="gif"
        width={60}
        height={60}
        className={styles.gif}
      />
    </>
  )
}

export default Loading
