import { AxiosResponse } from "axios";
import axiosConfig from "./axiosConfig";
import IEditOrganizRequest from "../models/request/IEditOrganizRequest";
import IOrganizationRequest from "../models/request/IOrganizationRequest";

class OrganizationAPI{
    public static registration(body: IOrganizationRequest): Promise<AxiosResponse<any | any>> {
        return axiosConfig.post("/organization/registration/", {...body});
    }

    public static edit(body: IEditOrganizRequest): Promise<AxiosResponse<any | any>> {
        return axiosConfig.patch("/organization", {...body});
    }
}

export default OrganizationAPI;
