import { Link } from 'react-router-dom';

const NavPrimary = () => {
    return (
        <nav className="nav-primary">
            <div className="nav-primary-inner">
                <ul className="nav">
                    <li className="main"><Link className="main-word" to="/#">Studentams</Link></li>
                    <li className="main"><Link className="main-word" to="./#">Verslui</Link></li>
                    <li className="main"><Link className="main-word" to="/ProgramsPage">Programos</Link></li>
                    <li className="main"><Link className="main-word" to="./#">Apie mus</Link></li>
                    <li className="main"><Link className="main-word" to="/NewsPage">Naujienos</Link></li>
                    <li className="main"><Link className="main-word" to="./#">IT testas</Link></li>
                    <li className="main"><Link className="main-word" to="./#">Kontaktai</Link></li>
                    <li className="main"><Link className="main-word" to="./#">EN</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavPrimary