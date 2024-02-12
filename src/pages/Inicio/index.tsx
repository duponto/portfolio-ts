import Banner, { BannerProps } from "components/Banner";
import PostModelo from "components/PostModelo";
import styles from "./Inicio.module.css";
import { Link } from "react-router-dom";
import downArrowGif from "assets/gifs/scroll-down-arrow.gif";

export default function Inicio() {

    const gifOnClick = () => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }


    const bannerContent = {
        titulo: "Olá, mundo!",
        paragrafo: "Bem vindo ao meu portfólio! Meu nome é Gabriel Dupont, sou desenvolvedor Full-Stack e este é o meu site pessoal. Aqui você pode encontrar um pouco sobre mim, minhas experiências, meus projetos e entrar em contato comigo.",
        imagem: {
            src: "/images/eumesmo.jpg",
            alt: "Foto de Gabriel Dupont olhando ao lado"
        }
    }


    return (
        <main>
            <Banner
                {...bannerContent}
            />
            
            <PostModelo
                fotoCapa={'/images/sobre_mim_capa.png'}
                titulo="Sobre mim como desenvolvedor"
                gifPath={downArrowGif}
                gifOnClick={gifOnClick}
            >
                <h3 className={styles.subtitulo}>
                    Como desenvolvedor...
                </h3>

                <img
                    src={'/images/eu-frente.jpg'}
                    alt="Foto do Gabriel Dupont sorrindo"
                    className={styles.fotoSobreMim}
                />
                <div className={styles.paragrafos}>
                    <p>
                        sempre tento deixar o código o mais limpo e legível possível. 
                        Também gosto de aprender novas tecnologias e ferramentas, 
                        e de aplicar o que aprendi em projetos pessoais. 
                        Acredito que nem sempre se pode dizer que aprendeu algo apenas assistindo/lendo/ouvindo, 
                        é preciso por a mão na massa e apanhar um pouquinho no aprendizado.
                    </p>
                    <p>
                        Minha carreira começou em 05/2021, sendo estagiário de desenvolvimento na{" "}
                        <Link to={"https://www.saur.com.br/"} target="_blank" className={styles.link}>
                            SAUR Equipamentos S/A
                        </Link>
                        ,{" "}onde tive meu primeiro contato profissional com o mundo da programação,
                        lidando principalmente com HTML, CSS, JavaScript (e jQuery),
                        e algumas outras linguagens ferramentais.
                        Enquanto estagiário pela SAUR, fui basicamente o responsável geral da aplicação de sistema de gestão de documentos,
                        um sistema feito em Fluig, no qual fui o principal mantenedor e desenvolvedor naquela época.
                    </p>
                    <p>
                        Atualmente (desde 06/2022), estou trabalhando como desenvolvedor full-stack na{" "}
                        <Link to={"https://ignisplanning.com/"} target="_blank" className={styles.link}>
                            Ignis Planning
                        </Link>
                        , onde trabalho com diversas tecnologias, como JavaScript, React e TypeScript no front-end,
                        e C# com .NET Framework e .NET Core no back-end.
                        Aqui, também, aprendi a desenvolver web crawlers em C#, criando-os para extrair diversos dados públicos
                        de fontes confiáveis, através de APIs, web scraping, e
                        download/leitura/atualização de arquivos xlsx, pdf, csv, etc.
                    </p>
                    <p>
                        No último ano (2023), a Ignis proporcionou a oportunidade de estudar através da{" "}
                        <Link to={"https://www.alura.com.br/"} target="_blank" className={styles.link}>
                            Alura
                        </Link>
                        , que se tornou minha maior fonte de estudos e aprendizados. Confira meu{" "}
                        <Link 
                            to={"https://cursos.alura.com.br/user/gabriel-muenchen/fullCertificate/b44c9518654137508dd40f2ad65389b4"}
                            target="_blank"
                            className={styles.link}
                        >
                            Certificado de Conclusão
                        </Link>
                    </p>
                </div>
            </PostModelo>
        </main>
    )
}