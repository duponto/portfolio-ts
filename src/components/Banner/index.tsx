import styles from './Banner.module.css';

export interface BannerProps {	
    titulo: string;
    paragrafo: string;
    imagem: ImageProps;
    children?: React.ReactNode;
}

interface ImageProps {
    src: string;
    alt: string;
}

export default function Banner(props: BannerProps) {
    const { titulo, paragrafo, imagem, children } = props;
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    {titulo}
                </h1>

                <p className={styles.paragrafo}>
                    {paragrafo}
                </p>
                {children}
            </div>
            <div className={styles.imagens}>
                <img {...imagem} className={styles.imagemBanner}/>
            </div>
        </div>
    )
}