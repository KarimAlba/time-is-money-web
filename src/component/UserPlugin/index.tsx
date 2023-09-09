import './style.css';
import { useState, useEffect } from 'react';
import CreatePluginModal from '../CreatePluginModal';

const UserPlugin = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    return (
        <div className="plugins">
            <h2>ВАШИ ПЛАГИНЫ:</h2>
            {isOpen
                ? <CreatePluginModal />
                : null
            }
        </div>
    )
}

export default UserPlugin;
