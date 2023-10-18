import './style.css';
import PluginTable from '../PluginTable';
import { useState, useEffect } from 'react';
import WorkStationtAPI from '../../../api/WorkStationAPI';

const CreatePluginModal = () => {
    const [name, setName] = useState<string>('');
    const [isTableVisible, setIsTableVisible] = useState<boolean>(false);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);

    const sendCreateReq = () => {
        WorkStationtAPI.create(name)
            .then(() => {
                setIsTableVisible(true);
            })
            .catch(() => {
                setIsTableVisible(false);
            })
    }

    const handleBtnClick = () => {
        if (name) {
            sendCreateReq();
        }
        setIsTableVisible(!isTableVisible);
    }

    return (
        <div>
            <div className="plugin-modal">
                <h3>СОЗДАНИЕ ПЛАГИНА </h3>
                <p>Пожалуйста введите имя плагина или его порядковый номер:</p>
                <input
                    type="text"
                    onInput={handleNameChange}
                />
                <button onClick={handleBtnClick}>СКАЧАТЬ</button>
            </div>
            {isTableVisible
                ? <PluginTable/>
                : null
            }
        </div>
    )
}

export default CreatePluginModal;
