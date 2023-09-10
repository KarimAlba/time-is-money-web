import React from "react"
import './style.css';
import { useNavigate } from "react-router-dom";

const Entity = () => {
    const navigate = useNavigate();

    const toLogin = () => navigate('/Login');
    return (
        <div className="form-register-legal-entity">
            <div className="legal-entiti-block1">
                <input
                    type='text'
                    id='name-of-company'
                    required
                    maxLength={254}
                />
                <label
                    htmlFor="name-of-company"
                >Наименование огранизации</label>
                <input
                    type='text'
                    id='legal-address'
                    required
                    maxLength={254}
                />
                <label
                    htmlFor="legal-address"
                >Юридический адрес</label>
                <input
                    type='text'
                    id='inn'
                    required
                    maxLength={254}
                />
                <label
                    htmlFor="inn"
                >ИНН</label>
                <input
                    type='text'
                    id='checkpoint'
                    required
                    maxLength={254}
                />
                <label
                    htmlFor="checkpoint"
                >кПП</label>
                <input
                    type='text'
                    id='surname'
                    required
                    maxLength={254}
                />
                <label
                    htmlFor="surname"
                >
                 Руковадитьель огранизации:    Фамилия
                </label>
                <input
                    type='text'
                    id='name'
                    required
                    maxLength={254}
                />
                <label
                    htmlFor="name"
                >Имя</label>
                <input
                    type='text'
                    id='patronymic'
                    required
                    maxLength={254}
                />
                <label
                    htmlFor="patronymic"
                >Отчество</label>
                <input
                    type='text'
                    id='email'
                    required
                    maxLength={254}
                />
                <label
                    htmlFor="email"
                >e-mail</label>
                <input
                    type='text'
                    id='confirmation-email'
                    required
                    maxLength={254}
                />
                <label
                    htmlFor="confirmation-email"
                >Подтвердите  e-mail</label>
                <input
                    type='password'
                    id='pass'
                    required
                    maxLength={254}
                />
                <label
                    htmlFor="pass"
                >Создайте пароль</label>
                <input
                    type='password'
                    id='confirmation-pass'
                    required
                    maxLength={254}
                />
                <label
                    htmlFor="confirmation-pass"
                >подтвердите пароль</label>
            </div>
            <button onClick={toLogin}> РЕГИСТРАЦИЯ</button>
        </div>
    )
}
export default Entity;