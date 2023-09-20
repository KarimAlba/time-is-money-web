import './style.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SuccessPopup from "../../ui/SuccessPopup/index";
import ErrorPopup from '../../ui/ErrorPopup/ErrorPopUp';
import PhysicalAccountAPI from '../../../api/PhysicalAccountAPI';
import IPhysicalRegistrationRequest from '../../../models/request/IPhysicalRegistrationRequest';

const PhysicalPerson = () => {
    const navigate = useNavigate();
    const [userSurname, setUserSurname] = useState<string>('');
    const [userName, setUserName] = useState<string>('');
    const [userPatronymic, setUserPatronymic] = useState<string>('');
    const [userEmail, setUserEmail] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');
    const [userConfirmEmail, setUserConfirmEmail] = useState<string>('');
    const [userConfirmPassword, setUserConfirmPassword] = useState<string>('');

    const [isErrorPopupVisible, setIsErrorPopupVisible] = useState<boolean>(false);
    const [errorMessages, setErrorMessages] = useState<string[] | []>([]);

    const [isSuccessPopupVisible, setIsSuccessPopupVisible] = useState<boolean>(false);

    const isEmailValid = (email: string) => {
        const emailRegex = /@../;
        return emailRegex.test(email);
    };

    const isPasswordValid = (password: string) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{8,}/;
        return passwordRegex.test(password);
    };

    const handleSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserSurname(e.target.value);
    }

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    }

    const handlePatronymicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserPatronymic(e.target.value);
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserEmail(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserPassword(e.target.value);
    }

    const handleConfirmEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserConfirmEmail(e.target.value);
    }

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserConfirmPassword(e.target.value);
    }

    const sendRequest = (user: IPhysicalRegistrationRequest) => {
        PhysicalAccountAPI.registration(user)
            .then(response => {
                localStorage.clear();
                setIsSuccessPopupVisible(true);
                setTimeout(() => {
                    navigate('/login');
                }, 1000)
            })
            .catch(error => {
                setErrorMessages(["Проверьте правильность заполненных полей"]);
                setIsErrorPopupVisible(true);
            })
    }

    const validation = () => {
        const copy = [];

        if (!userName) {
            copy.push('Поле "Имя" не должно быть пустым')
        }

        if (!userSurname) {
            copy.push('Поле "Фамилия" не должно быть пустым')
        }

        if (!userPatronymic) {
            copy.push('Поле "Отчество" не должно быть пустым')
        }

        if (!isEmailValid(userEmail)) {
            copy.push('Некорректный email')
        }

        if (userEmail !== userConfirmEmail) {
            copy.push('Адреса почты не совпадают')
        }

        if (!isPasswordValid(userPassword)) {
            copy.push(
                "Пароль должен содержать не менее 8 символов, одну строчную и прописную буквы английского алфавита и спец символы"
            );
        } 

        if (userPassword !== userConfirmPassword) {
            copy.push('Пароли не совпадают')
        }

        setErrorMessages(copy);
        return copy;
    }

    const prepareUser = () => {
        const errors = validation();
        if (errors.length > 0) {
            setIsErrorPopupVisible(true);
            return 0;
        } else {
            setIsErrorPopupVisible(false);
            const user = {
                lastname: userSurname,
                name: userName,
                patronymic: userPatronymic,
                email: userEmail,
                password: userPassword,
                confirmEmail: userConfirmEmail,
                confirmPassword: userConfirmPassword
            }

            return user;
        }
    }

    const handleRegClick = () => {
        localStorage.clear();
        const user = prepareUser();
        if (user) sendRequest(user);
    }
    
    return (
        <div className="form-register-physical-pesrson">
            <div className="physical-pesrson-block1">
                <input
                    type="text"
                    id="surname"
                    onInput={handleSurnameChange}
                />
                <label htmlFor="surname">Фамилия</label>

                <input
                    type="text"
                    id="name"
                    onInput={handleNameChange}
                />
                <label htmlFor="name">Имя</label>
                
                <input
                    type="text"
                    id="patronymic"
                    onInput={handlePatronymicChange}
                />
                <label htmlFor="patronymic">Отчество</label>

                <input
                    type="text"
                    id="email"
                    onInput={handleEmailChange}
                />
                <label htmlFor="email">e-mail</label>

                <input
                    type="text"
                    id="confirmation-email"
                    onInput={handleConfirmEmailChange}
                />
                <label htmlFor="confirmation-email">Подтвердите e-mail</label>

                <input
                    type="password"
                    id="pass"
                    onInput={handlePasswordChange}
                />
                <label htmlFor="pass">Создайте пароль</label>

                <input
                    type="password"
                    id="confirmation-pass"
                    onInput={handleConfirmPasswordChange}
                />
                <label htmlFor="confirmation-pass">Подтвердите пароль</label>

            </div>

            <button 
                onClick={handleRegClick}
                className='reg-btn'
            >
                РЕГИСТРАЦИЯ
            </button>

            {isErrorPopupVisible && (
                <ErrorPopup 
                    errorArray={errorMessages} 
                    onClose={() => setIsErrorPopupVisible(false)} 
                />
            )}
            {isSuccessPopupVisible
                ? <SuccessPopup 
                    message={'Успешно зарегистрированы'} 
                    onClose={() => setIsSuccessPopupVisible(false)} 
                />
                : null
            }
        </div>
    )
}

export default PhysicalPerson;
