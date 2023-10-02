import { AxiosResponse } from "axios";
import axiosConfig from "./axiosConfig";
import IWorkStationUpdateRequest from "../models/request/IWorkStationUpdateRequest";
import IErrorResponse from "../models/response/IErrorResponse";

class WorkStationtAPI{
    public static search(param: string): Promise<AxiosResponse<any | IErrorResponse>> {
        return axiosConfig.get(`/api/main/work-station/search-by-id-or-name?searchParam=${param}`);
    }

    public static getStatistic(): Promise<AxiosResponse<any | IErrorResponse>> {
        return axiosConfig.get('/api/main/work-station/find-statistic');
    }

    public static getQRCode(id: number): Promise<AxiosResponse<any | IErrorResponse>> {
        return axiosConfig.get(`/api/main/work-station/read/file/qr?id=${id}`, {
            responseType: "blob"
        });
    }

    public static prolongation(id: number): Promise<AxiosResponse<any | IErrorResponse>> {
        return axiosConfig.patch(`/api/main/work-station/prolongation?month=1&id=${id}`);
    }

    public static create(name: string): Promise<AxiosResponse<any | IErrorResponse>> {
        return axiosConfig.post(`/api/main/work-station/create?name=${name}`);
    }
}

export default WorkStationtAPI;
