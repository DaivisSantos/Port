import styles from './Rodape.module.css'
import {ReactComponent as MarcaRegistrada} from 'assets/marca_registrada.svg'

function Rodape () {
  return (
    <section className={styles.Rodape}>
      <footer>
        <MarcaRegistrada />
        <p>Desenvolvido por D$</p>
      </footer>
    </section>
  )
}

export default Rodape;