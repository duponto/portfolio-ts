import styles from './PostModelo.module.css';

interface PostModeloProps {
    fotoCapa: string;
    titulo: string;
    children: any;
    gifPath?: string;
    gifOnClick?: () => void;
}

export default function PostModelo({ children, fotoCapa, titulo, gifPath="", gifOnClick }: PostModeloProps) {
    return (
        <article className={styles.postModeloContainer}>
            <div
                className={styles.fotoCapa}
                style={{ backgroundImage: `url(${fotoCapa})` }}
            ></div>

            <h2 className={styles.titulo}>
                {titulo} {gifPath? <img src={gifPath} onClick={gifOnClick} alt="Gif seta para baixo" className={styles.gif}/> : ""}
            </h2>

            <div className={styles.postConteudoContainer}>
                {children}
            </div>
        </article>
    )
}