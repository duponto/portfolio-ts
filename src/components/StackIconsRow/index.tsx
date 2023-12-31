import cSharpSvg from '../../assets/icons/cs.svg';
import netCoreSvg from '../../assets/icons/NET-core.svg';
import jsSvg from '../../assets/icons/js.svg';
import reactSvg from '../../assets/icons/react.svg';
import tsSvg from '../../assets/icons/ts.svg';


export default function StackIconsRow() {
    return (
        <div>
            <img src={cSharpSvg} alt="CSharp logo" title="CSharp logo" width="75px" height="75px" />
            <img src={netCoreSvg} alt=".NET Core logo" title=".NET Core logo" width="75px" height="75px" />
            <img src={jsSvg} alt="JavaScript logo" title="JavaScript logo" width="75px" height="75px" />
            <img src={reactSvg} alt="React.js logo" title="React logo" width="75px" height="75px" />
            <img src={tsSvg} alt="Typescript logo" title="Typescript logo" width="75px" height="75px" />
        </div>
    )
}