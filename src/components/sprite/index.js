import styles from "./sprite.module.css"

function Sprite({ sprite }) {
  return (
    <>
      <img src={sprite} alt="sprite" className={styles.sprite} />
    </>
  )
}

export default Sprite
