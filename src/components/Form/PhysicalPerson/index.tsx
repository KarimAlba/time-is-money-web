import './style.css';
import PhysicalAccountAPI from '../../../api/PhysicalAccountAPI';
import { useNavigate } from 'react-router-dom';

const PhysicalPerson = () => {
    const navigate = useNavigate();
    const exampleClient = {
        lastname: 'Test1',
        name: "Test1",
        patronymic: "Test1",
        email: "test1@mail.ru",
        password: "test1",
        confirmEmail: "test1@mail.ru",
        confirmPassword: "test1"
    }

    const sendRequest = () => {
        PhysicalAccountAPI.registration(exampleClient)
            .then(response => {
                console.log(response);
                if (response.status < 400) {
                    navigate('/login')
                }
            })
            .catch(error => console.log(error))
    }

    const handleRegClick = () => {
        sendRequest()
    }

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
            <button onClick={handleRegClick}> РЕГИСТРАЦИЯ </button>
        </div>
    )
}

export default PhysicalPerson;
