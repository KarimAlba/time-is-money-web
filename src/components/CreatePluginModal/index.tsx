import './style.css';
import { useState, useEffect } from 'react';
import WorkStationtAPI from '../../api/WorkStationAPI';
import PluginTable from '../PluginTable'
import ISearchedWorkStationResponse from '../../models/response/ISearchedWorkStationResponse';

const CreatePluginModal = () => {
    const [search, setSearch] = useState<string>('');
    const [isTableVisible, setIsTableVisible] = useState<boolean>(false);
    const [plugins, setPlugins] = useState<ISearchedWorkStationResponse[]>([]);
    const [isNeedRequest, setIsNeedRequest] = useState<boolean>(true);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

    const handleNeedRequest = () => setIsNeedRequest(true);

    const sendReq = () => {
        setIsNeedRequest(false);
        WorkStationtAPI.search(search)
            .then(response => {
                console.log(response);
                setPlugins(response.data);
                setIsTableVisible(true);
            })
            .catch(error => {
                console.log(error);
                setIsTableVisible(false);
            })
    }

    const handleBtnClick = () => {
        if (search) {
            sendReq();
        }
        setIsTableVisible(false);
    }

    useEffect(() => {
        if (search) {
            sendReq();
        }
    }, [isNeedRequest]) 

    return (
        <div>
            <div className="plugin-modal">
                <h3>СОЗДАНИЕ ПЛАГИНА </h3>
                <p>Пожалуйста введите имя плагина или его порядковый номер:</p>
                <input
                    type="text"
                    onInput={handleSearchChange}
                />
                <button onClick={handleBtnClick}>СКАЧАТЬ</button>
            </div>
            {isTableVisible
                ? <PluginTable plugins={plugins} handleNeedRequest={handleNeedRequest}/>
                : null
            }
        </div>

    )
}

export default CreatePluginModal;
