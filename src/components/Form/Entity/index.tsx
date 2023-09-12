import './style.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

    const navigate = useNavigate();

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
                console.log(response);
                if (response.status < 400) {
                    navigate('/login')
                }
            })
            .catch(error => console.log(error))
    }

    const prepareOrganization = () => {
        if (!orgName && !orgAddress && !orgINN 
            && !orgKPP && !orgDirSurname && !orgDirName
            && !orgDirPatronymic && !email && !confirmEmail
            && !password && !confirmPassword
        ) {
            return 
        } else {
            const organization = {
                request: {
                    lastname: orgDirSurname,
                    name: orgDirName,
                    patronymic: orgDirPatronymic,
                    email: email,
                    password: password
                },
                type: 'test',
                name: orgName,
                address: orgAddress,
                inn: orgINN,
                kpp: orgKPP,
                confirmPassword: confirmPassword,
                confirmEmail: confirmEmail,
            }

            return organization;
        }
    }

    const handleRegClick = () => {
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
                    maxLength={254}
                />
                <label htmlFor="name-of-company">
                    Наименование огранизации
                </label>

                <input
                    type='text'
                    id='legal-address'
                    required
                    maxLength={254}
                    onInput={handleOrgAddressChange}
                />
                <label htmlFor="legal-address">
                    Юридический адрес
                </label>

                <input
                    type='text'
                    id='inn'
                    required
                    maxLength={254}
                    onInput={handleOrgINNChange}
                />
                <label htmlFor="inn">ИНН</label>

                <input
                    type='text'
                    id='checkpoint'
                    required
                    maxLength={254}
                    onInput={handleOrgKPPChange}
                />
                <label htmlFor="checkpoint">КПП</label>

                <input
                    type='text'
                    id='surname'
                    required
                    maxLength={254}
                    onInput={handleOrgSurnameChange}
                />
                <label htmlFor="surname">
                    Руководитель огранизации:    Фамилия
                </label>

                <input
                    type='text'
                    id='name'
                    required
                    maxLength={254}
                    onInput={handleOrgDirName}
                />
                <label htmlFor="name">Имя</label>

                <input
                    type='text'
                    id='patronymic'
                    required
                    maxLength={254}
                    onInput={handleOrgDirPatronymic}
                />
                <label htmlFor="patronymic">Отчество</label> 

                <input
                    type='text'
                    id='email'
                    required
                    maxLength={254}
                    onInput={handleEmailChange}
                />
                <label htmlFor="email">e-mail</label>

                <input
                    type='text'
                    id='confirmation-email'
                    required
                    maxLength={254}
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

            <button onClick={handleRegClick}>
                РЕГИСТРАЦИЯ
            </button>

        </div>
    )
}

export default Entity;
