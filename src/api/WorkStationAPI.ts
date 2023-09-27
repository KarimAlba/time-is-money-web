import { AxiosResponse } from "axios";
import axiosConfig from "./axiosConfig";
import IWorkStationUpdateRequest from "../models/request/IWorkStationUpdateRequest";

class WorkStationtAPI{
    public static search(param: string): Promise<AxiosResponse<any | any>> {
        return axiosConfig.get(`/api/main/work-station/search-by-id-or-name?searchParam=${param}`);
    }

    public static getStatistic(): Promise<AxiosResponse<any | any>> {
        return axiosConfig.get('/api/main/work-station/find-statistic');
    }

    public static getQRCode(id: number): Promise<AxiosResponse<any | any>> {
        return axiosConfig.get(`/api/main/work-station/read/file/qr?id=${id}`, {
            responseType: "blob"
        });
    }

    public static update(id: number, body: IWorkStationUpdateRequest): Promise<AxiosResponse<any | any>> {
        return axiosConfig.patch(`/api/main/work-station/update?id=${id}`, { ...body });
    }
}

export default WorkStationtAPI;
