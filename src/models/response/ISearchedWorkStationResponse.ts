interface ISearchedWorkStationResponse{
    id: number;
    name: string;
    expiredAt: string;  
    ownerId: number;
    ownerType: string;
    textQr: string;
    filledApplications: number;
    producedDocuments: number;
    secretId: string;
}

export default ISearchedWorkStationResponse;
