import ISearchedWorkStationResponse from "./ISearchedWorkStationResponse";

interface ISuccessFindStatisticResponse{
    workStationResponses: ISearchedWorkStationResponse[];
    countFilledApplications: number;
    countProducedDocuments: number;
    countWorkStations: number;
}

export default ISuccessFindStatisticResponse;
