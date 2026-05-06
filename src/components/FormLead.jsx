import { BiMailSend, BiMessage, BiSolidCoffeeTogo, BiSolidEnvelope, BiSolidHome, BiSolidMap, BiSolidUserCircle, BiUserCircle } from "react-icons/bi";
import img from "../assets/Rectangle 25.png"
import { IoLogoWhatsapp } from "react-icons/io";
import { useEffect, useRef, useState } from "react";


const FormLead = () => {

    const [estados, setEstados] = useState([]); 
    const [cidades, setCidades] = useState([]); 
    const inputNome = useRef(null);
    const inputEmail = useRef(null);
    const inputTelefone = useRef(null);
    const inputEstado = useRef(null);
    const inputCidade = useRef(null);
    const inputComo = useRef(null);

    async function buscarEstados() {
        try {
            const req = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBynome")
            const res = await req.json();
            setEstados(res);
            
        } catch (error) {
            alert(error.messege)
            
        }
        
    }
    async function buscarCidades(estadoId) {
        try {
            const req = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios`)
            const res = await req.json();
            setCidades(res);
            
        } catch (error) {
            alert(error.messege)
            
        }
        
    }

    function enviar(){
        event.preventDefault();
        const lead = {
            nome: inputNome.current.value,
            email: inputEmail.current.value,
            telefone: inputTelefone.current.value,
            estado: inputEstado.current.value,
            cidade: inputCidade.current.value,
            como: inputComo.current.value,
        }
        console.log(lead);

    }

    useEffect(() => {buscarEstados()},[]);
    return ( 
        <div className="bg-marron-black-02 flex justify-between items-center">
            <div className="pl-33.75 pr-17.5">
                 <h6 className="text-marron-white-02 text-lg">Entre em Contato </h6>
                    <h2 className="text-marron-white text-[50px]">Abra sua Franquia </h2>
                    <p className="text-marron-white-02 mb-5">Preencha o formulário abaixo que entraremos em contato com você o mais rápido possível.</p>
                        <form action="">
                            <div className="bg-marron-white flex items-center rounded pl-4 gap-4 mb-3 ">
                            <BiSolidUserCircle className="w-10 h-10 bg-marron-medio fill-marron-black-02 rounded-full p-2 "/>
                            <input ref={inputNome} className="h-15 flex-1 bg-transparent outline-none " type="text" placeholder="Nome e Sobrenome" />
                            </div>
                            <div className="bg-marron-white flex items-center rounded pl-4 gap-4 mb-3 ">
                            <BiSolidEnvelope className="w-10 h-10 bg-marron-medio fill-marron-black-02  rounded-full p-2"/>
                            <input ref={inputEmail} className="h-15 flex-1 bg-transparent outline-none " type="email" placeholder="exemplo@gmail.com" />
                            </div>
                            <div className="bg-marron-white flex items-center rounded pl-4 gap-4 mb-3 ">
                            <IoLogoWhatsapp className="w-10 h-10 bg-marron-medio fill-marron-black-02 rounded-full p-2"/>
                            <input ref={inputTelefone} className="h-15 flex-1 bg-transparent outline-none " type="tel" placeholder="Telefone com DDD" />
                            </div>
                            <div className="flex justify-between *:flex-1 gap-1">
                            <div className="bg-marron-white flex items-center rounded pl-4 gap-4 mb-3 pr-4 ">
                            <BiSolidMap className="w-10 h-10 bg-marron-medio fill-marron-black-02 rounded-full p-2"/>
                            <select ref={inputEstado} className="h-15 flex-1 bg-transparent outline-none"
                            onChange={(e) => buscarCidades(e.target.value)}
                            >
                                <option disabled selected> UF</option>
                                {
                                    (estados || []).map(estado => (<option key={`e-${estado.id}`} value={estado.id}>{estado.nome}</option>))
                                }
                            </select>
                            </div>
                            <div className="bg-marron-white flex items-center rounded pl-4 gap-4 mb-3 pr-4 ">
                            <BiSolidHome className="w-10 h-10 bg-marron-medio fill-marron-black-02 rounded-full p-2"/>
                            <select ref={inputCidade} className="h-15 flex-1 bg-transparent focus:outline-0 disabled:cursor-not-allowed" disabled={cidades.length == 0}
                            
                            >
                                
                                <option disabled selected> Cidade</option>
                                {
                                    (cidades || []).map(cidade => (<option key={`c-${cidade.id}`} value={cidade.id}>{cidade.nome}</option>))
                                }
                                
                            </select>
                            </div>

                            </div>

                            <div className="bg-marron-white flex items-center rounded pl-4 gap-4 mb-3 pr-4 ">
                            <BiSolidCoffeeTogo className="w-10 h-10 bg-marron-medio fill-marron-black-02 rounded-full p-2"/>
                            <select ref={inputComo} className="h-15 flex-1 bg-transparent focus:outline-0">
                                <option disabled selected> Como conheceu a Tiamat</option>
                                <option>Facebook</option>
                                <option>Instagram</option>
                                <option>Google</option>
                                <option>Indicação</option>

                            </select>
                            </div>
                            <button className="w-full h-15 bg-marron-white-02 text-marron-black-02 font-semibold rounded duration-150 hover:bg-gold hover:text-marron-white cursor-pointer" type="submit">Enviar</button>
                        </form>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>

     );
}
 
export default FormLead;