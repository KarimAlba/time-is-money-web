import axiosConfig from "./axiosConfig";
import { AxiosResponse } from 'axios'

class PhysicalAccountAPI{
    public static registration(body: any): Promise<AxiosResponse<any | any>> {
        return axiosConfig.post("/user/registration/", {...body});
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
