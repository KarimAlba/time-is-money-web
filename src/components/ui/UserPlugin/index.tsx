import './style.css';
import PluginTable from '../PluginTable';
import { useState, useEffect } from 'react';
import CreatePluginModal from '../CreatePluginModal';

interface UserPluginPropsTypes {
    isOpenProps: boolean;
}
const UserPlugin = (props: UserPluginPropsTypes) => {
    const { isOpenProps } = props;
    const [areWorkStations, setAreWorkStations] = useState<boolean>(true);

    const checkAreWorkStations = (result: boolean) => setAreWorkStations(result);

    useEffect(() => {
        setAreWorkStations(true);
    }, []);

    return (
        <div className="plugins">
            <h2>ВАШИ ПЛАГИНЫ:</h2>
            {isOpenProps
                ? <CreatePluginModal/>
                : areWorkStations 
                    ? <PluginTable checkAreWorkStations={checkAreWorkStations}/>
                    : null
            }
        </div>
    )
}

export default UserPlugin;
