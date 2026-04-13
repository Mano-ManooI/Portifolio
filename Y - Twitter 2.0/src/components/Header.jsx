import { Link } from "react-router-dom";

import { RiHome2Fill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

function Header(){
    return(
        <header>
            <img src="./public/icon.svg" draggable={false} id="logo" />
            <nav>
                <Link to="/"><RiHome2Fill /> Início</Link>
                <Link to="/Explore"> <IoSearch /> Explorar</Link>
                <Link to="/Notifications"> <FaBell /> Notificações</Link>
                <Link to="/Profile"> <IoPerson /> Perfil</Link>
            </nav>
        </header>
    );
};

export default Header;