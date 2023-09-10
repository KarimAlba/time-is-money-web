import './style.css';
import { Outlet } from "react-router-dom";
import imgLogin from '../../assets/imgTimeIsMoney/imgLogin.svg';

const Login = () => {
    return (

        <div className="ContainerLogin">
            <img src={imgLogin} />
            <div className="form-login">
                <Outlet />
            </div>
        </div>
    )
}

export default Login;
