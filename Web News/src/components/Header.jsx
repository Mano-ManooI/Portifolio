import { CiSearch } from "react-icons/ci";

function Header(){
    return(
       <header>
            <div id="topBar">
                <p>Sábado, 18 de Abril de 2026</p>
                <div>
                    <button id="logIn">Entrar</button>
                    <button id="signUp">Assine</button>
                </div>
            </div>
            <div id="mainHeader">
                <h1><b>Web</b>News</h1>
                <section>
                    <span><CiSearch /> <p>Buscar Notícias</p></span>
                </section>
            </div>
            <nav>
                <ul>
                    <li><button>Brasil</button></li>
                    <li><button>Mundo</button></li>
                    <li><button>Economia</button></li>
                    <li><button>Tecnologia</button></li>
                    <li><button>Esporte</button></li>
                    <li><button>Cultura</button></li>
                </ul>
            </nav>
       </header>
    );
};

export default Header;