import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import Rodape from "components/Rodape";
import Header from "components/Header";
import Inicio from "pages/Inicio";
import Post from "pages/Post";
import NaoEncontrada from "pages/NaoEncontrada";
import Competencias from "pages/Competencias";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/">
          <Route index element={<Inicio />} />
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
