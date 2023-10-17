import { AxiosResponse } from "axios";
import axiosConfig from "./axiosConfig";
import IErrorResponse from "../models/response/IErrorResponse";
import IEditOrganizRequest from "../models/request/IEditOrganizRequest";
import IOrganizationRequest from "../models/request/IOrganizationRequest";
import ISuccessEditResponse from "../models/response/ISuccessEditResponse";
import ISuccessOrganizationRegistrResponse from "../models/response/ISuccessOrganizationRegistrResponse";

class OrganizationAPI{
    public static registration(password: string, body: IOrganizationRequest): Promise<AxiosResponse<ISuccessOrganizationRegistrResponse | IErrorResponse>> {
        return axiosConfig.post(`/api/main/organization/registration?password=${password}`, {...body});
    }

    public static edit(body: IEditOrganizRequest): Promise<AxiosResponse<ISuccessEditResponse | IErrorResponse>> {
        return axiosConfig.patch("/api/main/organization", {...body});
    }
}

export default OrganizationAPI;
