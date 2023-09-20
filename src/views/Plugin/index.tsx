import './style.css';
import RunningMan from "../../assets/imgTimeIsMoney/RunningMan.svg"
import StepList from "../../components/step/stepList";
import star from '../../assets/imgTimeIsMoney/Star.svg'
import { useEffect } from 'react';

interface PluginPagePropsTypes{
    handleCurrentBtnChange: Function;
}

const PluginPage = (props: PluginPagePropsTypes) => {
    const { handleCurrentBtnChange } = props;

    useEffect(() => {
        handleCurrentBtnChange('Плагин')
    }, []);

    return (
        <div className="container-main-plugin">
            <div className="block1-plugin">
                <img src={RunningMan} />
                <div className="block1-plugin-text1">
                    <p>
                        Работа нашего плагина проста. Если у вас лицензионная версия Word,
                        то скачайте наш плагин <a href="">здесь</a>, если у вас нет лицензионного Word,
                        скачайте нашу версию текстового редактора с уже встроенным
                        плагином  <a href="">здесь</a>.
                        <br />
                        <br />
                        Вместе с плагином, вам будет выслан QR-код, вы можете его
                        распечатать и разместить рядом с вашим рабочим местом.
                        После чего вам останется только создать шаблон или несколько
                        шаблонов текстовых документов.
                        Теперь вам не надо вручную вводить данные клиента, он просто
                        наводит камеру своего смартфона на QR-код, который идет с
                        плагином и данные моментально попадают в документ.
                        <br />
                        <br />
                        Со стоимостью подписки, условиях пользования и вариантах
                        оплаты вы можете ознакомиться <a href="">здесь</a>.
                    </p>
                </div>
            </div>
            <div className="block2-plugin">
                <h2>КАК ИЗГОТОВИТЬ ШАБЛОН</h2>
                <StepList />
                <div className="block2-plugin-text">
                    <img src={star}  />
                    <p>
                        Мы так же предусмотрели возможность обратной связи!
                        Теперь вы можете заполнять данные в нашем плагине и отправлять
                        их в мобильное приложение клиента, если у него этих данных нет.
                        Для этого, после заполнения полей в плагине и сканировании
                        QR-кода клиентом, нажмите кнопку "Отправить" и данные
                        моментально появятся у него в мобильном приложении.
                    </p>
                </div>
            </div>


        </div>
    )
}

export default PluginPage;
