import React, { useContext } from "react";
import '../style/Header.css';
import sun from '../image/sun.png';
import moon from '../image/moon.png';
import { AppContext } from "../store/AppContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()

    const { theme, setTheme } = useContext(AppContext);

    return (
        <div className={`div-header ${theme? '': 'dark'}`}>
            <div className={`div-header-logo ${theme? '': 'dark'}`}>
                <span className={`header-logo ${theme? '': 'dark'}`} onClick={() => {navigate('/')}}>GhostCoders</span>
            </div>
            <span className={`header-name ${theme? '': 'dark'}`}>Класификатор строительных ресурсов</span>
            <div className={`header-div-switch ${theme? '': 'dark'}`}>
                <img 
                    src={theme? sun: moon}
                    className={`header-switch ${theme ? '' : 'dark'}`} 
                    onClick={() => setTheme(!theme)}
                />
            </div>
        </div>
    );
}

export default Header;