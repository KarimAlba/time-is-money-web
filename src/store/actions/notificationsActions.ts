import IActionModel from "../models/IActionModel";
import actionsConstants from "./actionConstatns";

export const successRegistration = (payload: IActionModel) => {
    return {
        type: actionsConstants.SUCCESS_REGISTRATION,
        payload
    };
};

export const badRegistration = (payload: IActionModel) => {
    return {
        type: actionsConstants.BAD_REGISTRATION,
        payload
    };
};

export const successAuthorization = (payload: IActionModel) => {
    return {
        type: actionsConstants.SUCCESS_AUTHORIZATION,
        payload
    };
};

export const badAuthorization = (payload: IActionModel) => {
    return {
        type: actionsConstants.BAD_AUTHORIZATION,
        payload
    };
};

export const successUserUpdate = (payload: IActionModel) => {
    return {
        type: actionsConstants.SUCCESS_UPDATE,
        payload
    };
};

export const badUserUpdate = (payload: IActionModel) => {
    return {
        type: actionsConstants.BAD_UPDATE,
        payload
    };
};

export const successCreation = (payload: IActionModel) => {
    return {
        type: actionsConstants.BAD_UPDATE,
        payload
    };
};


export const badCreation = (payload: IActionModel) => {
    return {
        type: actionsConstants.BAD_UPDATE,
        payload
    };
};
