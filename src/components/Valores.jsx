import img1 from "../assets/Group 90.png"
import img2 from "../assets/Group 91.png"
import img3 from "../assets/Group 92.png"
import img4 from "../assets/Group 111.png"
import { useState } from "react"

const Valores = () => {
    const [mostrarVideo, setMostrarVideo] = useState(false);

    return ( 
        <div className="p-33.75">
            <div className="flex gap-40 *:flex-1">
                <div>
                    <div className="flex items-center gap-5">
                    <img src={img1} alt="" />
                    <h6 className="text-marron-medio text-xl font-bold">Missão</h6>
                    </div>
                    <p className="text-marron-black-02 mt-5">Fornecer soluções, produtos e serviços
de maneira clara e objetiva construindo relacionamentos duradouros com a comunidade, parceiros, colaboradores
e sócios, através da criação de valores.</p>
                </div>
                <div>
                    <div className="flex items-center gap-5">
                     <img src={img2} alt="" />
                     <h6 className="text-marron-medio text-xl font-bold">Visão</h6>
                    </div>
                    <p className="text-marron-black-02 mt-5">Ser referência em inovação e estimular exponencialmente a nossa gestão de maneira diversificada, próspera e justa. Com devoção e disciplina em todas as nossas operações de negócio.</p>
                </div>
                <div>
                    <div className="flex items-center gap-5">
                     <img src={img3} alt="" />
                     <h6 className="text-marron-medio text-xl font-bold">Valores</h6>
                    </div>
                    <p className="text-marron-black-02 mt-5">Amor ao Trabalho - Organização - Disciplina - Inovação - Busca Contínua Pela Qualidade - Foco no Cliente</p>
                </div>
            </div>
        <div className="mt-33.75">
            <h2 className="text-[50px] leading-15 text-marron-medio font-bold">Coisas boas acontecem àqueles <br />
que gostam de café</h2>
<img onClick={() => setMostrarVideo(true)} src={img4} alt="" className="w-full mt-20 rounded-2xl cursor-pointer"/>

        <div className={`w-full h-screen bg-black/85 fixed top-0 left-0  justify-center items-center flex ${mostrarVideo ? "opacity-100 visible" : "opacity-0 invisible"}`}>
            <iframe width="1100" height="600" src="https://www.youtube.com/embed/RWCP7z8ufiA?si=qNdCBRI3nZUOnmDJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        </div>

        </div>



     );
}
 
export default Valores;