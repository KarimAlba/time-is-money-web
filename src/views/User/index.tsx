import PersonInfo from "../../components/PersonInfo";
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
