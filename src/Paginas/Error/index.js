//import { NavLink } from 'react-router-dom'
import Banner from '../../Components/Banner'
//import styles from './Erro.module.css'
import './Erro.css'


export default function Erro () {
  return (
    <div className='imgContainer'>
      <Banner titulo="Erro 404" texto="Não foi possivel encontrar a pagina, tente novamente mais tarde." imagem='/images/erro_404.png'/>
    </div>
    
  )
}