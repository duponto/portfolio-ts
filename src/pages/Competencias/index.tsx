//import PostCard from "components/PostCard";
import styles from "./Competencias.module.css";
import PostCard from "components/PostCard";
import posts from "json/posts.json";
import React from "react";

export default function Competencias() {
 
    return (
        <ul className={styles.posts}>            
            {posts.map((post) => (
                <li key={post.id}>
                    <PostCard post={post} />
                </li>
            ))}
        </ul>
    )
}