import './style.css';
import { useState, useEffect } from 'react';
import WorkStationtAPI from '../../api/WorkStationAPI';
import ISearchedWorkStationResponse from '../../models/response/ISearchedWorkStationResponse';

interface IPluginTablePropsTypes{
    plugins: ISearchedWorkStationResponse[];
}

const PluginTable = (props: IPluginTablePropsTypes) => {
    const { plugins } = props;

    const sendReq = (id: number) => {
        WorkStationtAPI.getQRCode(id)
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error))
    }

    const handleDownloadQR = (id: number) => {
        sendReq(id)
    }

    return (
        <div className='table-container'>
            <table>
                <thead>
                    <tr>
                        <th>имя плагина</th>
                        <th>изготовлено документов</th>
                        <th>заполнено приложений</th>
                        <th>плагин ID</th>
                        <th>QR-code</th>
                        <th>действителен до:</th>
                        <th>продлить</th>
                    </tr>
                </thead>
                <tbody>
                    {plugins.length > 0
                        ? (plugins.map((plugin, index) => 
                            <tr key={plugin.id + index}>
                                <td key={plugin.name + index}>{plugin.name}</td>
                                <td key={plugin.id + plugin.name + index}>{plugin.producedDocuments}</td>
                                <td key={index + plugin.name + plugin.id}>{plugin.filledApplications}</td>
                                <td key={index + plugin.name + plugin.expiredAt}>{plugin.id}</td>
                                <td key={plugin.expiredAt + index + plugin.name}>
                                    <a 
                                        key={plugin.urlQRCode + index + plugin.name}
                                        onClick={() => handleDownloadQR(plugin.id)}
                                    >
                                        СКАЧАТЬ
                                    </a>
                                </td>
                                <td key={index + plugin.ownerId}>
                                    {(new Date(plugin.expiredAt)).toLocaleDateString()}
                                </td>
                                <td key={plugin.ownerId + index + plugin.name}>
                                    <a href={plugin.urlQRCode + plugin.ownerId}>
                                        ПРОДЛИТЬ
                                    </a>
                                </td>
                            </tr>
                        ))
                        :  (<tr>
                            <td style={{width: '100%'}}>Ничего не найдено...</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>    
    )
}

export default PluginTable;
