import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import PersonInfo from "../../components/PersonInfo";

interface UserPagePropsTypes {
    handlePersonInfoMounted: Function;
    handleOpenPlugin: Function;
    handleCurrentBtnChange: Function;
}

const UserPage = (props: UserPagePropsTypes) => {
    const { handlePersonInfoMounted, handleOpenPlugin, handleCurrentBtnChange } = props;

    const setOpenPlugin = (value:boolean) => { 
        handleOpenPlugin(value)
    }

    useEffect(() => {
        handleCurrentBtnChange('Вход');
    }, []);

    return (
        <div>
            <PersonInfo handleIsOpenFooter={handlePersonInfoMounted} handleOpenPlugin={setOpenPlugin} />
            <Outlet />
        </div>
    )
}

export default UserPage;
