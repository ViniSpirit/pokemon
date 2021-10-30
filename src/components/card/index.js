import styles from "./card.module.css"
import Loading from "../loading"
import Sprite from "../sprite"

function Card({ pokemon, loading }) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <>
      <div className={styles.card}>
        <p>#{pokemon?.id}</p>
        {loading ? (
          <Loading />
        ) : (
          <Sprite
            sprite={pokemon?.sprites?.other?.dream_world?.front_default}
          />
        )}
        <div className={styles.info}>
          <div>
            <p>Nome:</p>
            <h3 className={styles.name}>
              {capitalizeFirstLetter(pokemon?.name)}
            </h3>
          </div>
          <div>
            <p>Tipo:</p>
            {pokemon?.types?.map((item) => (
              <h3 key={Math.random()}>{item.type.name}</h3>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
