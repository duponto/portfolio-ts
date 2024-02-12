import StackIconsRow from 'components/StackIconsRow';
import styles from './Banner.module.css';
import internal from 'stream';

export interface BannerProps {	
    titulo: string;
    paragrafo: string;
    imagem: ImageProps;
}

interface ImageProps {
    src: string;
    alt: string;
}

export default function Banner(props: BannerProps) {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Bem vindo ao meu portfólio! Meu nome é Gabriel Dupont, sou desenvolvedor Full-Stack e este é o meu site pessoal.
                    Aqui você pode encontrar um pouco sobre mim, minhas experiências, meus projetos e entrar em contato comigo.
                </p>
                <StackIconsRow />
            </div>
            <div className={styles.imagens}>
                <img
                    className={styles.minhaFoto}
                    src={'/images/eumesmo.jpg'}
                    alt="Foto do Gabriel Dupont olhando para o lado"
                />
            </div>
        </div>
    )
}