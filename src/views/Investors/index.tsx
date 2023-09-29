import './style.css';
import Elipsestar from '../../assets/imgTimeIsMoney/ElipseStar.svg';
import ElipseStar2 from "../../assets/imgTimeIsMoney/EllpseStar2.svg";
import logo from '../../assets/imgTimeIsMoney/logo.svg';
import icon3 from '../../assets/imgTimeIsMoney/icon3.1.svg';
import icon4 from '../../assets/imgTimeIsMoney/icon4.1.svg';
import icon5 from '../../assets/imgTimeIsMoney/icon5.1.svg';
import publicServices from '../../assets/imgTimeIsMoney/publicServices2.svg';
import MyDocuments from '../../assets/imgTimeIsMoney/MyDocuments2.svg';
import TiM from '../../assets/imgTimeIsMoney/ТиМ2.svg';
import plus from '../../assets/imgTimeIsMoney/plus1.svg';
import minus from '../../assets/imgTimeIsMoney/minus.svg';
import graphic from '../../assets/images/graphic.svg';
import men2 from '../../assets/imgTimeIsMoney/men2.svg';
import men1 from '../../assets/imgTimeIsMoney/men1.svg';
import BlueLine from '../../assets/images/icons/blue-line-icon.svg';
import DiagrammaEllipse from '../../assets/images/icons/diagramma-ellipse-icon.svg'
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

interface InvestorsPropsTypes {
    handleCurrentBtnChange: Function;
}

