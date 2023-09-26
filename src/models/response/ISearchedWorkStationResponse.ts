interface ISearchedWorkStationResponse{
    id: number;
    name: string;
    expiredAt: string;  
    ownerId: number;
    ownerType: string;
    urlQRCode: string;
    filledApplications: number;
    producedDocuments: number;
}

export default ISearchedWorkStationResponse;
