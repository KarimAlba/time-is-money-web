import { AxiosResponse } from "axios";
import axiosConfig from "./axiosConfig";
import IErrorResponse from "../models/response/IErrorResponse";
import ISearchedWorkStationResponse from "../models/response/ISearchedWorkStationResponse";
import ISuccessFindStatisticResponse from "../models/response/ISuccessFindStatisticResponse";

class WorkStationtAPI{
    public static getPlugins(page: number, size: number): Promise<AxiosResponse<ISearchedWorkStationResponse[] | IErrorResponse>> {
        return axiosConfig.get(`/api/main/work-station/find-all?page=${page}&size=${size}`);
    }

    // public static searchBy(param: string): Promise<AxiosResponse<any | IErrorResponse>> {
    //     return axiosConfig.get(`/api/main/work-station/search-by-id-or-name?searchParam=${param}`);
    // }

    public static getStatistic(): Promise<AxiosResponse<ISuccessFindStatisticResponse | IErrorResponse>> {
        return axiosConfig.get('/api/main/work-station/find-statistic');
    }

    // public static getQRCode(id: number): Promise<AxiosResponse<any | IErrorResponse>> {
    //     return axiosConfig.get(`/api/main/work-station/read/file/qr?id=${id}`, {
    //         responseType: "blob"
    //     });
    // }

    public static prolongation(id: number): Promise<AxiosResponse<ISearchedWorkStationResponse | IErrorResponse>> {
        return axiosConfig.patch(`/api/main/work-station/prolongation?month=1&id=${id}`);
    }

    public static create(name: string): Promise<AxiosResponse<ISearchedWorkStationResponse | IErrorResponse>> {
        return axiosConfig.post(`/api/main/work-station/create?name=${name}`);
    }
}

export default WorkStationtAPI;
