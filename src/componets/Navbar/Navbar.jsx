import css from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={css.nav}>
            <div>
                <a href="/profile"> Profile </a>
            </div>
            <div>
                <a href="/dialogs"> Messages </a>
            </div>
            <div>
                <a> News </a>
            </div>
            <div>
                <a> Music </a>
            </div>
            <div>
                <a> Settings </a>
            </div>
        </nav>
    );
}

export default Navbar;