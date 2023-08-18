import React from "react";
import './style.css';
import Elipsestar from '../imgTimeIsMoney/ElipseStar.svg'
import ElipseStar2 from "../imgTimeIsMoney/EllpseStar2.svg"
import One from "../imgTimeIsMoney/one.svg"
import logo from '../imgTimeIsMoney/logo.svg'
import icon3 from '../imgTimeIsMoney/icon3.1.svg'
import icon4 from '../imgTimeIsMoney/icon4.1.svg'
import icon5 from '../imgTimeIsMoney/icon5.1.svg'
import publicServices from '../imgTimeIsMoney/publicServices.svg'
import MyDocuments from '../imgTimeIsMoney/MyDocuments.svg'
import TiM from '../imgTimeIsMoney/TiM1.svg'
import plus from '../imgTimeIsMoney/plus1.svg'
import minus from '../imgTimeIsMoney/minus.svg'
import schedule from '../imgTimeIsMoney/schedule.svg'
import men1 from '../imgTimeIsMoney/men1.svg'
import EllipseMen from '../imgTimeIsMoney/EllipseMen.svg'
import men2 from '../imgTimeIsMoney/men2.svg'




const Investors = () => {

    // const ToLink = () => navigate('')


    return (
        <div className="container-main-Investors">
            <div>
                <h1>Целевой рынок</h1>
                <p style={{ marginLeft: '20px' }}>наши потанцеальные клиенты - это:</p>
                <div
                    className="container-clients-investor">
                    <div className="container-client-1">
                        <li>банки , </li>
                        <li> натариусы,</li>
                        <li>стаматалогии,</li>
                        <li>диогностические
                            <br />
                            центры,
                        </li>
                        <li>МФЦ,</li>
                        <li>мебельные
                            <br />
                            магазины,
                        </li>
                        <li>автосалоны,</li>
                        <li>прокатные канторы,</li>
                    </div>
                    <div className="container-client-1">
                        <li>
                            страховые
                            кампании ,
                        </li>
                        <li> гостиница,</li>
                        <li>
                            салоны мобильной
                            связи,
                        </li>
                        <li>часные клиники </li>
                        <li>МФЦ,</li>
                        <li>риэлторы</li>
                        <p>и многие другие,
                            <br />
                            кто ценит свое время
                            <br />
                            и аремя своих клиентов
                        </p>
                    </div>
                    <div
                        className="quantity-clients">
                        <img src={Elipsestar} />
                        <h1>195 660</h1>
                        <p>
                            наших потанциальных
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
                        <p>Распростаранение плагиначерез сайт
                            <br />
                            по подписке 1000 руб.месяц.
                        </p>
                        <button>time-money.shop.ru</button>
                    </div>
                </div>
                <div className="container-client-3">
                    <div>
                        <img src={One} />
                        <p>1 год продаж</p>
                        <h2>10 000</h2>
                        <p>скачиваний плагина</p>
                    </div>
                    <span >
                        ___________
                    </span>
                    <div>
                        <img src={One} />
                        <p>2 год продаж</p>
                        <h2>65 000</h2>
                        <p>скачиваний плагина</p>
                    </div>
                    <span >
                        ___________
                    </span>
                    <div>
                        <img src={One} />
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
                <div className="container-client-4">
                    <div className="container-clirnt-4-heder">
                        <h1>Маркетинг</h1>
                        <img src={logo} />
                    </div>
                    <div className="container-client-4-content">
                        <img src={icon3} />
                        <img src={icon4} />
                        <img src={icon5} />
                    </div>
                    <div className="container-client-4-footer">
                        <div className="client-4-footer-container">
                            <p>
                                Реклама
                            </p>
                        </div>
                        <div className="client-4-footer-container">
                            <p>
                                Льготный периуд
                                <br />
                                для первых
                                <br />
                                пользователей
                            </p>
                        </div>
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
                <div className="container-client-5">
                    <h1>Конкуренция</h1>
                    <div className="container-client-5-heder">
                        <div className="container-client-5-icon">
                            <img src={publicServices} />
                            <h3>Госуслуги</h3>
                        </div>
                        <div className="container-client-5-icon">
                            <img src={MyDocuments} />
                            <div>
                                <p>мобильное приложение </p>
                                <h3 style={{ margin: 0 }}>«Документы»</h3>
                            </div>
                        </div>
                        <div className="container-client-5-icon">
                            <img src={TiM} />
                            <h3>ТиМ</h3>
                        </div>
                    </div>
                    <div
                        className="container-client-5-content"
                    >
                        <div className="client-5-content-container">
                            <img src={plus} />
                            <p>
                                данные хранятся
                                <br />
                                на хорошо защищенных
                                <br />
                                государством серверах
                            </p>
                            <img src={minus} />
                            <p>
                                ограниченный перечень
                                <br />
                                данных, нетвозможности
                                <br />
                                передачи этих данных
                                <br />
                                в шаблоны документов
                            </p>
                        </div>
                        <div className="client-5-content-container">
                            <img src={plus} />
                            <p>
                                данные хранятся
                                <br />
                                на хорошо защищенных
                                <br />
                                государством серверах
                            </p>
                            <img src={minus} />
                            <p>
                                ограниченный перечень
                                <br />
                                данных, нетвозможности
                                <br />
                                передачи этих данных
                                <br />
                                в шаблоны документов
                            </p>
                        </div>
                        <div className="client-5-content-container">
                            <img src={plus} />
                            <p>
                                данные хранятся
                                <br />
                                на хорошо защищенных
                                <br />
                                государством серверах
                            </p>
                            <img src={minus} />
                            <p>
                                ограниченный перечень
                                <br />
                                данных, нетвозможности
                                <br />
                                передачи этих данных
                                <br />
                                в шаблоны документов
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-client-6">
                    <div className="container-client-6-heder">
                        <h1>Итвестиции</h1>
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
                                    требуемый обем инвестиций
                                    <br />
                                    до периуда самоокупаемости
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="client-6-footer">
                        <p>Из которых:</p>
                        <div className="container-client-6-footer">
                            <div className="client-6-conteiner2">
                                <div style={{ display: "flex" }}>
                                    <div className="client-6-block3">
                                        <h1>24</h1>
                                        <p>
                                            млн.
                                            <br />
                                            руб
                                        </p>
                                    </div>
                                    <div className="client-6-block4">
                                        <p>
                                            доработка продукта
                                            <br />
                                            и поддержание его
                                            <br />
                                            работоспособности
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="client-6-container3">
                                <div style={{ display: "flex" }}>
                                    <div className="client-6-block5">
                                        <h1>36</h1>
                                        <p>
                                            млн.
                                            <br />
                                            руб
                                        </p>
                                    </div>
                                    <div className="client-6-block4">
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
                    <div className="container-client-7-header">
                        <h1>
                            Показатели экономической
                            <br />
                            эффективности
                        </h1>
                        <img src={logo} />
                    </div>
                    <div className="container-client-7-content">
                        <img src={ElipseStar2} />
                        <div className="client-7-content-block1">
                            <li>
                                необходимые инвистиции:
                                <br />
                                <span>60 000 000 руб.</span>
                            </li>
                            <br />
                            <li>
                                чистая приведенная стоимость (NPV)
                                <br />
                                <span>50 000 000 руб.</span>
                            </li>
                            <br />
                            <li>
                                внутренняя нормарентабельности
                                <br />
                                <span> <span
                                    style={{ marginLeft: 0, color: 'black' }}
                                >(IRR):</span>73%.</span>
                            </li>
                            <br />
                            <li>
                                период окупаемости:
                                <span style={{ margin: 0 }}>38 месяцев.</span>
                            </li>
                            <br />
                            <li>
                                дисконтированый период
                                <br />
                                <span> <span
                                    style={{ marginLeft: 0, color: 'black' }}
                                >окупаемости:</span>41 месяцев.</span>
                            </li>
                        </div>
                        <div className="client-7-content-block2">
                            <p>денежные потоки накоплинным итогом, руб.</p>
                            <img src={schedule} />
                            <div className="client-7-content-block2-textBootom">
                                <span>_____</span>
                                <p>Чистый денежнеый поток</p>
                                <span style={{ borderTop: '3px solid black' }}>_____</span>
                                <p>Дисконтированный чистый денежный поток</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-client-8">
                    <div className="container-client-8-header">
                        <h1>Наша команда</h1>
                        <img src={logo} />
                    </div>
                    <div className="container-client-8-content">
                        <div className="client-8-content-block1">
                            <div style={{ display: "flex" }}>
                                <img src={men1} className="client-8-content-block1-men" />
                                <img src={EllipseMen} className="ellipse" />
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
                                Connecting» г.Мюнхен
                            </p>
                        </div>
                        <div className="client-8-content-block1">
                            <div style={{ display: "flex" }}>
                                {/* <img src={men1} className="client-8-content-block1-men" /> */}
                                <img src={EllipseMen} className="ellipse" />
                            </div>
                            <br />
                            {/* <h2> Вадим Фоменко</h2> */}
                            <p>
                                {/* Главный фаундер,
                                <br />
                                генеральный директор
                                <br />
                                IT-компании «Stein
                                <br />
                                Connecting» г.Мюнхен */}
                            </p>
                        </div>
                        <div className="client-8-content-block1">
                            <div style={{ display: "flex" }}>
                                <img src={men2} className="client-8-content-block1-men" />
                                <img src={EllipseMen} className="ellipse" />
                            </div>
                            <br />
                            <h2> Сарсаков Абдула</h2>
                            <p>
                                Генеральный директор
                                <br />
                                Юридическая консалтинговая
                                <br />
                                компания «ЮрконсальтЪ»
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Investors;