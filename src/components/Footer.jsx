import logoGracom from "../assets/Group 5.png"
import logo from "../assets/Logo_Horizontal_01.png";
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoYoutube } from "react-icons/bi";
const Footer = () => {
    return ( 
        <div className="bg-marron-black text-marron-white px-33.75 py-15 " >
            <div className="flex justify-between border-b border-marron-white-02 pb-12.5">
                            <img src={logo} alt="tiamate Coffee" />
                 <nav className="flex items-center gap-13.75 *:hover:text-yellow *:duration-200">
                            
                            <a href="/">home</a>
                            <a href="/nosso-cafe">nosso-café</a>
                            <a href="/franquia">franquia</a>
                            <a href="/contato">contato</a>
                            <a href="/cardapio">cardápio</a>
                        </nav>
            </div>
            <div className=" flex justify-between items-center pt-10">
            <div className=" flex items-center">
                <h6>Curta e <br /> Compartilhe</h6>
                <div className="flex gap-4 ml-10 *:w-10 *:h-10 *:rounded-full *:bg-marron-white-02 *:flex *:justify-center *:items-center *:text-xl *:text-marron-black *:hover:bg-gold  *:duration-200 *:text-2xl ">
                <a href="">< BiLogoFacebook /></a>
                <a href="">< BiLogoInstagram/></a>
                <a href="">< BiLogoYoutube/></a>
                <a href="">< BiLogoLinkedin/></a>
                </div>
                
            </div>
            <div className=" flex items-center gap-8 ">
                <h6 className="font-semibold text-marron-medio">© 2021 Tiamate - Todos os Direitos Reservados</h6>
                <img src={logoGracom} alt="" />
            </div>
            </div>
        </div>
     );
}
 
export default Footer;
