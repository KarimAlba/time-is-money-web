import IActionModel from "../models/IActionModel";
import actionsConstants from "./actionConstants";

export const goodMove = (payload: IActionModel) => {
    return {
        type: actionsConstants.GOOD_MOVE,
        payload
    };
};

export const badAuthorization = (payload: IActionModel) => {
    return {
        type: actionsConstants.BAD_AUTHORIZATION,
        payload
    };
};

export const badRegistration = (payload: IActionModel) => {
    return {
        type: actionsConstants.BAD_REGISTRATION,
        payload
    };
};

export const badUpdate = (payload: IActionModel) => {
    return {
        type: actionsConstants.BAD_UPDATE,
        payload
    };
};

export const badRecovery = (payload: IActionModel) => {
    return {
        type: actionsConstants.BAD_RECOVERY,
        payload
    };
};
