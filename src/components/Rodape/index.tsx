import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './Rodape.module.css'
import { Link } from 'react-router-dom';

export default function Rodape() {
    return (
        <div className={styles.footer}>
            Desenvolvido por Gabriel
            <div className={styles.icons}>
                <Link to={'https://github.com/duponto'} target='_blank'>
                    <FontAwesomeIcon icon={faGithub} size='xl'/>
                </Link>
                <Link to={'https://www.linkedin.com/in/gabrielmuenchen/'} target='_blank'>
                    <FontAwesomeIcon icon={faLinkedin} size='xl'/>
                </Link>
            </div>
        </div>
    )
}