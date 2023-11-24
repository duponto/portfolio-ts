import styles from './Banner.module.css';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Salve!
                </h1>

                <p className={styles.paragrafo}>
                    Bem vindo ao meu portfólio! Meu nome é Gabriel Dupont, sou desenvolvedor Full-Stack e este é o meu site pessoal.
                    Aqui você pode encontrar um pouco sobre mim, minhas experiências, meus projetos e entrar em contato comigo.
                </p>
            </div>

            <div className={styles.imagens}>
                {/* <img
                    className={styles.circuloColorido}
                    src={'/images/circulo_colorido.png'}
                    aria-hidden={true}
                    alt=""
                /> */}

                <img
                    className={styles.minhaFoto}
                    src={'/images/eumesmo.jpg'}
                    alt="Foto do Gabriel Dupont olhando para o lado"
                />
            </div>
        </div>
    )
}