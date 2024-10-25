import { Link } from 'react-router-dom';
import styles from './Posts.module.css'

function Card (props) {
  return (
    <section className={`${styles.Card}
    ${styles[props.tamanho]}`}>
      <div className={styles.ImgCard}>
        <img src={`/images/assets/posts/${props.post.id}/capa.png`} alt='imagens post'/>
      </div>
      <h4 className={styles.titulo}>{props.post.titulo}</h4>
      <div>
        <button className={styles.BtnCard}><Link to={`/${props.post.id}`} className={styles.LinkCard}>Ler Sobre</Link></button>
      </div>
    </section>
  )
}

export default Card;