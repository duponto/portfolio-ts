import MenuLink from 'components/MenuLink';
import styles from './Menu.module.css';

export default function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">
                    Início
                </MenuLink>
                <MenuLink to="/formacao">
                    Formação
                </MenuLink>
                <MenuLink to="/sobremim">
                    Sobre Mim
                </MenuLink>
                <MenuLink to="/contato">
                    Contato
                </MenuLink>
            </nav>
        </header>
    )
}