import Banner, { BannerProps } from "components/Banner";
import PostModelo from "components/PostModelo";


export default function Formacao() {
    
    const bannerContent : BannerProps = {
        titulo: 'Formação e Histórico Acadêmico',
        paragrafo: 'Aqui você encontra os cursos que já fiz e os que estou fazendo.',
        imagem: {
            src: '/images/learning-image.png',
            alt: 'Imagem ilustrativasobre estudos (uma pessoa no notebook escorada em livros)'
        }
    }

    return (
        <>
            <Banner
                {...bannerContent}
            />
            <PostModelo 
                fotoCapa="images/studies-bg.png"
                titulo="Por onde já estudei?"

            >
                <></>
            </PostModelo>

        </>
    )
}