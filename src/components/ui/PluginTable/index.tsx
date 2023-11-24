import './style.css';
import QRCode from 'qrcode';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WorkStationtAPI from '../../../api/WorkStationAPI';
import ISearchedWorkStationResponse from '../../../models/response/ISearchedWorkStationResponse';

interface PluginTablePropsTypes{
    checkAreWorkStations?: Function;
}

const PluginTable = (props: PluginTablePropsTypes) => {
    const [renderPlugins, setRenderPlugins] = useState<ISearchedWorkStationResponse[]>([]);
    const [curPage, setCurPage] = useState<number>(0);
    const [size, setSize] = useState<number>(10);

    const { checkAreWorkStations } = props;

    const navigate = useNavigate();

    // const createImg = (id: number, data: string) => {        
    //     const blob = new Blob([data], {
    //         type: "image/png"
    //     });

    //     const fileName = `${id}QR-code.png`;
    //     const reportUrl = window.URL.createObjectURL(blob);
    //     const downloadElement = document.createElement("a");
    //     downloadElement.href = reportUrl;
    //     downloadElement.download = fileName;
    //     document.body.appendChild(downloadElement);
    //     downloadElement.click();
    //     document.body.removeChild(downloadElement);
    //     window.URL.revokeObjectURL(reportUrl);
    // }

    const createQRCodeImg = (text: string, id: number) => {
        let reportUrl = '';
        QRCode.toDataURL(text, function (err: any, url: string) {
            if(err) console.log(err)
            if (url) reportUrl = url
            return url
        });

        const fileName = `${id}QR-code.png`;
        const downloadElement = document.createElement("a");
        downloadElement.href = reportUrl;
        downloadElement.download = fileName;
        document.body.appendChild(downloadElement);
        downloadElement.click();
        document.body.removeChild(downloadElement);
        window.URL.revokeObjectURL(reportUrl);
    }

    // const sendReqQR = (id: number) => {
    //     WorkStationtAPI.getQRCode(id)
    //         .then(response => {
    //             //createImg(id, response.data);
    //             createQRCodeImg(response.data, id);
    //         })
    //         .catch(error => console.log(error))
    // }

    const handleDownloadQR = (text: string, id: number) => {
        // sendReqQR(id);
        createQRCodeImg(text, id);
    }

    const updateWorkStation = (id: number) => {
        WorkStationtAPI.prolongation(id)
            .then(() => getPlugins())
            .catch(error => console.log(error))
    }

    const handleProlongation = (id: number) => {
        updateWorkStation(id);
    }

    const getPlugins = () => {
        WorkStationtAPI.getPlugins(curPage, size)
            .then(response => {
                const data = (response.data as ISearchedWorkStationResponse[]);
                setRenderPlugins(data);
                if (checkAreWorkStations) {
                    data.length > 0 ? checkAreWorkStations(true) : checkAreWorkStations(false)
                }
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getPlugins();
    }, []);

    return (
        <div className='table-container'>
            <table>
                <thead>
                    <tr>
                        <th>имя плагина</th>
                        <th>изготовлено документов</th>
                        <th>заполнено приложений</th>
                        <th>плагин ID</th>
                        <th>секретный код плагина</th>
                        <th>QR-code</th>
                        <th>действителен до:</th>
                        <th>продлить</th>
                        <th>ссылка на подключение</th>
                    </tr>
                </thead>
                <tbody>
                    {renderPlugins.length > 0
                        ? (renderPlugins.map((plugin, index) =>
                            <tr key={plugin.name + index + plugin.textQr}>
                                <td key={plugin.name + plugin.textQr + index}>{plugin.name}</td>
                                <td key={plugin.textQr + plugin.name + index}>{plugin.producedDocuments}</td>
                                <td key={plugin.name}>{plugin.filledApplications}</td>
                                <td key={plugin.name + plugin.id}>{plugin.id}</td>
                                <td key={plugin.name + plugin.secretId}>{plugin.secretId}</td>
                                <td key={plugin.name + 'a1'}>
                                    <a
                                        key={plugin.name + 'b1'}
                                        onClick={() => handleDownloadQR(plugin.textQr, plugin.id)}
                                    >
                                        СКАЧАТЬ
                                    </a>
                                </td>
                                <td key={plugin.name + 'c1'}>
                                    {(new Date(plugin.expiredAt)).toLocaleDateString()}
                                </td>
                                <td key={plugin.name + 'd1'}>
                                    <a 
                                        key={plugin.name + plugin.textQr}
                                        onClick={() => handleProlongation(plugin.id)}
                                    >
                                        ПРОДЛИТЬ
                                    </a>
                                </td>
                                <td key={plugin.name + 'f1'}>
                                    <a 
                                        key={plugin.textQr + plugin.name}
                                        onClick={() => navigate(`/redirect?=${plugin.id}`)}
                                    >
                                        ПЕРЕЙТИ
                                    </a>
                                </td>
                            </tr>
                        ))
                        : (<tr>
                            <td 
                                colSpan={9} 
                                style={{ width: '100%', border: 'none', columnSpan: 'all', textAlign: 'center' }}
                            >
                                Ничего нет
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default PluginTable;
