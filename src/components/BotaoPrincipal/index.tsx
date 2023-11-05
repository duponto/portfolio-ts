import styles from './BotaoPrincipal.module.css';

interface BotaoPrincipalProps {
    children: React.ReactNode
    tamanho?: string
}

export default function BotaoPrincipal({ children, tamanho } : BotaoPrincipalProps) {
    return (
        <button className={`
            ${styles.botaoPrincipal}
            ${tamanho && styles[tamanho]}
        `}>
            {children}
        </button>
    )
}