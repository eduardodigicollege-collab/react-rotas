import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/home";
import NossoCafe from "../pages/NossoCafe";
import PageLayout from "../layouts/PageLayouts";
import Contato from "../pages/Contato";
import Cardapio from "../pages/Cardapio";
import Franquia from "../pages/franquia";

const Rotas = () => {
    return (


        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/nosso-cafe" element={<NossoCafe />} />
                    <Route path="/franquia" element={<Franquia />} />
                    <Route path="/contato" element={<Contato />} />
                    <Route path="/cardapio" element={<Cardapio />} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default Rotas