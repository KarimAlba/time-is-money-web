import { useState, useEffect } from "react"
import './style.css';
import { useLocation, useNavigate } from "react-router-dom";
import PhysicalAccountAPI from "../../../api/PhysicalAccountAPI";
import IUserAuth from "../../../models/request/IUserAuth";
import IEntityResponse from "../../../models/response/IEntityResponse";
import ITokenReponse from "../../../models/response/ITokenResponse";
import ErrorPopup from "../../../views/ErrorPopup/ErrorPopUp";

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
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isErrorPopupVisible, setIsErrorPopupVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();


    const isEmailValid = (email: string) => {
        const emailRegex = /@../;
        return emailRegex.test(email);
    };

    const isPasswordValid = (password: string) => {
        const passwordRegex = /(?=.*[0-9]){9,512}/;
        return passwordRegex.test(password);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const email = e.target.value;
        setUserEmail(email);

        if (!isEmailValid(email)) {
            setEmailError("Некорректный email");
        } else {
            setEmailError("");
        }
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const password = e.target.value;
        setUserPassword(password);

        if (!isPasswordValid(password)) {
            setPasswordError(
                "Пароль должен содержать хотя бы 8 символов, включая цифры, буквы верхнего и нижнего регистра"
            );
        } else {
            setPasswordError("");
        }
    };

    const sendRequest = (user: IUserAuth) => {
        PhysicalAccountAPI.clientAutorization(user)
            .then(response => {
                if (response.status < 400) {
                    localStorage.setItem('token', response.data.tokenResponse.token);
                    if (response.data.entity.inn) {
                        fillOrganizationLocalStorage(response.data.entity);
                    } else {
                        localStorage.setItem('id', String(response.data.entity.id));
                    }
                    navigate('/user');
                } else {
                    setErrorMessage("Некорректный email или пароль");
                    setIsErrorPopupVisible(true);
                }
            })
            .catch(error => console.log(error));
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
                        maxLength={254}
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
                    <ErrorPopup error={errorMessage} onClose={() => setIsErrorPopupVisible(false)} />
                )}
                <ModalRegister isVisible={isVisible} />

            </div>
        </>
    );
};

export default LoginForm;