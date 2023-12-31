import Banner from "components/Banner";
import SobreMim from "pages/SobreMim";
import { Outlet } from "react-router-dom";

export default function Inicio() {
    return (
        <main>
            <Banner />
            <SobreMim />
            <Outlet />
        </main>
    )
}