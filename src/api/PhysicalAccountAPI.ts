import { AxiosResponse } from "axios";
import axiosConfig from "./axiosConfig";
import IUserAuth from "../models/request/IUserAuth";
import IErrorResponse from "../models/response/IErrorResponse";
import IEditUserRequest from "../models/request/IEditUserRequest";
import IPhysicalRegistrationRequest from "../models/request/IPhysicalRegistrationRequest";


class PhysicalAccountAPI {
    public static registration(body: IPhysicalRegistrationRequest): Promise<AxiosResponse<string | IErrorResponse>> {
        return axiosConfig.post("/api/main/user/pc-client/registration/", { ...body });
    }

    public static clientAutorization(body: IUserAuth): Promise<AxiosResponse<any | IErrorResponse>> {
        return axiosConfig.post('/api/main/user/pc-client/auth', { ...body });
    }

    public static edit(body: IEditUserRequest): Promise<AxiosResponse<any | IErrorResponse>> {
        return axiosConfig.patch('/api/main/user', { ...body });
    }
}

export default PhysicalAccountAPI;
