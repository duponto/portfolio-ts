import Banner, { BannerProps } from "components/Banner";
import PostModelo from "components/PostModelo";
import styles from "./Formacao.module.css";
import { Link } from "react-router-dom";

export default function Formacao() {
    
    const bannerContent : BannerProps = {
        titulo: 'Formação e Histórico Acadêmico',
        paragrafo: 'Aqui você encontra os cursos que já fiz e os que estou fazendo.',
        imagem: {
            src: '/images/learning-image.png',
            alt: 'Imagem ilustrativasobre estudos (uma pessoa no notebook escorada em livros)'
        }
    }

    return (
        <>
            <Banner
                {...bannerContent}
            />
            <PostModelo 
                fotoCapa="images/studies-bg.png"
                titulo="Sobre mim como estudante"
            >
                <h3 className={styles.subtitulo}>
                    Por onde e o que já estudei
                </h3>
                
                <img
                    src={'/images/study-road.png'}
                    alt="Imagem ilustrativa de um caminho de estudos"
                    className={styles.studyRoadImage}
                />
                <div className={styles.paragrafos}>
                    
                    <hr/><h4><b>Técnico em Manutenção e Suporte em Informática (2018-2020)</b></h4>
                    <p>
                        Inicialmente, cursei o ensino médio integralmente com Técnico em Manutenção e Suporte em Informática no {" "}
                        <Link to="https://www.iffarroupilha.edu.br/panambi" target="_blank" className={styles.link}>
                            IFFar - Campus Panambi
                        </Link>
                        , {" "}onde, no ano de 2019 fui bolsista de projeto de monitoria em Física, 
                        no qual ministrei algumas aulas de física direcionado principalmente 
                        para aqueles que tinham dificuldade no aprendizado desta matéria. 
                        No mesmo ano, participei o grêmio estudantil como tesoureiro. 
                    </p>
                    <hr/><h4><b>Curso de Inglês (2014-2019)</b></h4>
                    <p>
                        Cursei inglês na {" "}
                        <Link to="https://www.wizard.com.br/escolas/panambicentro/" target="_blank" className={styles.link}>
                            Wizard
                        </Link>
                        , onde concluí diversos cursos e aprendi muito sobre a língua, 
                        que sigo aprendendo constantemente ao consumir diversos tipos diferentes de conteúdos,
                        seja lendo, vendo vídeos, <i>livestreams</i>, conversando com nativos, etc.
                    </p>
                    <hr/><h4><b>Bacharelado em Engenharia de Software (2021 - ????)</b></h4>
                    <p>
                        Comecei a cursar Engenharia de Software na {" "}
                        <Link to="https://www.unijui.edu.br/" target="_blank" className={styles.link}>
                            UNIJUI
                        </Link>
                        {" "}de 2021 até o fim de 2022, que, por motivos pessoais, acabei trocando de faculdade.
                        Desde então, sigo o curso na {" "}
                        <Link to="https://www.uninter.com/" target="_blank" className={styles.link}>
                            UNINTER
                        </Link>
                        . Em ambas faculdades, aprendi muito sobre programação, metodologias,
                        e práticas de desenvolvimento de software. Vale ressaltar que a faculdade não é minha única fonte de aprendizado,
                    </p>
                </div>

            </PostModelo>

        </>
    )
}