import IStateModel from "../models/IStateModel";
import IActionModel from "../models/IActionModel";
import actionsConstants from "../actions/actionConstants";

const reducer = (state: IStateModel, action: IActionModel) => {
    switch (action.type) {
        case actionsConstants.GOOD_MOVE:
            return {...state, message: action.payload}
        case actionsConstants.BAD_AUTHORIZATION: 
            return {...state, message: action.payload}
        case actionsConstants.BAD_REGISTRATION: 
            return {...state, message: action.payload}
        case actionsConstants.BAD_UPDATE: 
            return {...state, message: action.payload}
        case actionsConstants.BAD_RECOVERY: 
            return {...state, message: action.payload}
        default: 
            return 'Is error';
    }
}

export default reducer;
