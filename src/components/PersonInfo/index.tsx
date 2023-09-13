import { useEffect, useState } from "react";
import './style.css';
import ArrowIcon from '../../assets/imgTimeIsMoney/arrow-icon.svg'
import DoneIcon from '../../assets/imgTimeIsMoney/done-icon.svg'
import ArrowDownIcon from '../../assets/imgTimeIsMoney/arrow-down-icon.svg'
import { Link } from 'react-router-dom';

interface PersonInfoPropsTypes {
    handleIsOpenFooter: Function
    handleOpenPlugin: Function;
}

const PersonInfo = (props: PersonInfoPropsTypes) => {
    const [isDownload, setIsDownload] = useState<boolean>(false)
    const [name, setName] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [patronymic, setPatronymic] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [createdAt, setCreatedAt] = useState<string>('');

    const [templateCount, setTemplateCount] = useState<boolean>(false)
    const [templateCount2, setTemplateCount2] = useState<boolean>(false)
    const [templateCount3, setTemplateCount3] = useState<boolean>(false)


    const { handleIsOpenFooter, handleOpenPlugin } = props;

    const pluginsOwners = ['плагин Светланы', 'плагин Сергея'];

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

    const getDataFromlocalStorage = () => {
        if (String(localStorage.getItem('name'))) {
            setName(String(localStorage.getItem('name')));
        }

        if (String(localStorage.getItem('email'))) {
            setEmail(String(localStorage.getItem('email')));
        }

        if (String(localStorage.getItem('lastname'))) {
            setLastname(String(localStorage.getItem('lastname')));
        }

        if (String(localStorage.getItem('patronymic'))) {
            setPatronymic(String(localStorage.getItem('patronymic')));
        }

        if (String(localStorage.getItem('createdAt'))) {
            setCreatedAt(String(localStorage.getItem('createdAt')));
        }
    }

    useEffect(() => {
        handleIsOpenFooter();
        getDataFromlocalStorage();
    }, [])

    return (
        <div className="person-info">
            <div className="person-info_title">
                <p>{`${lastname} ${name} ${patronymic}`}</p>
                <span>{email}</span>
                <Link to='edit-user'>Редактировать данные</Link>
            </div>
            <div className="person-info_statistic">
                <div className="statistic_point">
                    <p>дата регистрации:</p>
                    <span>{(new Date(createdAt)).toLocaleDateString()}</span>
                </div>
                <div className="statistic_point">
                    <p>скачено плагинов:</p>
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
                            ? (<div>
                                {pluginsOwners.map(item =>
                                    <div key={item} className="select_point">
                                        <p key={item + 1}>{item}</p>
                                        <span key={item + 2} >40</span>
                                    </div>
                                )}
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
                            ? (<div>
                                {pluginsOwners.map(item =>
                                    <div key={item} className="select_point">
                                        <p key={item + 1}>{item}</p>
                                        <span key={item + 2} >200</span>
                                    </div>

                                )}
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
                            ? (<div>
                                {pluginsOwners.map(item =>
                                    <div key={item} className="select_point">
                                        <p key={item + 1}>{item}</p>
                                        <span key={item + 2} >12.03.2025</span>
                                    </div>
                                )}
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
    )
}

export default PersonInfo;
