import Banner from "../components/Banner";
import imagem from "../assets/Banner_01 1.png"
import Secao from "../components/Secao";
import Valores from "../components/Valores";
import Banner2 from "../assets/banner_06 1.png";
import Galeria from "../components/Galeria";
import Cardapio from "../components/Cardapio";
import FormLead from "../components/FormLead";
import { useEffect, useState } from "react";

const Home = () => {

    


    return (
        <>
            <Banner
                texto={"Um café quentinho aqui na Tiamate muda o dia."}
                imagem={imagem}
                links

            />

            <Secao />
            <Valores/>
            <Banner
            texto={"Café Autêntico Chegou nosso café! Direto da fazenda."}
            imagem={Banner2}
           
            />
            <Galeria/>
            <Cardapio/>
            <FormLead/>
        </>


    );
}

export default Home;