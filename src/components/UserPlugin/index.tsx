import './style.css';
import CreatePluginModal from '../CreatePluginModal';

interface UserPluginPropsTypes {
    isOpenProps: boolean;
}
const UserPlugin = (props: UserPluginPropsTypes) => {
    const { isOpenProps } = props;

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
