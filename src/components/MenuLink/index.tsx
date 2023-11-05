import { Link, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.css';

interface MenuLinkProps {
    children: React.ReactNode;
    to: string;
}

export default function MenuLink({ children, to } : MenuLinkProps) {
    const localizacao = useLocation();

    return (
        <Link className={`
            ${styles.link}
            ${localizacao.pathname === to ? styles.linkDestacado : ""}
        `} to={to}>
            {children}
        </Link>
    )
}