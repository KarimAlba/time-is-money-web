import './style.css';
import PhysicalAccountAPI from '../../../api/PhysicalAccountAPI';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
    const [goodValidation, setGoodValidation] = useState<boolean>(false);

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
                console.log(response);
                if (response.status < 400) {
                    navigate('/login')
                }
            })
            .catch(error => console.log(error))
    }

    // const validation = () => {
    //     if (!userSurname && !userName && !userPatronymic 
    //         && !userEmail && !userPassword && !userConfirmEmail
    //         && !userConfirmPassword
    //     ) {
    //         setGoodValidation(false);
    //     } else {
    //         setGoodValidation(true);
    //     }
    // }

    const prepareUser = () => {
        if (!userSurname && !userName && !userPatronymic 
            && !userEmail && !userPassword && !userConfirmEmail
            && !userConfirmPassword
        ) {
            return 
        } else {
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
        const user = prepareUser();
        console.log(user)
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
                    type="passwird"
                    id="confirmation-pass"
                    onInput={handleConfirmPasswordChange}
                />
                <label htmlFor="confirmation-pass">Подтвердите пароль</label>

            </div>

            <button onClick={handleRegClick}>
                РЕГИСТРАЦИЯ
            </button>
        </div>
    )
}

export default PhysicalPerson;
