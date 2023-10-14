import './style.css';
import { useEffect } from 'react';
import { Outlet } from "react-router-dom";
import imgLogin from '../../../assets/imgTimeIsMoney/imgLogin.svg';


interface LoginPropsTypes{
    handleCurrentBtnChange: Function;
}

const Login = (props: LoginPropsTypes) => {
    const { handleCurrentBtnChange } = props;

    useEffect(() => {
        handleCurrentBtnChange('Вход')
    }, []);
    
    return (
        <div className="ContainerLogin">
            <img src={imgLogin} className='laptop-img' />
            <div className="form-login">
                <Outlet />
            </div>
        </div>
    )
}

export default Login;
