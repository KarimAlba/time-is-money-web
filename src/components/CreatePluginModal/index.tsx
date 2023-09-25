import './style.css';
import { useState, useEffect } from 'react';
import WorkStationtAPI from '../../api/WorkStationAPI';

const CreatePluginModal = () => {
    const [search, setSearch] = useState<string>('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

    const sendReq = () => {
        WorkStationtAPI.search(search)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    const handleBtnClick = () => {
        if (search) {
            sendReq();
        }
    }

    return (
        <div className="plugin-modal">
            <h3>СОЗДАНИЕ ПЛАГИНА </h3>
            <p>Пожалуйста введите имя плагина или его порядковый номер:</p>
            <input 
                type="text" 
                onInput={handleSearchChange}
            />
            <button onClick={handleBtnClick}>СКАЧАТЬ</button>
        </div>
    )
}

export default CreatePluginModal;
