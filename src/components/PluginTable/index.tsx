import './style.css';
import { useState, useEffect } from 'react';
import WorkStationtAPI from '../../api/WorkStationAPI';
import ISearchedWorkStationResponse from '../../models/response/ISearchedWorkStationResponse';
import IWorkStationUpdateRequest from '../../models/request/IWorkStationUpdateRequest';

interface IPluginTablePropsTypes{
    plugins: ISearchedWorkStationResponse[];
}

const PluginTable = (props: IPluginTablePropsTypes) => {
    const { plugins } = props;

    const createImg = (id: number, data: string) => {
        const blob = new Blob([data], {
            type: "image/png"
        });
        const fileName = `${id}QR-code.png`;
        const reportUrl = window.URL.createObjectURL(blob);
        const downloadElement = document.createElement("a");
        downloadElement.href = reportUrl;
        downloadElement.download = fileName;
        document.body.appendChild(downloadElement);
        downloadElement.click();
        document.body.removeChild(downloadElement);
        window.URL.revokeObjectURL(reportUrl);
    }

    const sendReqQR = (id: number) => {
        WorkStationtAPI.getQRCode(id)
            .then(response => {
                createImg(id, response.data);
            })
            .catch(error => console.log(error))
    }

    const handleDownloadQR = (id: number) => {
        sendReqQR(id);
    }

    const updateWorkStation = (id: number, body: IWorkStationUpdateRequest) => {
        WorkStationtAPI.update(id, body)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    const handleProlongation = (plugin: ISearchedWorkStationResponse) => {
        const currentDate = new Date(plugin.expiredAt);
        const newDate = new Date(currentDate.setDate(currentDate.getDate() + 365)).toLocaleDateString();
        console.log(newDate)
        const requestBody = {
            name: plugin.name,
            expirationAt: newDate
        }
        updateWorkStation(plugin.id, requestBody)
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
                                    <a 
                                        key={plugin.urlQRCode + plugin.ownerId}
                                        onClick={() => handleProlongation(plugin)}
                                    >
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
