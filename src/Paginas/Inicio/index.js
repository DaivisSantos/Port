import Card from "Components/PostsCard";
import Banner from "../../Components/Banner";
import Post from "json/posts.json"
import styles from "./Inicio.module.css"
import foto from 'assets/minha_foto.png'


export default function Inicio () {
    return (
        <>
            <Banner titulo="Olá, mundo!" 
                    texto="Boas vindas ao meu espaço pessoal! Eu sou Daivis Santos, Estudante de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)" 
                    imagem='/images/circulo_colorido.png'
                    foto={foto}/>
            <ul className={styles.posts}>
                {Post.map((post) => (
                    <li key={post.id} >
                        <Card post={post}/>
                    </li>
                ))}
            </ul>
        </>
    )
};