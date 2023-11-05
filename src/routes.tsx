import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import Rodape from "components/Rodape";
import Menu from "components/Menu";
import PaginaPadrao from "components/PaginaPadrao";
import Inicio from "pages/Inicio";
import SobreMim from "pages/SobreMim";
import Post from "pages/Post";
import NaoEncontrada from "pages/NaoEncontrada";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
          <Route path="formacao" element={<></>} />
          <Route path="contato" element={<></>} />
        </Route>
        
        <Route path="posts/:id/*" element={<Post />} />


        <Route path="*" element={<NaoEncontrada />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
