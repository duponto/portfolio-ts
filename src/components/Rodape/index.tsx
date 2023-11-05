import styles from './Rodape.module.css'

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            Desenvolvido por Gabriel
            <span className={styles.span}>
                com auxílio através de cursos da Alura
            </span>
        </footer>
    )
}