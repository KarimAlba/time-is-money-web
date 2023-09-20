import './style.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SuccessPopup from "../../ui/SuccessPopup/index";
import ErrorPopup from '../../ui/ErrorPopup/ErrorPopUp';
import OrganizationAPI from '../../../api/OrganizationAPI';
import IOrganizationRequest from '../../../models/request/IOrganizationRequest';

const Entity = () => {
    const [orgName, setOrgName] = useState<string>('');
    const [orgAddress, setOrgAddress] = useState<string>('');
    const [orgINN, setOrgINN] = useState<string>('');
    const [orgKPP, setOrgKPP] = useState<string>('');
    const [orgDirSurname, setOrgDirSurname] = useState<string>('');
    const [orgDirName, setOrgDirName] = useState<string>('');
    const [orgDirPatronymic, setOrgDirPatronymic] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [confirmEmail, setConfirmEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const [isErrorPopupVisible, setIsErrorPopupVisible] = useState<boolean>(false);
    const [errorMessages, setErrorMessages] = useState<string[] | []>([]);

    const [isSuccessPopupVisible, setIsSuccessPopupVisible] = useState<boolean>(false);

    const navigate = useNavigate();

    const isEmailValid = (email: string) => {
        const emailRegex = /@../;
        return emailRegex.test(email);
    };

    const isPasswordValid = (password: string) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{8,}/;
        return passwordRegex.test(password);
    };

    const handleOrgNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrgName(e.target.value);
    }

    const handleOrgAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrgAddress(e.target.value);
    }

    const handleOrgINNChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrgINN(e.target.value);
    }

    const handleOrgKPPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrgKPP(e.target.value);
    }

    const handleOrgSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrgDirSurname(e.target.value);
    }

    const handleOrgDirName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrgDirName(e.target.value);
    }

    const handleOrgDirPatronymic = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrgDirPatronymic(e.target.value);
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleConfirmEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmEmail(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    }

    const sendRequest = (org: IOrganizationRequest) => {
        OrganizationAPI.registration(org)
            .then(response => {
                setIsSuccessPopupVisible(true);
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
                localStorage.clear();
            })
            .catch(error => {
                setErrorMessages(["Проверьте правильность заполненных полей"]);
                setIsErrorPopupVisible(true);
            })
    }

    const validation = () => {
        const copy = [];

        if (!orgName) {
            copy.push('Поле "Наименование организации" не должно быть пустым')
        }

        if (!orgAddress) {
            copy.push('Поле "Адрес" не должно быть пустым')
        }

        if (orgINN.length !== 10 || String(+orgINN ^ 0) !== orgINN) {
            copy.push('Поле "ИНН" должно состоять из 10 цифр')
        }

        if (orgKPP.length !== 9 || String(+orgKPP ^ 0) !== orgKPP) {
            copy.push('Поле "КПП" должно состоять из 9 цифр')
        }

        if (!orgDirSurname) {
            copy.push('Поле "Фамилия" не должно быть пустым')
        }

        if (!orgDirName) {
            copy.push('Поле "Имя" не должно быть пустым')
        }

        if (!orgDirPatronymic) {
            copy.push('Поле "Отчество" не должно быть пустым')
        }

        if (!isEmailValid(email)) {
            copy.push('Некорректный email')
        }

        if (email !== confirmEmail) {
            copy.push('Адреса почты не совпадают')
        }

        if (!isPasswordValid(password)) {
            copy.push(
                "Пароль должен содержать не менее 8 символов, одну строчную и прописную буквы английского алфавита и спец символы"
            );
        } 

        if (password !== confirmPassword) {
            copy.push('Пароли не совпадают')
        }

        setErrorMessages(copy);
        return copy;
    }

    const prepareOrganization = () => {
        const errors = validation();

        if (errors.length > 0) {
            setIsErrorPopupVisible(true);
            return 0;
        } else {
            const organization = {
                lastname: orgDirSurname,
                name: orgDirName,
                patronymic: orgDirPatronymic,
                email: email,
                password: password,
                organizationName: orgName,
                address: orgAddress,
                inn: orgINN,
                kpp: orgKPP,
            }

            return organization;
        }
    }

    const handleRegClick = () => {
        localStorage.clear();
        const organization = prepareOrganization();
        if (organization) sendRequest(organization);
    }

    return (
        <div className="form-register-legal-entity">
            <div className="legal-entiti-block1">
                <input
                    type='text'
                    id='name-of-company'
                    required
                    onInput={handleOrgNameChange}
                />
                <label htmlFor="name-of-company">
                    Наименование огранизации
                </label>

                <input
                    type='text'
                    id='legal-address'
                    required
                    onInput={handleOrgAddressChange}
                />
                <label htmlFor="legal-address">
                    Юридический адрес
                </label>

                <input
                    type='text'
                    id='inn'
                    required
                    maxLength={10}
                    onInput={handleOrgINNChange}
                />
                <label htmlFor="inn">ИНН</label>

                <input
                    type='text'
                    id='checkpoint'
                    required
                    maxLength={9}
                    onInput={handleOrgKPPChange}
                />
                <label htmlFor="checkpoint">КПП</label>

                <input
                    type='text'
                    id='surname'
                    required
                    onInput={handleOrgSurnameChange}
                />
                <label htmlFor="surname">
                    Руководитель огранизации:    Фамилия
                </label>

                <input
                    type='text'
                    id='name'
                    required
                    onInput={handleOrgDirName}
                />
                <label htmlFor="name">Имя</label>

                <input
                    type='text'
                    id='patronymic'
                    required
                    onInput={handleOrgDirPatronymic}
                />
                <label htmlFor="patronymic">Отчество</label> 

                <input
                    type='text'
                    id='email'
                    required
                    onInput={handleEmailChange}
                />
                <label htmlFor="email">e-mail</label>

                <input
                    type='text'
                    id='confirmation-email'
                    required
                    onInput={handleConfirmEmailChange}
                />
                <label htmlFor="confirmation-email">
                    Подтвердите  e-mail
                </label> 

                <input
                    type='password'
                    id='pass'
                    required
                    maxLength={254}
                    onInput={handlePasswordChange}
                />
                <label htmlFor="pass">
                    Создайте пароль
                </label>

                <input
                    type='password'
                    id='confirmation-pass'
                    required
                    maxLength={254}
                    onInput={handleConfirmPasswordChange}
                />
                <label htmlFor="confirmation-pass">
                    подтвердите пароль
                </label>

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

export default Entity;