import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav className="navbar">
            <h1>RctBlg</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" id='link'>New Blog</Link>
            </div>
        </nav>
    );
}

export default NavBar;