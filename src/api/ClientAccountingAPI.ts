import { AxiosResponse } from "axios";
import axiosConfig from "./axiosConfig";

class ClientAccountAPI{
    public static getClientData(): Promise<AxiosResponse<any | any>> {
        return axiosConfig.get('/user');
    }
}

export default ClientAccountAPI;
