import css from "./Dialogs.module.css"
import { NavLink } from 'react-router-dom';

function Dialogs(props) {
    return(
        <div className={css.dialogs}>
            <div className={css.dialogItems}>
                <div className={css.dialog + ' ' + css.active}>
                   <NavLink exact to="1">Dimych</NavLink> 
                </div>
                <div className={css.dialog}>
                    <NavLink to='2'>Andery</NavLink> 
                </div>
                    <div className={css.dialog}>
                <NavLink to='3'>Sveta</NavLink> 
                </div>
                    <div className={css.dialog}>
                <NavLink to='4'>Sasha</NavLink> 
                    </div>
                <div className={css.dialog}>
                    <NavLink to='5'>Victor</NavLink> 
                </div>
                <div className={css.dialog}>
                    <NavLink to='6'>Valera</NavLink> 
                </div>
            </div>
            <div className={css.messages}>
                    <div className={css.message}>hi</div>
                    <div className={css.message}>hi-hi</div>
                    <div className={css.message}>Yu-pi!</div>
            </div>
        </div>
    );
}

export default Dialogs;