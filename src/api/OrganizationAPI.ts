import { AxiosResponse } from "axios";
import axiosConfig from "./axiosConfig";
import IEditOrganizRequest from "../models/request/IEditOrganizRequest";
import IOrganizationRequest from "../models/request/IOrganizationRequest";

class OrganizationAPI{
    public static registration(password: string, body: IOrganizationRequest): Promise<AxiosResponse<any | any>> {
        return axiosConfig.post(`/api/main/organization/registration?password=${password}`, {...body});
    }

    public static edit(body: IEditOrganizRequest): Promise<AxiosResponse<any | any>> {
        return axiosConfig.patch("/api/main/organization", {...body});
    }
}

export default OrganizationAPI;
