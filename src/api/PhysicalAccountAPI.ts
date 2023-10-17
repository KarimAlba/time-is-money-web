import { AxiosResponse } from "axios";
import axiosConfig from "./axiosConfig";
import IUserAuth from "../models/request/IUserAuth";
import IErrorResponse from "../models/response/IErrorResponse";
import IEditUserRequest from "../models/request/IEditUserRequest";
import ISuccessEditResponse from "../models/response/ISuccessEditResponse";
import ISuccessAuthResponse from "../models/response/ISuccessAuthResponse";
import IPhysicalRegistrationRequest from "../models/request/IPhysicalRegistrationRequest";
import ISuccessPhysicalPersonRegistr from "../models/response/ISuccessPhysicalPersonRegistr";

class PhysicalAccountAPI {
    public static registration(password: string, body: IPhysicalRegistrationRequest): Promise<AxiosResponse<ISuccessPhysicalPersonRegistr | IErrorResponse>> {
        return axiosConfig.post(`/api/main/user/pc-client/registration?password=${password}`, { ...body });
    }

    public static clientAutorization(body: IUserAuth): Promise<AxiosResponse<ISuccessAuthResponse | IErrorResponse>> {
        return axiosConfig.post(`/api/main/user/pc-client/auth?email=${body.email}&password=${body.password}&isWorkStationOwner=true`);
    }

    public static edit(body: IEditUserRequest): Promise<AxiosResponse<ISuccessEditResponse | IErrorResponse>> {
        return axiosConfig.patch('/api/main/user', { ...body });
    }
}

export default PhysicalAccountAPI;
