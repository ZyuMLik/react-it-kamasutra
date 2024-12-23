import { NavLink } from 'react-router-dom';
import css from './Navbar.module.css'

const setActive = ({isActive}) => isActive ? css.active : css.nav.a;

function Navbar() {
    return (
        <nav className={css.nav}>
            <div>
                <NavLink to="/profile" className={setActive}> Profile </NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" className={setActive}> Messages </NavLink>
            </div>
            <div>
                <NavLink to="/news" className={setActive}> News </NavLink>
            </div>
            <div>
                <NavLink to="/music" className={setActive}> Music </NavLink>
            </div>
            <div>
                <NavLink to="/settings" className={setActive}> Settings </NavLink>
            </div>
        </nav>
    );
};


export default Navbar;