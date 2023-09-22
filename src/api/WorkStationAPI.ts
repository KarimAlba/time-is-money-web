import { AxiosResponse } from "axios";
import axiosConfig from "./axiosConfig";

class WorkStationtAPI{
    public static searchWS(param: string): Promise<AxiosResponse<any | any>> {
        return axiosConfig.get(`/api/main/work-station/search-by-id-or-name?searchParam=${param}`);
    }
}

export default WorkStationtAPI;
