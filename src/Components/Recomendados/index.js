import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Posts from 'json/posts.json'
import Card from "Components/PostsCard";
import styles from './Recomendados.module.css'

export default function Recomend () {
  const { id } = useParams()
  const [numeroAleatorio, setNumeroAleatorio] = useState();
  const [numbFiltrado, setNumbFiltrado] = useState([]);

  useEffect(() => {
    const gerarNumeroAleatorio = (maximo, quantidade) => {
      const numeros = []
      while (numeros.length < quantidade) {
        const aleatorio = Math.floor(Math.random() * maximo) + 1;
        if(aleatorio !== parseInt(id, 10) && !numeros.includes(aleatorio)) {
          numeros.push(aleatorio)
        }
      }
      return numeros 
    }

    const MaximoObj = Posts.length
    const numeros = gerarNumeroAleatorio(MaximoObj, 4);
    setNumeroAleatorio(numeros)

    const filtrado = Posts.filter(post => numeros.includes(post.id))
    setNumbFiltrado(filtrado)

  }, [id])
  
  return (
    <section className={styles.sessaoFiltrada}>
      <h2>Outros projetos que talvez você possa gostar.</h2>
      <ul className={styles.filtrados}>
        {numbFiltrado.map(post => (
          <li className={styles.itemFiltrado}>
            <Card tamanho="CardSecond" post={post}/>
          </li>
        ))}
      </ul>
    </section>
  )
}