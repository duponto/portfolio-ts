import Banner from "components/Banner";
import PostModelo from "components/PostModelo";
import styles from "./Inicio.module.css";
import { Link } from "react-router-dom";

export default function Inicio() {
    return (
        <main>
            <Banner />
            
            <PostModelo
            fotoCapa={'/images/sobre_mim_capa.png'}
            titulo="Sobre mim como desenvolvedor"
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
                        Minha carreira começou em 2021, sendo estagiário de desenvolvimento na{" "}
                        <Link to={"https://www.saur.com.br/"} target="_blank" className={styles.link}>
                            SAUR Equipamentos S/A
                        </Link>
                        {" "}Onde tive meu primeiro contato profissional com o mundo da programação,
                        lidando principalmente com HTML, CSS, JavaScript (e tb jQuery), e algumas outras linguagens ferramentais como o Fluig.
                    </p>
                </div>
            </PostModelo>
        </main>
    )
}