import './style.css';
import mobilePhoneScreen1 from '../../assets/images/phone1.png';
import mobilePhoneScreen2 from '../../assets/images/phone2.png';
import mobilePhoneScreen3 from '../../assets/images/phone3.png';
import photoAplication from '../../assets/imgTimeIsMoney/photoAplication.svg';
import one from '../../assets/imgTimeIsMoney/stroke.svg';
import screenQr from '../../assets/imgTimeIsMoney/screenQrCode.svg';
import Star from '../../assets/imgTimeIsMoney/Star.svg';
import { useEffect } from 'react';

interface ApplicationPropsTypes{
    handleCurrentBtnChange: Function;
}

const Application = (props: ApplicationPropsTypes) => {
    const { handleCurrentBtnChange } = props;

    const onClickGooglePlay = () => (
        window.location.assign('https://play.google.com/store/apps/details?id=com.studiovr.timeismoney')
    )

    const onClickAppStore = () => (
        window.location.assign('https://apps.apple.com/us/app/%D1%82%D0%B8%D0%BC/id6447686674')
    )

    useEffect(() => {
        handleCurrentBtnChange('Приложение')
    }, []);

    return (
        <div className="container-Main-Application">
            <div className="block1">
                <div >
                    <img src={photoAplication} />
                </div>
                <div className="aplication-text1-block1">
                    <p>
                        Установите наше приложение из <span onClick={() => onClickAppStore()}>App Store </span>,
                        <span onClick={() => onClickGooglePlay()}>Google Play</span>, или <span>RuStore </span>
                        на свой смартфон. Пройдите простую регистрацию и заполните
                        пустые поля в документах. Сделать это вы можете как в ручную,
                        так и автоматически переносом данных из Госуслуг.
                        Пошаговую инструкцию, как это сделать, смотрите ниже.
                    </p>
                    <div className='aplication-text2-block1'>
                        <p>
                            Внимание! Мы не храним ваши персональные данные
                            на своих серверах или сторонних сервисах,
                            они хранятся только на ваших
                            мобильных устройствах!
                        </p>
                    </div>
                </div>
            </div>
            <div >
                <div className="container-mobile-phone-screen">
                    <img src={mobilePhoneScreen1} />
                    <img src={mobilePhoneScreen2} />
                    <img src={mobilePhoneScreen3} />
                </div>
                <div className='container-info-screen'>
                    <div className="block-one">
                        <h1>1</h1>
                        <img src={one} />
                        <p>
                            Откройте Госуслуги,
                            в папке Документы
                            выберите нужный вам
                            документ
                        </p>
                    </div>
                    <div className="block-one">
                        <h1>2</h1>
                        <img src={one} />
                        <p>
                            Внизу документа
                            найдите кнопку
                            “поделиться” и нажмите ее
                        </p>
                    </div>
                    <div className="block-one">
                        <h1>3</h1>
                        <img src={one} />
                        <p>
                            Выберите среди
                            мессенджеров приложение
                            ТиМ и все...
                            данные документа
                            сохранены в приложении
                        </p>
                    </div>
                </div>
            </div>
            <div className="Aplication-contauner-block3">
                <div>
                    <img src={screenQr} />
                </div>
                <div className="bloc3-text">
                    <div className="text1">
                        <img src={Star} />
                        <p>
                            Теперь в любой организации, которая использует
                            плагин ТиМ, вы можете заполнить любой документ
                            вам нужно только отсканировать QR код,
                            который вам предоставят, и документ будет готов,
                            останеться только его подписать.
                        </p>
                    </div>
                    <p>
                        В личном кабинете, после регистрации на сайте,
                        вам будет доступен набор шаблонов документов,
                        которые вы можете самостоятельно заполнить
                        с помощю нашего приложения.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Application;
