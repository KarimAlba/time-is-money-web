import { useNavigate } from "react-router-dom";

const ChooseRegistrationModal = () => {
    const navigate = useNavigate();
    const toPhysicalPerson = () => navigate('physicalPerson');
    const toEntity = () => navigate('entity');

    return (
        <div className="overlay modal-choice-registration-Container">
            <div className='modal-choice-registration'>
                <p>Вы регистрируетесь как:</p>
                <span onClick={toPhysicalPerson}>
                    ФИЗИЧЕСКОЕ ЛИЦО
                </span>
                <span onClick={toEntity}>
                    ЮРИДИЧЕСКОЕ ЛИЦО
                </span>
            </div>
        </div>
    )
}

export default ChooseRegistrationModal;
