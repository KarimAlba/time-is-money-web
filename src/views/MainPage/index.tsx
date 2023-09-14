import './style.css';
import queue from '../../assets/imgTimeIsMoney/queue.svg'
import Star from '../../assets/imgTimeIsMoney/Star.svg'
import stroke from '../../assets/imgTimeIsMoney/stroke.svg'
import Phone from '../../assets/imgTimeIsMoney/Phone.svg'
import laptop from '../../assets/imgTimeIsMoney/laptop.svg'
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

interface MainPagePropsTypes{
    handleCurrentBtnChange: Function;
}

const MainPage = (props: MainPagePropsTypes) => {
    const { handleCurrentBtnChange } = props;
    const navigate = useNavigate();
    const toApplication = () => navigate('/application');
    const toPluginPage = () => navigate('/PluginPage');
    const toLogin = () => navigate('/login');

    useEffect(() => {
        handleCurrentBtnChange('Главная')
    }, []);

    return (
        <div className='containerMain'>
            <div className="container-block1">
                <div className="container-Text">
                    <h5>TиМ</h5>
                    <p>
                        НОВАЯ ВЕХА
                        <br />
                        В ТАЙМ-МЕНЕДЖМЕНТЕ
                    </p>
                </div>
                <div className="documents">
                    <img src={queue} className="queue"/>
                    <div className='container-Text2'>
                        <p>
                            Рост документооборота в компаниях вынуждает их содержать
                            низкоквалифицированный персонал, который занимается
                            рутиной работой по заполнению однотипных бланков,
                            внося туда персональные данные своих клиентов.
                            Клиенты тратят свое вреамя и свои нервы на заполнение
                            всевозможных бланков и документов простаивая в очередях
                            ТиМ универсальное средство для решения этих проблем
                            Экономим время, экономим деньги.
                        </p>
                    </div>
                </div>
            </div>
            {/* второй блок */}
            <div className="container-block2">
                <div className="block-info">
                    <p>Наш продукт состоит из:</p>
                    <div className="block2-text1">
                        <div>
                            <h1>1</h1>
                            <img src={stroke} className="img1" />
                        </div>
                        <div>
                            <p>
                                <span onClick={toApplication}>Мобильного приложения</span>, где пользователи хранят
                                свои персональные данные и другую значимую
                                информацию.
                            </p>
                        </div>
                    </div>
                    <div className="block2-text1">
                        <div>
                            <h1>2</h1>
                            <img src={stroke} className="img1" />
                        </div>
                        <div>
                            <p>
                                <span onClick={toPluginPage}>Плагина</span>, для текстового редактора, с помощью
                                которого операторы готовят шаблоны документов
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={Phone} className="img3" />
                </div>
            </div>
            {/* третий блок */}
            <div className="container-block3">
                <div className="container-block3-info">
                    <div className="container-block3-info1">
                        <div className="info1-text1">
                            <img src={Star} />
                            <p>
                                Через QR код, выпускаемый под каждый
                                плагин, происходит коннект между ними
                                и данные клиента за считанные секунды,
                                попадают в шаблон документа
                            </p>
                        </div>
                    </div>
                    <div className="container-block3-info1">
                        <div className="info1-text1">
                            <img src={Star} />
                            <p>
                                После регистрации на нашем сайте, в
                                <span onClick={toLogin}> личном кабинете</span>, вам будет доступно
                                большое количество готовых шаблонов,
                                которые вы сможете сами заполнить в
                                один клик.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={laptop} className="img5" />
                </div>
            </div>
        </div>
    )
}

export default MainPage;
