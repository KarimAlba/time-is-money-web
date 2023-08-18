import React from "react"
import './style.css';

const PhysicalPerson = () => {
    return (
        <div className="form-register-physical-pesrson">
            <div className="physical-pesrson-block1">
                <input
                    type="text"
                    id="surname"
                />
                <label
                    htmlFor="surname"
                > Фамилия </label>

                <input
                    type="text"
                    id="name"
                />
                <label
                    htmlFor="name"
                > Имя </label>

                <input
                    type="text"
                    id="patronymic"
                />
                <label
                    htmlFor="patronymic"
                > Отчество </label>
                <input
                    type="text"
                    id="email"
                />
                <label
                    htmlFor="email"
                > e-mail </label>
                <input
                    type="text"
                    id="confirmation-email"
                />
                <label
                    htmlFor="confirmation-email"
                > Подтвердите e-mail </label>
                <input
                    type="password"
                    id="pass"
                />
                <label
                    htmlFor="pass"
                > Создайте пароль </label>
                <input
                    type="passwird"
                    id="confirmation-pass"
                />
                <label
                    htmlFor="confirmation-pass"
                > Подтвердите пароль </label>
            </div>
            <button> РЕГИСТРАЦИЯ </button>
        </div>
    )
}
export default PhysicalPerson;