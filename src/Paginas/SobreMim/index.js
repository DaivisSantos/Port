import styles from './Sobremim.module.css'

import PostModelo from "Components/PostModelo";
import Banner from "../../Components/Banner";
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoPerfil from 'assets/FotoPerfil.jpg'
import foto from 'assets/minha_foto.png'




function SobreMim() {
    return (
        <>
            <Banner titulo='Sobre mim' texto='Daivis Santos, Estudante de Front-end na Alura, compartilhando conhecimento e paixão pela programação.' imagem='/images/circulo_colorido.png' foto={foto}/>
            <PostModelo
                fotoCapa={fotoCapa}
                titulo="Sobre Mim"
            >

                <h3 className={styles.subtitulo}>
                    Ola, eu sou o Daivis!
                </h3>

                <img
                    src={fotoPerfil}
                    alt='foto perfil'
                    className={styles.fotoSobreMim} />

                <p className={styles.paragrafo}>
                    Oi, tudo bem? Eu sou um aluno e desenvolvedor front-end autodidata, e estou feliz de te ver por aqui.
                </p>
                <p className={styles.paragrafo}>
                    Minha jornada com programação começou de forma inusitada. Sem diploma acadêmico, decidi entrar na área após um forte sentimento de tristeza e perda de esperança na vida. Percebi meu potencial e decidi oferecer meu conhecimento em desenvolvimento web. A programação se tornou uma parte muito importante na minha vida, sendo uma muleta que me ajuda a caminhar constantemente.
                </p>
                <p className={styles.paragrafo}>
                    Comecei a me aventurar no mundo da programação durante o ensino médio, por conta própria, explorando diversas linguagens como Python e PHP. Apesar de não ter aprofundado muito em cada uma delas, minha paixão pelo assunto só crescia.
                </p>
                <p className={styles.paragrafo}>
                    Enquanto muitos colegas cursavam uma graduação, eu seguia meu próprio caminho, absorvendo conhecimento e desenvolvendo minhas habilidades por meio de projetos pessoais e estudos autodidatas.
                </p>
                <p className={styles.paragrafo}>
                    Foi durante esse período que percebi que queria trabalhar na área de desenvolvimento web.
                </p>
            </PostModelo>
        </>

    )
};

export default SobreMim;