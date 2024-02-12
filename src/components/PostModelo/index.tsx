import styles from './PostModelo.module.css';
import downArrowGif from "assets/gifs/scroll-down-arrow.gif";

interface PostModeloProps {
    fotoCapa: string;
    titulo: string;
    children: any;
}

export default function PostModelo({ children, fotoCapa, titulo }: PostModeloProps) {
    
    const gifOnClick = () => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }

    return (
        <article className={styles.postModeloContainer}>
            <div
                className={styles.fotoCapa}
                style={{ backgroundImage: `url(${fotoCapa})` }}
            />

            <h2 className={styles.titulo}>
                {titulo} 
                <img src={downArrowGif} onClick={gifOnClick} alt="Gif seta para baixo" className={styles.gif}/>
            </h2>

            <div className={styles.postConteudoContainer}>
                {children}
            </div>
        </article>
    )
}