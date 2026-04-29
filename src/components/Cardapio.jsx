import { BiArrowBack } from "react-icons/bi"
import tiamatino1 from "../assets/Bebidas_03 2.png"
import tiamatino2 from "../assets/Bebidas_05 1.png"
import tiamatino3 from "../assets/Bebidas_06 2.png"
import tiamatino4 from "../assets/Bebidas_07 2.png"
import { useState } from "react"

const Cardapio = () => {
    const [click, setClick] = useState(0);
    function proximo() {
        if (click < 1) {
            setClick(click + 1)

        }

    }
    function anterior() {
        if (click > 0) {
            setClick(click - 1)

        }
    }
    return (
        <div className="py-33.75 bg-marron-white">
            <h6 className="text-marron-black-02 text-lg text-center">confira nosso </h6>
            <h2 className="text-marron-medio text-[50px] text-center leading-14 font-bold mb-14">Cardápio </h2>
            <div className="flex items-center justify-center">
                <BiArrowBack onClick={anterior} className="text-3xl cursor-pointer hover:text-marron-medio duration-200" />
                <div className="overflow-hidden w-217.5  relative selection:bg-transparent">
                    <div style={{ left: `-${290 * click}px ` }} className=" duration-200 flex *:w-72.5 relative w-290">
                        <img src={tiamatino1} alt="" />
                        <img src={tiamatino2} alt="" />
                        <img src={tiamatino3} alt="" />
                        <img src={tiamatino4} alt="" />
                    </div>
                </div>
                <BiArrowBack onClick={proximo} className="text-3xl rotate-y-180 cursor-pointer hover:text-marron-medio duration-200 " />
            </div>
            <div className="flex justify-center">
            <a className="leading-14 rounded-lg bg-marron-white-02 px-24 font-bold" href="">Ver mais</a>

            </div>

        </div>

    );
}

export default Cardapio;

