import './style.css';
import SuccessPopup from '../SuccessPopup';
import { useState, useEffect } from 'react';
import ErrorPopup from '../ErrorPopup';
//import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import ClientAccountAPI from '../../../api/ClientAccountingAPI';
import CloseIcon from '../../../assets/images/icons/close-icon.svg';
//import actionsConstants from '../../../store/actions/actionConstants';
//import { goodMove, badRecovery } from '../../../store/actions/notificationsActions';

interface PasswordRecoveryModalPropsTypes{
    setPasswordRecoveryOpenStatus: Function;
}

const PasswordRecoveryModal = (props: PasswordRecoveryModalPropsTypes) => {
    const { setPasswordRecoveryOpenStatus } = props;
    const [email, setEmail] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [isModalVisible, setModalVisible] = useState<boolean>(false);
    const [isErrorPopupVisible, setIsErrorPopupVisible] = useState<boolean>(false);
    const [isSuccessPopupVisible, setIsSuccessPopupVisible] = useState<boolean>(false);

    //const dispatch = useDispatch();

    const sendReq = () => {
        ClientAccountAPI.sendCode(email)
          .then(response => {
            setIsErrorPopupVisible(false);
            setIsSuccessPopupVisible(true);

            // dispatch(goodMove({
            //     type: actionsConstants.GOOD_MOVE,
            //     payload: 'Ссылка на восстановление успешно отправлена!'
            // }))

            setTimeout(() => {
                setPasswordRecoveryOpenStatus();
            }, 1400);
          })
          .catch(error => {
            setErrorMessage('Не удалось отправить ссылку на указанный адрес');
            setIsErrorPopupVisible(true);
            //setIsErrorPopupVisible(false);
            // dispatch(badRecovery({
            //     type: actionsConstants.BAD_RECOVERY,
            //     payload: 'Не удалось отправить ссылку на указанный адрес'
            // }))
          });
      }
    
      const isEmailValid = () => {
        const emailRegex = /@../;
        return emailRegex.test(email);
      };
    
      const handleSendBtnClick = () => {
        if (isEmailValid()) {
          setModalVisible(false);
          sendReq();
        } else {
          setErrorMessage("Некорректный email");
          setIsErrorPopupVisible(true);
          setIsSuccessPopupVisible(false);
        }
      }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

    return (
        <div>
            <div className='overlay modalChooseServiceContainer'>
                <div className='modalChooseService'>
                    <div className='modalHeder'>
                        <button
                            onClick={() => setPasswordRecoveryOpenStatus()}
                            className='spanCross'
                        >
                            <img src={CloseIcon} alt="close icon"/>
                        </button>
                        <h5 className='h5'>
                            Восстановление пароля
                        </h5>
                    </div>
                    <div className='animate-label'>
                    <input
                        type='text'
                        id='recovery_email'
                        onInput={handleEmailChange}
                        required 
                    />
                    <label
                        htmlFor="recovery_email">
                        Введите email, указаный при регистрации:
                    </label>
                    </div>
                    <div className='modalFuter'>
                    <button
                        className='buttonHide'
                        onClick={handleSendBtnClick}
                    >
                        ОТПРАВИТЬ
                    </button>
                    </div>
                </div>
            </div>

            {isErrorPopupVisible && (
                <ErrorPopup 
                    error={errorMessage} 
                    onClose={() => setIsErrorPopupVisible(false)}
                />
            )}

            {isSuccessPopupVisible
                ? <SuccessPopup 
                    message={'Успешно'} 
                    onClose={() => setIsSuccessPopupVisible(false)} 
                />
                : null
            }
        
        </div>
    )
}

export default PasswordRecoveryModal;
