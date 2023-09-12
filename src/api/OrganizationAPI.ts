import { AxiosResponse } from "axios";
import axiosConfig from "./axiosConfig";
import IOrganizationRequest from "../models/request/IOrganizationRequest";

class OrganizationAPI{
    public static registration(body: IOrganizationRequest): Promise<AxiosResponse<any | any>> {
        return axiosConfig.post("/organization/registration/", {...body});
    }
}

export default OrganizationAPI;
