import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import SobreMim from "./Paginas/SobreMim";
import Cabecalho from "./Components/Cabecalho";
import Rodape from "./Components/Rodape";
import Erro from "./Paginas/Error";
import Page from "Components/Page";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
        <Routes>
            <Route path="/" element={<Inicio />}/>
            <Route path="/sobremim" element={<SobreMim />}/>
            <Route path="*" element={<Erro />}/>
            <Route path="/:id" element={<Page />}/>
        </Routes>
        <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;