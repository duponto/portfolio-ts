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
                Acredito que nem sempre se pode dizer que aprendeu algo apenas assistindo, 
                é preciso por a mão na massa e apanhar um pouquinho no aprendizado.
            </p>
        </PostModelo>
    )
}