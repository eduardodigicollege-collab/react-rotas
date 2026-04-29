import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoYoutube } from "react-icons/bi";
import { Links } from "react-router";

const Banner = ({texto,imagem,aDireita,links}) => {
    return ( 
        <div className="h-125 relative overflow-hidden">
            <img className="w-full object-contain block"
             src= {imagem} alt="" />
             <div className={`absolute top-1/2 -translate-y-1/2 ${aDireita ? 'right-33.75' : 'left-33.75'}`}> 
                <h1 className=" font-bold text-[55px] text-marron-white w-137">{texto}</h1>
                {
                    links && (
                        <div className="flex gap-4 ml-10 *:w-10 *:h-10 *:rounded-full *:bg-marron-white-02 *:flex *:justify-center *:items-center *:text-xl *:text-marron-black *:hover:bg-gold *:duration-200 *:text-2xl ">
                                <a href="">< BiLogoFacebook /></a>
                                <a href="">< BiLogoInstagram/></a>
                                <a href="">< BiLogoYoutube/></a>
                                <a href="">< BiLogoLinkedin/></a>
                                </div>

                    )
                }
                 
             </div>
        </div>

     );
}
 
export default Banner;

