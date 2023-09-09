import './style.css';

const CreatePluginModal = () => {
    return (
        <div className="plugin-modal">
            <h3>СОЗДАНИЕ ПЛАГИНА </h3>
            <p>Пожалуйста введите имя плагина или его порядковый номер:</p>
            <input type="text" />
            <button>СКАЧАТЬ</button>
        </div>
    )
}

export default CreatePluginModal;
