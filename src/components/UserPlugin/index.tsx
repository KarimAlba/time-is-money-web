import './style.css';
import { useState } from 'react';
import CreatePluginModal from '../CreatePluginModal';

interface UserPluginPropsTypes {
    isOpenProps: boolean;
}
const UserPlugin = (props: UserPluginPropsTypes) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const { isOpenProps } = props;
    useEffect(() => {
        setIsOpen(isOpenProps)
    },[])
    return (
        <div className="plugins">
            <h2>ВАШИ ПЛАГИНЫ:</h2>
            {isOpenProps
                ? <CreatePluginModal />
                : null
            }
        </div>
    )
}

export default UserPlugin;
