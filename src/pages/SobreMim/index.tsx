import { Link } from "react-router-dom";
import styles from "./SobreMim.module.css";
import PostModelo from "components/PostModelo";

export default function SobreMim() {
    return (
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

            <p className={styles.paragrafo}>
                sempre tento deixar o código o mais limpo e legível possível. 
                Também gosto de aprender novas tecnologias e ferramentas, 
                e de aplicar o que aprendi em projetos pessoais. 
                Acredito que nem sempre se pode dizer que aprendeu algo apenas assistindo/lendo/ouvindo, 
                é preciso por a mão na massa e apanhar um pouquinho no aprendizado.
            </p>
            <p className={styles.paragrafo}>
                Minha carreira começou em 2021, sendo estagiário de desenvolvimento na{" "}
                <Link to={"https://www.saur.com.br/"} target="_blank" className={styles.link}>
                    SAUR Equipamentos S/A
                </Link>
                {" "}Onde tive meu primeiro contato profissional com linguagens de programação,
                lidando principalmente com HTML, CSS e JavaScript.
            </p>
        </PostModelo>
    )
}