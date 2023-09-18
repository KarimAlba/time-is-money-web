import './style.css';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import SuccessPopup from '../ui/SuccessPopup';
import ErrorPopup from '../ui/ErrorPopup/ErrorPopUp';
import OrganizationAPI from '../../api/OrganizationAPI';
import PhysicalAccountAPI from '../../api/PhysicalAccountAPI';

const EditUser = () => {
    const [type, setType] = useState<number>(1);

    const [id, setId] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [patronymic, setPatronymic] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [confirmEmail, setConfirmEmail] = useState<string>('');

    const [orgName, setOrgName] = useState<string>(''); 
    const [orgAddress, setOrgAddress] = useState<string>('');
    const [orgINN, setOrgINN] = useState<string>('');
    const [orgKPP, setOrgKPP] = useState<string>('');

    const [isErrorPopupVisible, setIsErrorPopupVisible] = useState<boolean>(false);
    const [errorMessages, setErrorMessages] = useState<string[] | []>([]);

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

    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setLastname(e.target.value);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);

    const handlePatronymicChange = (e: React.ChangeEvent<HTMLInputElement>) => setPatronymic(e.target.value);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

    const handleConfirmEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setConfirmEmail(e.target.value);

    const handleOrgNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setOrgName(e.target.value);
    
    const handleOrgAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => setOrgAddress(e.target.value);

    const handleOrgKPPChange = (e: React.ChangeEvent<HTMLInputElement>) => setOrgKPP(e.target.value);

    const getData = () => {
        if (String(localStorage.getItem('id'))) {
            setId(String(localStorage.getItem('id')));
        }

        if (String(localStorage.getItem('name'))) {
            setName(String(localStorage.getItem('name')));
        }

        if (String(localStorage.getItem('email'))) {
            setEmail(String(localStorage.getItem('email')));
            setConfirmEmail(String(localStorage.getItem('email')));
        }

        if (String(localStorage.getItem('lastname'))) {
            setLastname(String(localStorage.getItem('lastname')));
        }

        if (String(localStorage.getItem('patronymic'))) {
            setPatronymic(String(localStorage.getItem('patronymic')));
        }
    }

    const getOrgData = () => {
        if (String(localStorage.getItem('organizationName'))) {
            setOrgName(String(localStorage.getItem('organizationName')));
        }

        if (String(localStorage.getItem('organizationAddress'))) {
            setOrgAddress(String(localStorage.getItem('organizationAddress')));
        }

        if (String(localStorage.getItem('inn'))) {
            setOrgINN(String(localStorage.getItem('inn')));
        }

        if (String(localStorage.getItem('kpp'))) {
            setOrgKPP(String(localStorage.getItem('kpp')));
        }
    }

    const handleAccessPhysical = () => {
        const errors = validation();

        if (errors.length > 0) {
            setIsErrorPopupVisible(true);
            return 0;
        } else {
            const edittedUser = {
                lastname: lastname,
                name: name,
                patronymic: patronymic,
                email: email
            }

            PhysicalAccountAPI.edit(edittedUser)
                .then(response => {
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
    }

    const validation = () => {
        const copy = [];

        if (!type) {
            if (!orgName) {
                copy.push('Поле "Наименование организации" не должно быть пустым')
            }
    
            if (!orgAddress) {
                copy.push('Поле "Адрес" не должно быть пустым')
            }
    
            if (orgKPP.length !== 9) {
                copy.push('Поле "КПП" должно состоять из 9 цифр')
            }
        }

        if (!name) {
            copy.push('Поле "Фамилия" не должно быть пустым')
        }

        if (!lastname) {
            copy.push('Поле "Имя" не должно быть пустым')
        }

        if (!patronymic) {
            copy.push('Поле "Отчество" не должно быть пустым')
        }

        if (!isEmailValid(email)) {
            copy.push('Некорректный email')
        }

        if (email !== confirmEmail) {
            copy.push('Адреса почты не совпадают')
        }

        setErrorMessages(copy);
        return copy;
    }

    const handleAccessOrganization = () => {
        const errors = validation();

        if (errors.length > 0) {
            setIsErrorPopupVisible(true);
            return 0;
        } else {
            const edittedOrg = {
                lastname: lastname,
                name: name,
                patronymic: patronymic,
                email: email,
                organizationName: orgName,
                address: orgAddress,
                inn: orgINN,
                kpp: orgKPP,
            }

            OrganizationAPI.edit(edittedOrg)
                .then(response => {
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
    }

    const physicalBlock = <div  style={{marginLeft:'-13px'}}>
            <div className="edit-user_data">
                <h5>Фамилия</h5>
                <input 
                    type="text" 
                    defaultValue={lastname ? lastname : ''}
                    onInput={handleLastNameChange}
                />
            </div>
            <div className="edit-user_data">
                <h5>Имя</h5>
                <input 
                    type="text" 
                    defaultValue={name ? name : ''}
                    onInput={handleNameChange}
                />
            </div>
            <div className="edit-user_data">
                <h5>Отчество</h5>
                <input 
                    type="text" 
                    defaultValue={patronymic ? patronymic : ''}
                    onInput={handlePatronymicChange}
                />
            </div>
            <div className="edit-user_data">
                <h5>Введите новый e-mail</h5>
                <input 
                    type="text" 
                    defaultValue={email ? email : ''}
                    onInput={handleEmailChange}
                />
            </div>
            <div className="edit-user_data">
                <h5>Подтвердите e-mail</h5>
                <input 
                    type="text" 
                    defaultValue={confirmEmail ? confirmEmail : ''}
                    onInput={handleConfirmEmailChange}
                />
            </div>
            <button 
                onClick={handleAccessPhysical}
                className='access-btn'
            >
                ПОДТВЕРДИТЬ 
            </button>
        </div>

const organizationBlock = 
    <div style={{marginLeft:'-13px'}}>
        <div className="edit-user_data">
            <h5>Наименование организации</h5>
            <input 
                type="text" 
                defaultValue={orgName ? orgName : ''}
                onInput={handleOrgNameChange}
            />
        </div>
        <div className="edit-user_data">
            <h5>Юридический адрес</h5>
            <input 
                type="text" 
                defaultValue={orgAddress ? orgAddress : ''}
                onInput={handleOrgAddressChange}
            />
        </div>
        <div className="edit-user_data">
            <h5>ИНН</h5>
            <input 
                type="text" 
                disabled
                defaultValue={orgINN ? orgINN : ''}
            />
        </div>
        <div className="edit-user_data">
            <h5>КПП</h5>
            <input 
                type="text" 
                defaultValue={orgKPP ? orgKPP : ''}
                onInput={handleOrgKPPChange}
            />
        </div>
        <div className="edit-user_data">
            <h5>Руководитель организации:   Фамилия</h5>
            <input 
                type="text" 
                defaultValue={lastname ? lastname : ''}
                onInput={handleLastNameChange}
            />
        </div>
        <div className="edit-user_data">
            <h5>Имя</h5>
            <input 
                type="text" 
                defaultValue={name ? name : ''}
                onInput={handleNameChange}
            />
        </div>
        <div className="edit-user_data">
            <h5>Отчество</h5>
            <input 
                type="text" 
                defaultValue={patronymic ? patronymic : ''}
                onInput={handlePatronymicChange}
        />
        </div>
        <div className="edit-user_data">
            <h5>Введите новый e-mail</h5>
            <input 
                type="text" 
                defaultValue={email ? email : ''}
                onInput={handleEmailChange}
            />
        </div>
        <div className="edit-user_data">
            <h5>Подтвердите e-mail</h5>
            <input 
                type="text" 
                defaultValue={confirmEmail ? confirmEmail : ''}
                onInput={handleConfirmEmailChange}
            />
        </div>
        <button 
            onClick={handleAccessOrganization}
            className='access-btn'
        >
            ПОДТВЕРДИТЬ 
        </button>
    </div>

    useEffect(() => {
        getData();
        if (localStorage.getItem('inn')) {
            setType(0)
            getOrgData();
        } else {
            setType(1);
        }
    }, [])

    return (
        <div className="edit-user">
            {type
                ? physicalBlock
                : organizationBlock
            }
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

export default EditUser;
