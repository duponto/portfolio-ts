import MenuLink from 'components/MenuLink';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">
                    Início
                </MenuLink>
                <MenuLink to="/formacao">
                    Formação
                </MenuLink>
                <MenuLink to="/competencias">
                    Competências
                </MenuLink>
                <MenuLink to="/contato">
                    Contato
                </MenuLink>
            </nav>
        </header>
    )
}