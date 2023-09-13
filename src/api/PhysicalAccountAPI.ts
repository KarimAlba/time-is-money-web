import { AxiosResponse } from "axios";
import axiosConfig from "./axiosConfig";
import IUserAuth from "../models/request/IUserAuth";
import IEditUserRequest from "../models/request/IEditUserRequest";
import IPhysicalRegistrationRequest from "../models/request/IPhysicalRegistrationRequest";

class PhysicalAccountAPI{
    public static registration(body: IPhysicalRegistrationRequest): Promise<AxiosResponse<any | any>> {
        return axiosConfig.post("/user/pc-client/registration/", {...body});
    }

    public static clientAutorization(body: IUserAuth): Promise<AxiosResponse<any | any>> {
        return axiosConfig.post('/user/pc-client/auth', {...body});
    }

    public static edit(id: string, body: IEditUserRequest): Promise<AxiosResponse<any | any>> {
        console.log(axiosConfig.defaults.headers)
        return axiosConfig.patch(`/user/${id}`, {...body});
    }
}

export default PhysicalAccountAPI;
