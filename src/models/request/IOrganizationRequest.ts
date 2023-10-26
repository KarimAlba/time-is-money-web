interface IOrganizationRequest{
    lastname: string;
    name: string;
    phoneNumber: string | null;
    patronymic: string;
    email: string;
    organizationName: string;
    address: string;
    inn: string;
    kpp: string;
}

export default IOrganizationRequest;
