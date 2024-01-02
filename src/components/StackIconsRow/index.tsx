import styles from './StackIconsRow.module.css';
import cSharpSvg from '../../assets/icons/cs.svg';
import netCoreSvg from '../../assets/icons/NET-core.svg';
import jsSvg from '../../assets/icons/js.svg';
import reactSvg from '../../assets/icons/react.svg';
import tsSvg from '../../assets/icons/ts.svg';
import jQuerySvg from '../../assets/icons/jquery.svg';
import postgreSqlSvg from '../../assets/icons/postgresql.svg';
import gitSvg from '../../assets/icons/git.svg';
// import vscSvg from '../../assets/icons/vsc.svg';
// import vsSvg from '../../assets/icons/visual-studio.svg';


export default function StackIconsRow() {
    return (
        <>
        <div className={styles.container}>
            <img src={cSharpSvg} alt="CSharp logo" title="CSharp logo" />
            <img src={netCoreSvg} alt=".NET Core logo" title=".NET Core logo" />
            <img src={jsSvg} alt="JavaScript logo" title="JavaScript logo" />
            <img src={jQuerySvg} alt="jQuery logo" title="jQuery logo" />
            <img src={reactSvg} alt="React.js logo" title="React logo" />
            <img src={tsSvg} alt="Typescript logo" title="Typescript logo" />
            <img src={postgreSqlSvg} alt="PostgreSQL logo" title="PostgreSQL logo" />
            <img src={gitSvg} alt="Git logo" title="Git logo" />
        </div>
        </>
    )
}