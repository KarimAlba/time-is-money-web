import './style.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorPopup from "../ErrorPopup/ErrorPopUp";
import eye from '../../../assets/imgTimeIsMoney/eye-icon.png';
import closedEye from '../../../assets/imgTimeIsMoney/closed-eye-icon.png';

const CreateNewPasswordPage = () => {
    const [userPassword, setUserPassword] = useState<string>("");
    const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false);
    const [userConfirmPassword, setUserConfirmPassword] = useState<string>("");
    const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [isErrorPopupVisible, setIsErrorPopupVisible] = useState<boolean>(false);

    const handleEyeClick = () => setIsVisiblePassword(!isVisiblePassword);
    const handleConfirmEyeClick = () => setIsVisibleConfirmPassword(!isVisibleConfirmPassword);

    const navigate = useNavigate();

    const isPasswordValid = (password: string) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{8,}/;
        return passwordRegex.test(password);
    };

    const handleNextClick = () => {
        navigate('/login/successful-recovery');
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setUserPassword(e.target.value);

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setUserConfirmPassword(e.target.value);
    
    return (
        <div className='recovery-container'>
            <h2>Ваш пароль был успешно сброшен!</h2>

            <div className="container_fields">
                <div className="fields_field">
                    <label htmlFor="password">
                        создайте новый пароль
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
                        повторите <br/>
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

            <button onClick={handleNextClick}>ДАЛЕЕ</button>

            {isErrorPopupVisible && (
                    <ErrorPopup
                        error={errorMessage}
                        onClose={() => setIsErrorPopupVisible(false)}
                    />
            )}

        </div>
    )
}

export default CreateNewPasswordPage;