const Investors = (props: InvestorsPropsTypes) => {
    const { handleCurrentBtnChange } = props;
    const navigate = useNavigate();
    const toApplication = () => navigate('/application');

    const toLogin = () => navigate('/login');

    useEffect(() => {
        handleCurrentBtnChange('Инвесторам');
    }, []);

    return (
        <div className="container-main-Investors">
            <div>
                <h1>Целевой рынок</h1>
                <p style={{ marginLeft: '60px' }}>Наши потенциальные клиенты:</p>
                <div className="container-clients-investor">
                    <ul className="container-client-1">
                        <li>банки; </li>
                        <li>нотариусы;</li>
                        <li>стоматологии;</li>
                        <li>диагностические центры;</li>
                        <li>{'многофунк'+'циональные центры (МФЦ);'}</li>
                        <li>мебельные магазины;
                        </li>
                        <li>автосалоны;</li>
                        <li>прокатные конторы;</li>
                    </ul>
                    <ul className="container-client-1">
                        <li>
                            страховые
                            компании;
                        </li>
                        <li> гостиницы;</li>
                        <li>
                            салоны мобильной
                            <br />
                            связи;
                        </li>
                        <li>частные клиники.</li>
                        <p> и риелторы ...
                            <br />
                            и многие другие,
                            <br />
                            кто ценит свое время
                            <br />
                            и время своих клиентов.
                        </p>
                    </ul>
                    <div className="quantity-clients">
                        <div className='statistic-result'>
                            <img src={Elipsestar} />
                            <h2>200 000</h2>
                        </div>
                        <p>
                            свыше
                            <br />
                            наших потенциальных
                            <br />
                            клиентов в одной только
                            <br />
                            Москве и Московской области
                        </p>
                    </div>

                </div>
                <div className="container-client-2" >
                    <h1>Бизнес-Модель</h1>
                    <div className="business-model">
                        <img src={ElipseStar2} />
                        <p>Распространение плагина через сайт
                            <br />
                            по подписке 1000 руб.месяц.<span>*</span>
                        </p>
                        <button onClick={toLogin}>time-money.shop.ru</button>
                    </div>
                </div>
                <div className='container_sales'>
                    <div className="container-client-3">
                        <div>
                            <img src={DiagrammaEllipse} />
                            <p>1 год продаж</p>
                            <h2>10 000</h2>
                            <p>скачиваний плагина</p>
                        </div>
                        <img src={BlueLine} alt='blue line'/>
                        <div>
                            <img src={DiagrammaEllipse} />
                            <p>2 год продаж</p>
                            <h2>65 000</h2>
                            <p>скачиваний плагина</p>
                        </div>
                        <img src={BlueLine} alt='blue line'/>
                        <div>
                            <img src={DiagrammaEllipse} />
                            <p>3 год продаж</p>
                            <h2>180 000</h2>
                            <p>
                                планируемое число
                                <br />
                                пользователей плагина
                                <br />
                                к концу третьего года
                            </p>
                        </div>
                    </div>
                    <p className='client3-condition'>
                        <span>*</span>
                        для первых подписчиков на период 6 месяцев стоимость 100 руб. в месяц
                    </p>
                </div>
                <div className="container-client-4">
                    <div className="client-header">
                        <h1>Маркетинг</h1>
                        <img src={logo} />
                    </div>
                    <div className="container-client-4-content ">
                        <div className="client4-content">
                            <img src={icon3} />
                            <div className="client-4-footer-container">
                                <p>
                                    Реклама
                                </p>
                            </div>
                        </div>
                        <div className="client4-content">
                            <img src={icon4} />
                            <div className="client-4-footer-container">
                                <p>
                                    Льготный период
                                    <br />
                                    для первых
                                    <br />
                                    пользователей
                                </p>
                            </div>
                        </div>
                        <div className="client4-content">
                            <img src={icon5} />
                            <div className="client-4-footer-container">
                                <p>
                                    Система поощрений
                                    <br />
                                    за привлечение
                                    <br />
                                    новых клиентов
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-client-5">
                <h1>Конкуренция</h1>
                <div className="container-client5-content">
                    <div className="content-block">
                        <div className="container-client-5-icon">
                            <img src={publicServices} />
                            <h3>Госуслуги</h3>
                        </div>
                        <div className="client-5-content-container">
                            <div className='difference'>
                                <img src={plus} />
                                <p>
                                    данные хранятся
                                    <br />
                                    на хорошо защищенных
                                    <br />
                                    государством серверах
                                </p>
                            </div>
                            <div className='difference'>
                                <img src={minus} />
                                <p>
                                    ограниченный перечень
                                    <br />
                                    данных, нет возможности
                                    <br />
                                    передачи этих данных
                                    <br />
                                    в шаблоны документов
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="content-block">
                        <div className="container-client-5-icon">
                            <img src={MyDocuments} />
                            <div>
                                <p onClick={toApplication}>мобильное приложение</p>
                                <h3 style={{ marginTop: 0 }}>«Документы»</h3>
                            </div>
                        </div>
                        <div className="client-5-content-container">
                            <div className='difference'>
                                <img src={plus} />
                                <p>
                                    удобный интерфейс,
                                    <br />
                                    широкий перечень
                                    <br />
                                    хранимых документов
                                </p>
                            </div>
                            <div className='difference'>
                                <img src={minus} />
                                <p>
                                    платное,
                                    <br />
                                    нет возможности
                                    <br />
                                    получения данных из
                                    <br />
                                    Госуслуг,нет функции
                                    <br />
                                    переноса данных в
                                    <br />
                                    шаблоны
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="content-block">
                        <div className="container-client-5-icon">
                            <img src={TiM} />
                            <h3>ТиМ</h3>
                        </div>
                        <div className="client-5-content-container">
                            <div className='difference'>
                                <img src={plus} />
                                <p>
                                    удобный интерфейс,
                                </p>
                            </div>
                            <div className='difference'>
                                <img src={plus} />
                                <p>
                                    широкий перечень хранимых
                                    <br />
                                    документов, возможность
                                    <br />
                                    передачи данных, с согласия
                                    <br />
                                    пользователя, в шаблоны
                                    <br />
                                    документов,
                                </p>
                            </div>
                            <div className='difference'>
                                <img src={plus} />
                                <p>
                                    отсутствие
                                    <br />
                                    риска утечки данных
                                    <br />
                                    поскольку они хранятся
                                    <br />
                                    не на серверах, а на мобильных
                                    <br />
                                    устройствах пользователей
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-client-6">
                <div className="client-header">
                    <h1>Инвестиции</h1>
                    <img src={logo} />
                </div>
                <div className="client-6-conteiner1">
                    <img src={ElipseStar2} />
                    <div style={{ display: 'flex' }}>
                        <div className="client-6-block1">
                            <h1>60</h1>
                            <p>
                                млн.
                                <br />
                                руб
                            </p>
                        </div>
                        <div className="client-6-block2">
                            <p>
                                требуемый объём инвестиций
                                <br />
                                до периода самоокупаемости
                            </p>
                        </div>
                    </div>
                </div>
                <div className="client-6-footer">
                    <p>Из которых:</p>
                    <div className="container-client-6-footer">
                        <div className="client-6-conteiner2">
                            <div style={{ display: "flex" }}>
                                <div className="client-6-block1">
                                    <h1>24</h1>
                                    <p>
                                        млн.
                                        <br />
                                        руб
                                    </p>
                                </div>
                                <div className="client-6-block2">
                                    <p>
                                        доработка продукта и
                                        <br />
                                        поддержание его
                                        <br />
                                        работоспособности
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="client-6-conteiner2">
                            <div style={{ display: "flex" }}>
                                <div className="client-6-block1">
                                    <h1>36</h1>
                                    <p>
                                        млн.
                                        <br />
                                        руб
                                    </p>
                                </div>
                                <div className="client-6-block2">
                                    <p>
                                        затраты
                                        <br />
                                        на рекламу
                                        <br />
                                        и маркетинг
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-client-7">
                <div className="client-header economic_effect">
                    <h1>
                        Показатели экономической
                        <br />
                        эффективности
                    </h1>
                    <img src={logo} />
                </div>
                <div className="container-client-7-content">
                    <img src={ElipseStar2} />
                    <ul className="client-7-content-block1">
                        <li>
                            Необходимые инвестиции:
                            <br />
                            <span>60 000 000 руб.</span>
                        </li>
                        <br />
                        <li>
                            Чистая приведенная стоимость (NPV)
                            <span style={{ fontSize: '40px' }}>*</span>
                            <br />
                            <span>50 000 000 руб.</span>
                        </li>
                        <br />
                        <li>
                            внутренняя норма рентабельности (IRR):
                            <br />
                            <span>
                                73%.
                            </span>
                        </li>
                        <br />
                        <li>
                            период окупаемости:
                            <br />
                            <span style={{ margin: 0 }}>38 месяцев.</span>
                        </li>
                        <li>
                            Дисконтированный период окупаемости:
                            <br />
                            <span>
                                41 месяцев.
                            </span>
                        </li>
                    </ul>
                    <div className="client-7-content-block2">
                        <div style={{display: 'block'}}>
                            <p>денежные потоки накопленным итогом, руб.</p>
                            <img src={graphic}/>
                        </div>
                        <div className="client-7-content-block2-textBootom">
                            <span>_____</span>
                            <p>Чистый денежный поток</p>
                            <span style={{ borderTop: '3px solid black' }}>_____</span>
                            <p>Дисконтированный чистый денежный поток</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-client-8">
                <div className="client-header">
                    <h1>Наша команда</h1>
                    <img src={logo} />
                </div>
                <div className="container-client-8-content">
                    <div className="client-8-content-block1">
                        <div>
                            <img src={men1} className="client-8-content-block1-men" />
                        </div>
                        <br />
                        <h2> Вадим Фоменко</h2>
                        <p>
                            Главный фаундер,
                            <br />
                            генеральный директор
                            <br />
                            IT-компании «Stein
                            <br />
                            Connecting» г. Мюнхен
                        </p>
                    </div>
                    <div className="client-8-content-block1">
                        <div >
                            <img src={men2} className="client-8-content-block1-men" />
                        </div>
                        <br />
                        <h2> Сарсаков Абдула</h2>
                        <p>
                            Генеральный директор
                            <br />
                            Юридическая консалтинговая
                            <br />
                            компания «ЮрконсалтЪ»
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Investors;
