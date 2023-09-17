import './style.css';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
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

    const navigate = useNavigate();

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
        if (!lastname && !name && !patronymic
            && !email && !confirmEmail
        ) {
            return
        } else {
            const edittedUser = {
                lastname: lastname,
                name: name,
                patronymic: patronymic,
                email: email
            }

            PhysicalAccountAPI.edit(edittedUser)
                .then(response => {
                    console.log(response);
                    if (response.status < 400) {
                        navigate('/login')
                    }
                })
                .catch(error => console.log(error))
        }
    }

    const handleAccessOrganization = () => {
        if (!lastname && !name && !patronymic
            && !email && !confirmEmail && !orgAddress
            && !orgINN && !orgKPP
        ) {
            return
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
                    console.log(response);
                    if (response.status < 400) {
                        navigate('/login')
                    }
                })
                .catch(error => console.log(error))
        }
    }

    const physicalBlock = <div>
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
            <button onClick={handleAccessPhysical}>
                ПОДТВЕРДИТЬ 
            </button>
        </div>

const organizationBlock = 
    <div>
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
        <button onClick={handleAccessOrganization}>
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
        </div>
    )
}

export default EditUser;
