import React, { useState } from "react";
import './style.css';
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import imgLogin from '../imgTimeIsMoney/imgLogin.svg'
import { isVisible } from "@testing-library/user-event/dist/utils";






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