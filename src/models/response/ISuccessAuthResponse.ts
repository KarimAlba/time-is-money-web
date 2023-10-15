interface ISuccessAuthResponse{
    tokenResponse: {
        token: string;
        expirationAt: string;
        tokenType: string;
    };
    entity: {
        id: number;
        lastname: string;
        name: string;
        phoneNumber: string | null;
        patronymic: string;
        email: string;
        createdAt: string;
    };
    workStationResponses: {
        id: number;
        secretId: string;
        name: string;
        filledApplications: number;
        producedDocuments: number;
        expiredAt: string;
        ownerId: number;
        ownerType: string;
        textQr: string;
    }[];
}

export default ISuccessAuthResponse;
