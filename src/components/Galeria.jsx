import galeria1 from "../assets/Rectangle 6.png"
import galeria2 from "../assets/Rectangle 10.png"
import galeria3 from "../assets/Rectangle 11.png"
import galeria4 from "../assets/Rectangle 16.png"
import galeria5 from "../assets/Rectangle 17.png"
import galeria6 from "../assets/Rectangle 18.png"
import logo from "../assets/Vector.svg"


const Galeria = () => {
    return ( 
        <div className="p-33.75 relative">
            <div className="flex justify-between items-center">
                <div>
                    <h6 className="text-marron-black-02 text-lg">Para Você e seus amigos </h6>
                    <h2 className="text-marron-medio text-[50px]">Ambiente agradável </h2>
                </div>
                <div className="flex items-center gap-5">
                    <h2>veja mais</h2>
                    <img src={logo} alt="" />
                </div>

            </div>
            <div className="grid grid-cols-3 *:w-full mt-15">
                <img src={galeria1} alt="" />
                <img src={galeria2} alt="" />
                <img src={galeria3} alt="" />
                <img src={galeria4} alt="" />
                <img src={galeria6} alt="" />
                <img src={galeria5} alt="" />
            </div>
            <div className="h-55 bg-marron-white absolute bottom-0 w-full left-0 -z-10"> </div>
        </div>
     );
}
 
export default Galeria;