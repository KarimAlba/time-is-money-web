import './style.css';
import { Outlet } from "react-router-dom";
import imgLogin from '../../assets/imgTimeIsMoney/imgLogin.svg';import { useEffect } from 'react';

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
