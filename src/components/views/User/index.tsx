import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import PersonInfo from "../../ui/PersonInfo";

interface UserPagePropsTypes {
    handlePersonInfoMounted: Function;
    handleOpenPlugin: Function;
    handleCurrentBtnChange: Function;
    handleRedirectPageMounted: Function;
}

const UserPage = (props: UserPagePropsTypes) => {
    const { 
        handlePersonInfoMounted, 
        handleOpenPlugin, 
        handleCurrentBtnChange,
        handleRedirectPageMounted 
    } = props;

    const setOpenPlugin = (value:boolean) => { 
        handleOpenPlugin(value)
    }

    useEffect(() => {
        handleCurrentBtnChange('Вход');
        handleRedirectPageMounted(true);
    }, []);

    return (
        <div>
            <PersonInfo 
                handleIsOpenFooter={handlePersonInfoMounted} 
                handleOpenPlugin={setOpenPlugin} 
            />
            <Outlet />
        </div>
    )
}

export default UserPage;
