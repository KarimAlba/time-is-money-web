import React from "react"
import './style.css';
import logo from '../imgTimeIsMoney/logo.svg'
import { useNavigate } from "react-router-dom";
import burger from '../imgTimeIsMoney/hamburger.svg'
const Header = () => {
    const navigate = useNavigate();
    const toMain = () => navigate('/main');
    const toApplication = () => navigate('/Application');
    const toPlagin = () => navigate('/Plugin')
    const toInvestors = () => navigate('/investors')
    const toLogin = () => navigate('/login')


    return (
        <div className="container-header">
            <img className="header-burger" src={burger}/>
            <div className="container-img">
                <img src={logo} />
            </div>
            <div className="button-container">
                <button onClick={toMain}>Главная </button>
                <button onClick={toApplication}>Приложение</button>
                <button onClick={toPlagin}>Плагин</button>
                <button  onClick={toInvestors}>Инвесторам</button>
                <button  onClick={toLogin}>Вход </button>
            </div>
        </div>
    )
}
export default Header;