import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';

function MenuLink ({children, to}){
  // const localizacao = useLocation()

  return (
      <p className={styles.LinkP}>

        <NavLink 
            className={({isActive, isPending}) =>
              
              `${isPending ?  styles.LinkP : isActive ? styles.LinkPDestacado : ""}`
            }
            to={to}
            end
       > 

          {children} 

        </NavLink>

      </p>
  )
}

export default MenuLink;