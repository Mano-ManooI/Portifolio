import { Link } from "react-router-dom";

import Header from "../components/Header";

function NotFound() {
    return (
        <div>
            <Header />
            <main className="NotFound">
                <h1>404 - Página Não Encontrada</h1>
                <p>A página que você está procurando não existe.</p>
                <button><Link to="/">Recarregar</Link></button>
            </main>
        </div>
    );
};

export default NotFound;