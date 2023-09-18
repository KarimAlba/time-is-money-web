import './style.css';
import { useState, useEffect } from "react"
import SuccessPopup from "../../ui/SuccessPopup/index";
import ErrorPopup from "../../ui/ErrorPopup/ErrorPopUp";
import IUserAuth from "../../../models/request/IUserAuth";
import { useLocation, useNavigate } from "react-router-dom";
import PhysicalAccountAPI from "../../../api/PhysicalAccountAPI";
import axios from 'axios';

interface AuthorizationPropsTypes {
    showModal: Function;
}

interface ModalRegisterPropsTypes {
    isVisible: Boolean;
}

function ModalRegister(props: ModalRegisterPropsTypes) {

    const location = useLocation();
    const navigate = useNavigate();
    const toPhysicalPerson = () => navigate('physicalPerson');
    const toEntity = () => navigate('entity');

    const { isVisible } = props;

    return (
        <>
            {isVisible
                ? (<div className=" overlay modal-choice-registration-Container">
                    <div className='modal-choice-registration'>
                        <p>Вы регистрируетесь как:</p>
                        <span onClick={toPhysicalPerson}>
                            ФИЗИЧЕСКОЕ ЛИЦО
                        </span>
                        <span onClick={toEntity}>
                            ЮРИДИЧЕСКОЕ ЛИЦО
                        </span>
                    </div>
                </div>)
                : null
            }
        </>
    )
}

const LoginForm = (props: AuthorizationPropsTypes) => {
    const { showModal } = props;
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [userEmail, setUserEmail] = useState<string>("");
    const [userPassword, setUserPassword] = useState<string>("");
    const [isErrorPopupVisible, setIsErrorPopupVisible] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [isSuccessPopupVisible, setIsSuccessPopupVisible] = useState<boolean>(false);

    const navigate = useNavigate();


    const isEmailValid = (email: string) => {
        const emailRegex = /@../;
        return emailRegex.test(email);
    };

    const isPasswordValid = (password: string) => {
        const passwordRegex = /(?=.*[0-9]){9,512}/;
        return passwordRegex.test(password);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setUserEmail(e.target.value);

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setUserPassword(e.target.value);

    const sendRequest = (user: IUserAuth) => {
        PhysicalAccountAPI.clientAutorization(user)
            .then(response => {
                localStorage.clear();
                setIsSuccessPopupVisible(true);
                localStorage.setItem('token', response.data.tokenResponse.token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.tokenResponse.token}`
                if (response.data.entity.inn) {
                    fillOrganizationLocalStorage(response.data.entity);
                } else {
                    localStorage.setItem('id', String(response.data.entity.id));
                }
                setTimeout(() => {
                    navigate('/user');
                }, 1000);
            })
            .catch(error => {
                setErrorMessage("Некорректный email или пароль");
                setIsErrorPopupVisible(true);
            });
    }

    const handleComeClick = () => {
        if (!isEmailValid(userEmail) || !isPasswordValid(userPassword)) {
            setErrorMessage("Некорректный email или пароль");
            setIsErrorPopupVisible(true);
        } else {
            const user = {
                email: userEmail,
                password: userPassword,
                workStationOwner: true
            }
            sendRequest(user);
        }
    };

    const fillOrganizationLocalStorage = (entity: any) => {
        localStorage.setItem('organizationName', entity.organizationName);
        localStorage.setItem('organizationAddress', entity.organizationAddress);
        localStorage.setItem('id', String(entity.userId));
        localStorage.setItem('inn', entity.inn);
        localStorage.setItem('kpp', entity.kpp);
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/user');
        }
    }, []);

    return (
        <>
            <div className="block-Login1">
                <h3 className="styleH3">ВХОД</h3>
                <div className="animateContainer">
                    <input
                        type="text"
                        id="id_email"
                        required
                        onInput={handleEmailChange}
                    />
                    <label htmlFor="id_email">e-mail:</label>

                    <input
                        type="password"
                        id="pass"
                        required
                        onInput={handlePasswordChange}
                    />
                    <label htmlFor="pass">пароль:</label>
                </div>

                <button onClick={handleComeClick}>ВОЙТИ</button>

                <span
                    className="passwordRecovery"
                    onClick={() => {
                        showModal();
                    }}
                >
                    Забыли пароль?
                </span>
            </div>
            <div>
                <span
                    onClick={() => {
                        setIsVisible(!isVisible);
                    }}
                >
                    Нет аккаунта? Зарегистрируйтесь!
                </span>
                {isErrorPopupVisible && (
                    <ErrorPopup 
                        error={errorMessage} 
                        onClose={() => setIsErrorPopupVisible(false)}
                    />
                )}
                {isSuccessPopupVisible
                    ? <SuccessPopup 
                        message={'Успешно авторизованы'} 
                        onClose={() => setIsSuccessPopupVisible(false)} 
                    />
                    : null
                }
                <ModalRegister isVisible={isVisible} />

            </div>
        </>
    );
};

export default LoginForm;