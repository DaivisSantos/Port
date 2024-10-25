import styles from './Banner.module.css'


function Banner (props) {
  return(
    <section className={styles.BannerSessao}>
      <div className={styles.Banner}>

        <div className={styles.Textos}>
          <h1>{props.titulo}</h1>
          <p>{props.texto}</p>
        </div>

        <div className={styles.Imagens}>
          <img className={styles.ImgPrincipal} src={props.imagem} alt='imagem inicio do banner'/>
          <img className={styles.ImgSecundaria} src={props.foto} alt=''/>
        </div>
      </div>
    </section>

  )
}

export default Banner;