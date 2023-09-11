import React, { useState } from "react";
import Header from "../Header";
import PersonInfo from "../PersonInfo";
import { Outlet } from "react-router-dom";

interface UserPagePropsTypes {
    handlePersonInfoMounted: Function;
    handleOpenPlugin: Function;
}


const UserPage = (props: UserPagePropsTypes) => {
    const { handlePersonInfoMounted, handleOpenPlugin } = props;

    const setOpenPlugin = (value:boolean) => { 
        handleOpenPlugin(value)
    }

    return (
        <div>
            <PersonInfo handleIsOpenFooter={handlePersonInfoMounted} handleOpenPlugin={setOpenPlugin} />
            <Outlet />
        </div>
    )
}
export default UserPage;
