import css from './Navbar.module.css'
function Navbar() {
    return (
        <nav className={css.nav}>
            <div className="item">
                <a href="#"> Profile </a>
            </div>
            <div>
                <a href="#"> Messages </a>
            </div>
            <div>
                <a href="#"> News </a>
            </div>
            <div>
                <a href="#"> Music </a>
            </div>
            <div>
                <a href="#"> Settings </a>
            </div>
        </nav>
    );
}

export default Navbar;