import styles from './PostModelo.module.css';

interface PostModeloProps {
    fotoCapa: string;
    titulo: string;
    children: any;
    gifPath?: string;
}

export default function PostModelo({ children, fotoCapa, titulo, gifPath="" } : PostModeloProps) {
    return (
        <article className={styles.postModeloContainer}>
            <div
                className={styles.fotoCapa}
                style={{ backgroundImage: `url(${fotoCapa})` }}
            ></div>

            <h2 className={styles.titulo}>
                {titulo} {gifPath? <img src={gifPath} alt="Gif seta para baixo"/> : ""}
            </h2>

            <div className={styles.postConteudoContainer}>
                {children}
            </div>
        </article>
    )
}