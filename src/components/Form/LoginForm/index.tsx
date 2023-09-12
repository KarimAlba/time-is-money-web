import { useState } from "react"
import './style.css';
import { useLocation, useNavigate } from "react-router-dom";
import PhysicalAccountAPI from "../../../api/PhysicalAccountAPI";
import IUserAuth from "../../../models/request/IUserAuth";

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
                    console.log(response);
                }
            })
            .catch(error => console.log(error));
    }

    const handleComeCLick = () => {
        if (!userEmail && !userPassword) {
            return
        } else {
            const user = {
                email: "cap212@mail.ru",
                password: "capAmerica1",
                workStationOwner: true
            }
            sendRequest(user);
        }
    }

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
