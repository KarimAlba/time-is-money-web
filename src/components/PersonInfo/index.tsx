import { useEffect, useState } from "react";
import './style.css';
import ArrowIcon from '../../assets/imgTimeIsMoney/arrow-icon.svg'
import DoneIcon from '../../assets/imgTimeIsMoney/done-icon.svg'
import ArrowDownIcon from '../../assets/imgTimeIsMoney/arrow-down-icon.svg'
import { Link } from 'react-router-dom';
import ClientAccountAPI from "../../api/ClientAccountingAPI";
import IEntityResponse from "../../models/response/IEntityResponse";
import house from '../../assets/imgTimeIsMoney/house.svg'
import crossBurgerMenu from '../../assets/imgTimeIsMoney/crossBurgerMenu.svg'


interface PersonInfoPropsTypes {
    handleIsOpenFooter: Function
    handleOpenPlugin: Function;
}

const PersonInfo = (props: PersonInfoPropsTypes) => {
    const [isDownload, setIsDownload] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [patronymic, setPatronymic] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [createdAt, setCreatedAt] = useState<string>('');

    const [id, setId] = useState<string>('');

    const [templateCount, setTemplateCount] = useState<boolean>(false)
    const [templateCount2, setTemplateCount2] = useState<boolean>(false)
    const [templateCount3, setTemplateCount3] = useState<boolean>(false)

    const { handleIsOpenFooter, handleOpenPlugin } = props;

    const [menuActive, setMenuActive] = useState<boolean>(false);

    const handleCheckBox = () => {
        setIsDownload(!isDownload);
        if (isDownload) {
            handleOpenPlugin(false);
        }
    }

    const handleTemplateClick = () => setTemplateCount(!templateCount);

    const handleTemplateClick2 = () => setTemplateCount2(!templateCount2);

    const handleTemplateClick3 = () => setTemplateCount3(!templateCount3);


    const handleDownload = () => {
        handleOpenPlugin(isDownload);
    }

    const handleMounted = () => {
        ClientAccountAPI.getClientData()
            .then(response => {
                complieteFields(response.data);
                fillLocalStorage(response.data);
            })
            .catch(error => console.log(error))
    }

    const complieteFields = (entity: IEntityResponse) => {
        setLastname(entity.lastname);
        setName(entity.name);
        setEmail(entity.email);
        setPatronymic(entity.patronymic);
        setCreatedAt(entity.createdAt);
        if (localStorage.getItem('organizationName')) {
            setTitle(String(localStorage.getItem('organizationName')));
        } else {
            setTitle(`${entity.lastname}  ${entity.name}  ${entity.patronymic}`);
        }
    }

    const fillLocalStorage = (entity: IEntityResponse) => {
        clearLocalStorage();
        localStorage.setItem('lastname', entity.lastname);
        localStorage.setItem('name', entity.name);
        localStorage.setItem('email', entity.email);
        localStorage.setItem('patronymic', entity.patronymic);
        localStorage.setItem('createdAt', entity.createdAt);
    }

    const clearLocalStorage = () => {
        localStorage.removeItem('lastname');
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.removeItem('patronymic');
        localStorage.removeItem('createdAt');
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            handleMounted();
            if (localStorage.getItem('id')) {
                setId(String(localStorage.getItem('id')))
            }
        }
        handleIsOpenFooter();
    }, [])

    return (
        <div>
            {menuActive
                ? (<div className="modalHouse">
                    <img className="heder-cross" src={crossBurgerMenu} onClick={() => setMenuActive(false)} />
                    <div className="menuHouse">
                        <div className="person-info_title">
                            <p>{title}</p>
                            <span>{email}</span>
                            <Link to='edit-user'>Редактировать данные</Link>
                        </div>
                        <div className="person-info_statistic">
                            <div className="statistic_point">
                                <p>дата регистрации:</p>
                                <span>{(new Date(createdAt)).toLocaleDateString()}</span>
                            </div>
                            <div className="statistic_point">
                                <p>скачано плагинов:</p>
                                <span>0</span>
                            </div>
                            <div className="statistic_value">
                                <p>количество</p>
                                <div
                                    onClick={handleTemplateClick}
                                    className="statistic_point"
                                >
                                    <div style={{ display: 'flex' }}>
                                        {templateCount
                                            ? <img src={ArrowDownIcon} />
                                            : <img src={ArrowIcon} />
                                        }
                                        <p>заполненных шаблонов:</p>
                                    </div>
                                    {templateCount
                                        ? (<div className="select_point">
                                            <p>В разработке</p>
                                        </div>)
                                        : null
                                    }
                                </div>
                                <div
                                    onClick={handleTemplateClick2}
                                    className="statistic_point">
                                    <div style={{ display: 'flex' }}>
                                        {templateCount2
                                            ? <img src={ArrowDownIcon} />
                                            : <img src={ArrowIcon} />
                                        }
                                        <p>заполненных приложений:</p>
                                    </div>
                                    {templateCount2
                                        ? (<div className="select_point">
                                            <p>В разработке</p>
                                        </div>)
                                        : null
                                    }
                                </div>
                                <div
                                    onClick={handleTemplateClick3}
                                    className="statistic_point">
                                    <div style={{ display: 'flex' }}>
                                        {templateCount3
                                            ? <img src={ArrowDownIcon} />
                                            : <img src={ArrowIcon} />
                                        }
                                        <p>QR-code действителен до:</p>
                                    </div>
                                    {templateCount3
                                        ? (<div className="select_point">
                                            <p>В разработке</p>
                                        </div>)
                                        : null
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="person-info_license">
                            <button
                                onClick={handleDownload}
                                className="download-button"
                                style={isDownload
                                    ? { backgroundColor: '#00b2f4' }
                                    : { backgroundColor: '#00b2f447' }
                                }
                            >
                                скачать
                            </button>
                            <div className="agreement">
                                <button onClick={handleCheckBox} className="checkbox-button">
                                    {isDownload
                                        ? <img src={DoneIcon} />
                                        : null
                                    }
                                </button>
                                <p>
                                    <span
                                        style={isDownload
                                            ? { color: 'rgba(0, 0, 0, 0.3)' }
                                            : { color: 'black' }
                                        }
                                    >
                                        настоящим я соглашаюсь с
                                    </span>
                                    <a> политикой конфиденциальности </a>
                                    <span
                                        style={isDownload
                                            ? { color: 'rgba(0, 0, 0, 0.3)' }
                                            : { color: 'black' }
                                        }
                                    >
                                        и
                                    </span>
                                    <br />
                                    <a>
                                        правилами пользования
                                    </a>
                                    <span
                                        style={isDownload
                                            ? { color: 'rgba(0, 0, 0, 0.3)' }
                                            : { color: 'black' }
                                        }
                                    >
                                      плагином
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>)
                : <img className="heder-house" src={house} onClick={() => setMenuActive(true)} />
            }
            <div className="person-info">
                <div className="person-info_title">
                    <p>{title}</p>
                    <span>{email}</span>
                    <Link to='edit-user'>Редактировать данные</Link>
                </div>
                <div className="person-info_statistic">
                    <div className="statistic_point">
                        <p>дата регистрации:</p>
                        <span>{(new Date(createdAt)).toLocaleDateString()}</span>
                    </div>
                    <div className="statistic_point">
                        <p>скачано плагинов:</p>
                        <span>0</span>
                    </div>
                    <div className="statistic_value">
                        <p>количество</p>
                        <div
                            onClick={handleTemplateClick}
                            className="statistic_point"
                        >
                            <div style={{ display: 'flex' }}>
                                {templateCount
                                    ? <img src={ArrowDownIcon} />
                                    : <img src={ArrowIcon} />
                                }
                                <p>заполненных шаблонов:</p>
                            </div>
                            {templateCount
                                ? (<div className="select_point">
                                    <p>В разработке</p>
                                </div>)
                                : null
                            }
                        </div>
                        <div
                            onClick={handleTemplateClick2}
                            className="statistic_point">
                            <div style={{ display: 'flex' }}>
                                {templateCount2
                                    ? <img src={ArrowDownIcon} />
                                    : <img src={ArrowIcon} />
                                }
                                <p>заполненных приложений:</p>
                            </div>
                            {templateCount2
                                ? (<div className="select_point">
                                    <p>В разработке</p>
                                </div>)
                                : null
                            }
                        </div>
                        <div
                            onClick={handleTemplateClick3}
                            className="statistic_point">
                            <div style={{ display: 'flex' }}>
                                {templateCount3
                                    ? <img src={ArrowDownIcon} />
                                    : <img src={ArrowIcon} />
                                }
                                <p>QR-code действителен до:</p>
                            </div>
                            {templateCount3
                                ? (<div className="select_point">
                                    <p>В разработке</p>
                                </div>)
                                : null
                            }
                        </div>
                    </div>
                </div>
                <div className="person-info_license">
                    <button
                        onClick={handleDownload}
                        className="download-button"
                        style={isDownload
                            ? { backgroundColor: '#00b2f4' }
                            : { backgroundColor: '#00b2f447' }
                        }
                    >
                        скачать
                    </button>
                    <div className="agreement">
                        <button onClick={handleCheckBox} className="checkbox-button">
                            {isDownload
                                ? <img src={DoneIcon} />
                                : null
                            }
                        </button>
                        <p>
                            <span
                                style={isDownload
                                    ? { color: 'rgba(0, 0, 0, 0.3)' }
                                    : { color: 'black' }
                                }
                            >
                                настоящим я соглашаюсь с
                            </span>
                            <a> политикой конфиденциальности </a>
                            <span
                                style={isDownload
                                    ? { color: 'rgba(0, 0, 0, 0.3)' }
                                    : { color: 'black' }
                                }
                            >
                                и
                            </span>
                            <br />
                            <a>
                                правилами пользования
                            </a>
                            <span
                                style={isDownload
                                    ? { color: 'rgba(0, 0, 0, 0.3)' }
                                    : { color: 'black' }
                                }
                            >
                                плагином
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PersonInfo;
