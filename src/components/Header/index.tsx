import { useState } from "react"
import './style.css';
import logo from '../../assets/imgTimeIsMoney/logo.svg'
import { useNavigate } from "react-router-dom";
import burger from '../../assets/imgTimeIsMoney/hamburger.svg'
import crossBurgerMenu from '../../assets/imgTimeIsMoney/crossBurgerMenu.svg'

interface HeaderPropsTypes {
    handleIsOpenFooter: Function
}
const Header = (props: HeaderPropsTypes) => {
    const {handleIsOpenFooter} = props;

    const navigate = useNavigate();
    const toMain = () => {
        handleIsOpenFooter()
        if (menuAcvtive) setMenuActive(false)
        navigate('/');
    }
    const toApplication = () => {
        handleIsOpenFooter()
        if (menuAcvtive) setMenuActive(false)
        navigate('/Application');
    }
    const toPlagin = () => {
        handleIsOpenFooter()
        if (menuAcvtive) setMenuActive(false)
        navigate('/Plugin');
    }
    const toInvestors = () => {
        handleIsOpenFooter()
        if (menuAcvtive) setMenuActive(false)
        navigate('/investors');
    }
    const toLogin = () => {
        handleIsOpenFooter()
        if (menuAcvtive) setMenuActive(false)
        navigate('/login');
    }

    const [menuAcvtive, setMenuActive] = useState<boolean>(false)

    return (
        <div className="container-header">
            {menuAcvtive
                ? (<div className="modalBurger">
                    <img className="header-burger" src={crossBurgerMenu} onClick={() => setMenuActive(false)} />
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
