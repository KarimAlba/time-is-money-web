import { AxiosResponse } from "axios";
import axiosConfig from "./axiosConfig";

class ClientAccountAPI{
    public static getClientData(): Promise<AxiosResponse<any | any>> {
        return axiosConfig.get('/api/main/user');
    }

    public static passwordRecovery(email: string): Promise<AxiosResponse<any | any>> {
        return axiosConfig.post(`/api/main/user/password-recovery?email=${email}`);
    }
}

export default ClientAccountAPI;
