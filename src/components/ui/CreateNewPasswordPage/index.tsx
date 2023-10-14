import './style.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ErrorPopup from "../../modals/ErrorPopup/ErrorPopUp";
import eye from '../../../assets/imgTimeIsMoney/eye-icon.png';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import ClientAccountAPI from '../../../api/ClientAccountingAPI';
import closedEye from '../../../assets/imgTimeIsMoney/closed-eye-icon.png';

const CreateNewPasswordPage = () => {
    const [userPassword, setUserPassword] = useState<string>("");
    const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false);
    const [userConfirmPassword, setUserConfirmPassword] = useState<string>("");
    const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] = useState<boolean>(false);
    const [errorMessages, setErrorMessages] = useState<string[] | []>([]);
    const [isErrorPopupVisible, setIsErrorPopupVisible] = useState<boolean>(false);

    const handleEyeClick = () => setIsVisiblePassword(!isVisiblePassword);
    const handleConfirmEyeClick = () => setIsVisibleConfirmPassword(!isVisibleConfirmPassword);

    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();

    const isPasswordValid = (password: string) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{8,}/;
        return passwordRegex.test(password);
    };

    const sendRequest = () => {
        ClientAccountAPI.resetPassword(userPassword)
            .then(response => {
                if (response.status === 200) {
                    navigate('/login/successful-recovery');
                }
            })
            .catch(error => console.log(error))
    }

    const validation = () => {
        const copy = [];

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

    const handleNextClick = () => {
        const errors = validation();

        if (errors.length > 0) {
            setIsErrorPopupVisible(true);
            return 0;
        } else {
            setIsErrorPopupVisible(false);
            sendRequest();
        }
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setUserPassword(e.target.value);

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setUserConfirmPassword(e.target.value);

    useEffect(() => {
        console.log(searchParams.get('authToken'));
        axios.defaults.headers.common['Authorization'] = `Bearer ${searchParams.get('authToken')}`
    }, []);
    
    return (
        <div className='recovery-container'>
            <h2>Ваш пароль был успешно сброшен!</h2>

            <div className="container_fields">
                <div className="fields_field">
                    <label htmlFor="password">
                        создайте <br/>
                        новый пароль
                    </label>
                    <input
                        type={isVisiblePassword
                            ? 'text'
                            : 'password'
                        }
                        id='password'
                        required
                        onInput={handlePasswordChange}
                    />
                    <img
                        src={isVisiblePassword
                            ? closedEye
                            : eye
                        }
                        onClick={handleEyeClick}
                    />
                </div>

                <div className="fields_field">
                    <label htmlFor="confirm_password">
                        повторите
                        пароль
                    </label>
                    <input
                        type={isVisibleConfirmPassword
                            ? 'text'
                            : 'password'
                        }
                        id='confirm_password'
                        required
                        onInput={handleConfirmPasswordChange}
                    />
                    <img
                        src={isVisibleConfirmPassword
                            ? closedEye
                            : eye
                        }
                        onClick={handleConfirmEyeClick}
                    />
                </div>
            </div>

            <button 
                onClick={handleNextClick} 
                className='next-btn'
            >
                ДАЛЕЕ
            </button>

            {isErrorPopupVisible && (
                    <ErrorPopup
                        errorArray={errorMessages}
                        onClose={() => setIsErrorPopupVisible(false)}
                    />
            )}

        </div>
    )
}

export default CreateNewPasswordPage;
