interface IEntityResponse{
    createdAt: string;
    email: string;
    id: number;
    lastname: string;
    name: string;
    patronymic: string;
    phoneNumber?: string | null;
}

export default IEntityResponse;
