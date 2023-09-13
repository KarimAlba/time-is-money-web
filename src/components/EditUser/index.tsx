import './style.css';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import PhysicalAccountAPI from '../../api/PhysicalAccountAPI';
import IEditUserRequest from '../../models/request/IEditUserRequest';

const EditUser = () => {
    const [type, setType] = useState<number>(1);

    const [id, setId] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [patronymic, setPatronymic] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [confirmEmail, setConfirmEmail] = useState<string>('');

    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastname(e.target.value);
    }

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handlePatronymicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPatronymic(e.target.value);
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleConfirmEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmEmail(e.target.value);
    }

    const getDataPhysical = () => {
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

            PhysicalAccountAPI.edit(id, edittedUser)
                .then(response => {
                    console.log(response);
                    if (response.status < 400) {

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

const organizationBlock = <div>
        <div className="edit-user_data">
            <h5>Наименование организации</h5>
            <input 
                type="text" 
                defaultValue={lastname ? lastname : ''}
                onInput={handleLastNameChange}
            />
        </div>
        <div className="edit-user_data">
            <h5>Юридический адрес</h5>
            <input 
                type="text" 
                defaultValue={name ? name : ''}
                onInput={handleNameChange}
            />
        </div>
        <div className="edit-user_data">
            <h5>ИНН</h5>
            <input 
                type="text" 
                defaultValue={patronymic ? patronymic : ''}
                onInput={handlePatronymicChange}
            />
        </div>
        <div className="edit-user_data">
            <h5>КПП</h5>
            <input 
                type="text" 
                defaultValue={email ? email : ''}
                onInput={handleEmailChange}
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
        <button onClick={handleAccessPhysical}>
            ПОДТВЕРДИТЬ 
        </button>
    </div>

    useEffect(() => {
        if (localStorage.getItem('inn')) {
            setType(0);
        } else {
            setType(1);
        }
        getDataPhysical();
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
