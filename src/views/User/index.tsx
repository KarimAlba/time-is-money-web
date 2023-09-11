import PersonInfo from "../../components/PersonInfo";
import { Outlet } from "react-router-dom";

interface UserPagePropsTypes {
    handlePersonInfoMounted: Function;
    handleOpenPlugin: Function;
}

const UserPage = (props: UserPagePropsTypes) => {
<<<<<<< HEAD:src/views/User/index.tsx
    const {  handlePersonInfoMounted } = props;
=======
    const { handlePersonInfoMounted, handleOpenPlugin } = props;

    const setOpenPlugin = (value:boolean) => { 
        handleOpenPlugin(value)
    }
>>>>>>> FD-1:src/component/User/index.tsx

    return (
        <div>
            <PersonInfo handleIsOpenFooter={handlePersonInfoMounted} handleOpenPlugin={setOpenPlugin} />
            <Outlet />
        </div>
    )
}

export default UserPage;
