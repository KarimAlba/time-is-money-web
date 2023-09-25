import { AxiosResponse } from "axios";
import axiosConfig from "./axiosConfig";

class WorkStationtAPI{
    public static search(param: string): Promise<AxiosResponse<any | any>> {
        return axiosConfig.get(`/api/main/work-station/search-by-id-or-name?searchParam=${param}`);
    }

    public static getStatistic(): Promise<AxiosResponse<any | any>> {
        return axiosConfig.get('/api/main/work-station/find-statistic');
    }
}

export default WorkStationtAPI;
