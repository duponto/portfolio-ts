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
                Lorem Ipsum
            </p>
        </PostModelo>
    )
}