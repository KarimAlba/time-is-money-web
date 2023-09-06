import React, { useState } from "react"
import './style.css';
import logo from '../imgTimeIsMoney/logo.svg'
import { useNavigate } from "react-router-dom";
import burger from '../imgTimeIsMoney/hamburger.svg'
import crossBurgerMenu from '../imgTimeIsMoney/crossBurgerMenu.svg'
const Header = () => {
    const navigate = useNavigate();
    const toMain = () => {
        if (menuAcvtive) setMenuActive(false)
        navigate('/');
    }
    const toApplication = () => {
        if (menuAcvtive) setMenuActive(false)
        navigate('/Application');
    }
    const toPlagin = () => {
        if (menuAcvtive) setMenuActive(false)
        navigate('/Plugin');
    }
    const toInvestors = () => {
        if (menuAcvtive) setMenuActive(false)
        navigate('/investors');
    }
    const toLogin = () => {
        if (menuAcvtive) setMenuActive(false)
        navigate('/login');
    }


    const [menuAcvtive, setMenuActive] = useState<boolean>(false)
    return (
        <div className="container-header">
            {menuAcvtive
                ? (<div className="modalBurger">
                    <img className="header-burger" src={crossBurgerMenu} onClick={() => setMenuActive(false)}/>
                    <div className="menuBurger">
                        <button onClick={toMain}>Главная </button>
                        <button onClick={toApplication}>Приложение</button>
                        <button onClick={toPlagin}>Плагин</button>
                        <button onClick={toInvestors}>Инвесторам</button>
                        <button onClick={toLogin}>Вход </button>
                    </div>
                </div>)

                : <img className="header-burger" src={burger} onClick={() => setMenuActive(true)} />
            }

            <div className="container-img">
                <img src={logo} />
            </div>
            <div className="button-container">
                <button onClick={toMain}>Главная </button>
                <button onClick={toApplication}>Приложение</button>
                <button onClick={toPlagin}>Плагин</button>
                <button onClick={toInvestors}>Инвесторам</button>
                <button onClick={toLogin}>Вход </button>
            </div>
        </div>
    )
}
export default Header;