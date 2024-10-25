import styles from './Cabacalho.module.css'
import MenuLink from '../MenuLink';

function Cabecalho () {
  return (
    <section className={styles.SessaoCabecalho}>
      <header>
        <MenuLink to='/'>
          Inicio
        </MenuLink>
        <MenuLink to='/Sobremim'>
          Sobre mim
        </MenuLink>
      </header>
    </section>
  )
}

export default Cabecalho;