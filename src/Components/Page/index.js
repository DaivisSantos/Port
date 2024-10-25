import { useParams } from 'react-router-dom'; 
import './Page.module.css'
import Post from 'json/posts.json'
import Erro from 'Paginas/Error';
// import Banner from 'Components/Banner';
import PostModelo from 'Components/PostModelo';
import ReactMarkdown from 'react-markdown';
import Recomend from 'Components/Recomendados';



function Page() {
  const parametro = useParams()
  const Posts = Post.find(post => {
    return post.id === Number(parametro.id)
  })

  if (!Posts) {
    return <Erro />
  }

  

  return (
    <section>
      {/* <Banner titulo="Olá, mundo!" texto="Boas vindas ao meu espaço pessoal! Eu sou Daivis Santos, Estudante de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)" imagem='/images/circulo_colorido.png' /> */}
      <PostModelo fotoCapa={`/images/assets/posts/${Posts.id}/capa.png`} titulo={Posts.titulo}>
        <div className='post-markdown-container'>
          <ReactMarkdown>{Posts.texto}</ReactMarkdown>
        </div>
      </PostModelo>
      <Recomend/>
    </section>
  )
}

export default Page