import styles from "./SobreMim.module.css";
import PostModelo from "components/PostModelo";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={'/images/sobre_mim_capa.png'}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Gabriel!
            </h3>

            <img
                src={'/images/eu-frente.jpg'}
                alt="Foto do Gabriel Dupont sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Como desenvolvedor, sempre tento deixar o código o mais limpo e legível possível, 
                para que qualquer pessoa que o leia possa entender o que está acontecendo. 
                Também gosto de aprender novas tecnologias e ferramentas, 
                e de aplicar o que aprendi em projetos pessoais. 
                Acredito que nem sempre se pode dizer que aprendeu algo apenas assistindo, 
                precisa por a mão na massa e apanhar um pouquinho no aprendizado.
            </p>
        </PostModelo>
    )
}