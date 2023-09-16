import PersonInfo from "../../components/PersonInfo";
import { Outlet } from "react-router-dom";
import {useEffect} from 'react';
import axios from "axios";

interface UserPagePropsTypes {
    handlePersonInfoMounted: Function;
    handleOpenPlugin: Function;
}

const UserPage = (props: UserPagePropsTypes) => {
    const { handlePersonInfoMounted, handleOpenPlugin } = props;

    const setOpenPlugin = (value:boolean) => { 
        handleOpenPlugin(value)
    }

    useEffect(() => {
        console.log(axios.defaults.headers.common)
    }, []);

    return (
        <div>
            <PersonInfo handleIsOpenFooter={handlePersonInfoMounted} handleOpenPlugin={setOpenPlugin} />
            <Outlet />
        </div>
    )
}

export default UserPage;
