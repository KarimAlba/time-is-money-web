import ISupervisorRequest from "./ISupervisorRequest";

interface IOrganizationRequest{
    request: ISupervisorRequest;
    type: string;
    name: string;
    address: string;
    inn: string;
    kpp: string;
    confirmPassword: string;
    confirmEmail: string;
}

export default IOrganizationRequest;
