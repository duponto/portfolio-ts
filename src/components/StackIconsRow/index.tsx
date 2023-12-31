///@ts-ignore
import cSharpSvg from '../../assets/icons/cs.svg';
///@ts-ignore
import netCoreSvg from '../../assets/icons/NET-core.svg';

export default function StackIconsRow() {
    return (
        <div>
            <img src={cSharpSvg} alt="csharp logo" width="75px" height="75px" />
            <img src={netCoreSvg} alt="csharp logo" width="75px" height="75px" />
        </div>
    )
}