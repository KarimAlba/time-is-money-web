import { AxiosResponse } from "axios";
import axiosConfig from "./axiosConfig";
import IErrorResponse from "../models/response/IErrorResponse";
import ISuccessGetUserDataResponse from "../models/response/ISuccessGetUserDataResponse";

class ClientAccountAPI{
    public static getClientData(): Promise<AxiosResponse<ISuccessGetUserDataResponse | IErrorResponse>> {
        return axiosConfig.get('/api/main/user');
    }

    public static sendCode(email: string): Promise<AxiosResponse<boolean | IErrorResponse>> {
        return axiosConfig.post(`/api/main/code/send?recipient=${email}&messageType=RESET_PASSWORD`)
    }

    public static resetPassword(newPassword: string): Promise<AxiosResponse<boolean | IErrorResponse>> {
        return axiosConfig.patch(`/api/main/user/password?newPassword=${newPassword}`)
    }
}

export default ClientAccountAPI;
