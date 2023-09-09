import React, { useState } from "react";
import Header from "../Header";
import PersonInfo from "../PersonInfo";
import { Outlet } from "react-router-dom";

interface UserPagePropsTypes {
    handlePersonInfoMounted: Function;
}


const UserPage = (props: UserPagePropsTypes) => {

    const {  handlePersonInfoMounted } = props;

    return (
        <div>
            <PersonInfo handleIsOpenFooter={handlePersonInfoMounted} />
            <Outlet/>
        </div>
    )
}
export default UserPage;
