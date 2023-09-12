interface IOrganizationRequest{
    // "request": {
    //     "lastname": "string",
    //     "name": "string",
    //     "patronymic": "string",
    //     "email": "string",
    //     "password": "stringst"
    //   },
    type: string;
    name: string;
    address: string;
    inn: string;
    kpp: string;
    confirmPassword: string;
    confirmEmail: string;
}

export default IOrganizationRequest;
