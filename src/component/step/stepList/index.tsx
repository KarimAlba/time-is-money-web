import { useState } from "react";
import StepModel from "../StepModel";
import StepItem from "../StepItem";
import screen1 from "../../imgTimeIsMoney/screen1.svg"
import screen2 from "../../imgTimeIsMoney/screen2.svg"
import screen3 from "../../imgTimeIsMoney/screen3.svg"
import screen4 from "../../imgTimeIsMoney/screen4.svg"
import screen5 from "../../imgTimeIsMoney/screen5.svg"


const steps = [
    {
        number: 1,
        photoUrl: screen1,
        text: 'После того, как вы скачали и установили плагин, откройте текстовый' +
            ' редактор и наш плагин, выберите документ откуда вы хотите' +
            ' извлечь данные.'
    },
    {
        number: 2,
        photoUrl: screen2,
        text: 'Справа от пустых полей находиться кнопка с помощью которой вы' +
            ' будете вставлять тэги с нужной информацией (например: фамилия,' +
            'имя, отчество) в шаблон документа.'
    },
    {
        number: 3,
        photoUrl: screen3,
        text: 'Далее, создайте шаблон любого документа, который вам нужен и на' +
            'месте отсутствующей информации вставьте соответствующий тэг.'
    },
    {
        number: 4,
        photoUrl: screen4,
        text: 'Когда создаете шаблон, попросите клиента отсканировать ваш ' +
            ' QR-код и нажмите синюю кнопку *Запросить*. Информация из ' +
            ' документа появиться вначале в нашем плагине, после проверки' +
            ' достоверности данных вы можете внести их в документ,' +
            ' нажав кнопку *Вставить* '
    },
    {
        number: 5,
        photoUrl: screen5,
        text: 'Документ готов! Вы можете его распечатать, сохранить , поступить' +
            ' так, как поступаете с обычным текстовым редактором. Вы можете ' +
            ' также сохранить шаблон документа и воспользоваться им для ' +
            ' обслуживания следующего клиента.'
    }
]

const StepList = () => {
    const [stepModels, setStepModels] = useState<StepModel[]>(steps);

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {
                stepModels.map(step => {
                    return (<StepItem photoUrl={step.photoUrl} number={step.number} text={step.text} />)
                })
            }
        </div>
    )
}
export default StepList;