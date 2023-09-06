export const CHANGE_INPUT_PSEUDO = 'CHANGE_INPUT_PSEUDO';
export const SAVE_PSEUDO = 'SAVE_PSEUDO';
export const CHANGE_INPUT_MESSAGE = 'CHANGE_INPUT_MESSAGE';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const CHANGE_INPUT_OF_LOGIN = 'CHANGE_INPUT_OF_LOGIN';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const LOG_USER = 'LOG_USER';

export const changeInputPseudo = (newValue) => ({
    type: CHANGE_INPUT_PSEUDO,
    value: newValue,
});

export const savePseudo = () => ({
    type: SAVE_PSEUDO,
});


export const changeInputMessage = (newValue) => ({
    type: CHANGE_INPUT_MESSAGE,
    value: newValue,
});

export const sendMessage = () => ({
    type: SEND_MESSAGE,
});

export const changeInputOfLogin = (identifier, newValue) => ({
    type: CHANGE_INPUT_OF_LOGIN,
    inputIdentifier: identifier,
    newValue,
});

export const submitLogin = () => ({
    type: SUBMIT_LOGIN,
});


export const logUser = (nickname) => ({
    type: LOG_USER,
    nickname,
});