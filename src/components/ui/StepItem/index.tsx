import './style.css';
import stroke from '../../../assets/imgTimeIsMoney/stroke.svg'
import StepModel from "../../../models/StepModel";

const StepItem = (props: StepModel) => {

    return (
        <div className="container-step">
            <img src={props.photoUrl} className='screen'/>
            <div className="step-text">
                <h1>{props.number}</h1>
                <img src={stroke}/>
                <p>
                    {props.text}
                </p>
            </div>
        </div>
    )
}

export default StepItem;
