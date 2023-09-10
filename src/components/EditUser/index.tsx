import { useState, useEffect } from "react";
import './style.css';

interface EditUserPropsTypes {
    type: number //1-физ лица 0 юр лица
}

const EditUser = (props: EditUserPropsTypes) => {
    const { type } = props;

    const [fields, setFields] = useState<string[] | []>([]);

    useEffect(() => {
        if (type) {
            setFields(['Фамилия', 'Имя', 'Отчество', 'Введите новый e-mail', 'Подтвердите e-mail'])
        }
        else {
            setFields(['Наименование организации', 'Юредический адрес', 'ИНН', 'КПП',
                'Руководитель организации:   Фамилия', 'Имя', 'Отчество', 'Введите новый e-mail', 'Подтвердите e-mail'])
        }
    }, [])

    return (
        <div className="edit-user">
            {fields.map(item => 
                <div key={item} className="edit-user_data">
                    <h5 key={item + 1}>{item}</h5>
                    <input key={item + 2} />
                </div>
            )}
            <button>
                подтвердить 
            </button>
        </div>
    )
}

export default EditUser;
