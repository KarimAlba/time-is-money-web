import { AxiosResponse } from "axios";
import axiosConfig from "./axiosConfig";

class ClientAccountAPI{
    public static getClientData(): Promise<AxiosResponse<any | any>> {
        return axiosConfig.get('/api/main/user');
    }

    public static sendCode(email: string): Promise<AxiosResponse<any | any>> {
        return axiosConfig.post(`/api/main/code/send?recipient=${email}&messageType=RESET_PASSWORD`)
    }

    public static resetPassword(newPassword: string): Promise<AxiosResponse<any | any>> {
        return axiosConfig.patch(`/api/main/user/password?newPassword=${newPassword}`)
    }
}

export default ClientAccountAPI;
