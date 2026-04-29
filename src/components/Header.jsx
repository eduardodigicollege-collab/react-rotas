import logo from "../assets/Logo_Horizontal_01.png"

const Header = () => {
    return ( 
        <header className="bg-marron-black text-marron-white px-33.75 py-7.5 flex justify-between text-lg items-center">
        <nav className="flex items-center gap-13.75 *:hover:text-yellow *:duration-200 ">
            
            <img src={logo} alt="tiamate Coffee" />
            <a href="/">home</a>
            <a href="/nosso-cafe">nosso-café</a>
            <a href="/franquia">franquia</a>
            <a href="/contato">contato</a>
            <a href="/cardapio">cardápio</a>
        </nav>
        <a href="" className="bg-marron-white-02 text-marron-black-02 font-semibold py-4 px-6 rounded-md hover:bg-gold duration-200"  > Seja um Franqueado</a>
        </header>

     );
}
 
export default Header;