import styles from './style.module.scss';
import SBPIcon from '../../../assets/images/icons/sbp-icon.svg';
import SberIcon from '../../../assets/images/icons/sber-logo-icon.svg';
import QRCodeIcon from '../../../assets/images/icons/qrcode-payment-icon.svg';
import PaymentMIRIcon from '../../../assets/images/icons/payment-mir-icon.svg';

interface PaymentModalPropsTypes{
    handleClose: Function;
}

const PaymentModal = (props: PaymentModalPropsTypes) => {
    const { handleClose } = props;

    return (
        <div className={styles['payment-cover']}>
            <div className={styles.payment}>
                <button 
                    className={styles['payment_close-btn']}
                    onClick={() => handleClose()}
                >
                    +
                </button>
                <p>
                    В настоящее время для наших клиентов предоставляется <span>бесплатный</span> (пробный) 
                    <span> период пользования</span> нашим плагином сроком <span>на один месяц</span>.
                </p>
                <p>
                    По окончании пробного периода, действует <span>льготная подписка </span>(6 месяцев) <br/>
                    <span> 100</span> (сто) <span> рублей в месяц</span>.
                </p>
                <p>
                    <span>Стоимость подписки</span> на плагин без льгот - <span>1000</span> (одна тысяча) <span>рублей в месяц</span>.
                </p>
                <h6>Варианты оплаты:</h6>
                <div className={styles.variables}>
                    <img src={PaymentMIRIcon} alt="мир"/>
                    <img src={SBPIcon} alt="сбп"/>
                    <img src={QRCodeIcon} alt="qr"/>
                    <div className={styles.sber}>
                        <img src={SberIcon} alt="sberbank"/>
                        <span>SberBusinessAPI</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentModal;
