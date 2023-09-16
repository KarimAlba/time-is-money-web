import { useState, useEffect } from "react"
import './style.css';
import { useLocation, useNavigate } from "react-router-dom";
import PhysicalAccountAPI from "../../../api/PhysicalAccountAPI";
import IUserAuth from "../../../models/request/IUserAuth";
import IEntityResponse from "../../../models/response/IEntityResponse";
import ITokenReponse from "../../../models/response/ITokenResponse";

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
    const [userEmail, setUserEmail] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');

    const navigate = useNavigate();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserEmail(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserPassword(e.target.value);
    }

    const sendRequest = (user: IUserAuth) => {
        PhysicalAccountAPI.clientAutorization(user)
            .then(response => {
                if(response.status < 400) {
                    navigate('/user');
                    localStorage.setItem('token', response.data.tokenResponse.token);
                    if (response.data.entity.inn) {
                        fillOrganizationLocalStorage(response.data.entity);
                    } else {
                        localStorage.setItem('id', String(response.data.entity.id));
                    }
                }
            })
            .catch(error => console.log(error));
    }

    const handleComeCLick = () => {
        if (!userEmail && !userPassword) {
            return
        } else {
            const user = {
                email: userEmail,
                password: userPassword,
                workStationOwner: true
            }
            sendRequest(user);
        }
    }

    const fillOrganizationLocalStorage = (entity: any) => {
        localStorage.setItem('organizationName', entity.organizationName);
        localStorage.setItem('organizationAddress', entity.organizationAddress);
        localStorage.setItem('id', String(entity.userId));
        localStorage.setItem('inn', entity.inn);
        localStorage.setItem('kpp', String(entity.kpp));
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/user');
        }
    }, []);

    return (
        <>
            <div className="block-Login1">
                <h3 className="styleH3">
                    ВХОД
                </h3>
                <div className="animateContainer">
                    <input
                        type='text'
                        id='id_email'
                        required
                        maxLength={254}
                        onInput={handleEmailChange}
                    />
                    <label htmlFor="id_email">e-mail:</label>

                    <input
                        type='password'
                        id='pass'
                        required
                        onInput={handlePasswordChange}
                    />
                    <label htmlFor="pass">пароль:</label>

                </div>

                <button onClick={handleComeCLick}>
                    ВОЙТИ
                </button>

                <span className="passwordRecovery"
                    onClick={() => {
                        showModal()
                    }}
                >
                    Забыли пароль?
                </span>
            </div>
            <div>
                <span onClick={() => {
                    setIsVisible(!isVisible);
                }}>
                    Нет аккаунта? Зарегистрируйтесь!
                </span>
                <ModalRegister isVisible={isVisible} />
            </div>

        </>

    )
}

export default LoginForm;
