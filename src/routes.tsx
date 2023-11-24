import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import Rodape from "components/Rodape";
import Menu from "components/Menu";
import Inicio from "pages/Inicio";
import SobreMim from "pages/SobreMim";
import Post from "pages/Post";
import NaoEncontrada from "pages/NaoEncontrada";
import Competencias from "pages/Competencias";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />

      <Routes>
        <Route path="/">
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
          <Route path="formacao" element={<></>} />
          <Route path="competencias" element={<Competencias/>} />
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
