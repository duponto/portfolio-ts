//import PostCard from "components/PostCard";
import styles from "./Competencias.module.css";
import stylesCard from "components/PostCard/PostCard.module.css";
import PostCard from "components/PostCard";
import posts from "json/posts.json";
import BotaoPrincipal from "components/BotaoPrincipal";

export default function Competencias() {

    return (
        <ul className={styles.posts}>            
            <li>
                <div className={stylesCard.post}>
                    <img
                        className={stylesCard.capa}
                        src={'https://i.ytimg.com/vi/IYAxXXMHCKk/0.jpg'}
                        alt="Imagem de capa do post"
                    />

                    <h2 className={styles.titulo}>teste</h2>

                    <BotaoPrincipal>Ler</BotaoPrincipal>
                </div>
            </li>
            {posts.map((post) => (
                <li key={post.id}>
                    <PostCard post={post} />
                </li>
            ))}
        </ul>
    )
}