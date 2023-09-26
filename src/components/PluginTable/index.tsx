import './style.css';
import { useState, useEffect } from 'react';
import ISearchedWorkStationResponse from '../../models/response/ISearchedWorkStationResponse';

interface IPluginTablePropsTypes{
    plugins: ISearchedWorkStationResponse[];
}

const PluginTable = (props: IPluginTablePropsTypes) => {
    const { plugins } = props;

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
                                        href={plugin.urlQRCode}
                                        download={true}
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
