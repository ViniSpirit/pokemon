import styles from "./defaultImage.module.css"
import Image from "next/image"
import defaultImage from "../../images/defaultImage.png"

function DefaultContainer() {
  return (
    <div className={styles.defaultImage}>
      <Image src={defaultImage} width={200} height={200} />
    </div>
  )
}

export default DefaultContainer
