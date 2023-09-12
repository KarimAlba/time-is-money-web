import { AxiosResponse } from "axios";
import axiosConfig from "./axiosConfig";
import IPhysicalRegistrationRequest from "../models/request/PhysicalRegistrationRequest";

class PhysicalAccountAPI{
    public static registration(body: IPhysicalRegistrationRequest): Promise<AxiosResponse<any | any>> {
        return axiosConfig.post("/user/pc-client/registration/", {...body});
    }

    public static clientAutorization(body: any): Promise<AxiosResponse<any | any>> {
        return axiosConfig.post('/user/client/auth', {...body});
    }

    public static adminAutorization(body: any): Promise<AxiosResponse<any | any>> {
        return axiosConfig.post('/user/admin/auth', {...body});
    }

    public static edit(id: number, body: any): Promise<AxiosResponse<any | any>> {
        return axiosConfig.patch(`/user/${id}`, {...body});
    }
}

export default PhysicalAccountAPI;
