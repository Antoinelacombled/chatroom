export const CHANGE_INPUT_PSEUDO = 'CHANGE_INPUT_PSEUDO';
export const SAVE_PSEUDO = 'SAVE_PSEUDO'

export const changeInputPseudo = (newValue) => ({
    type: CHANGE_INPUT_PSEUDO,
    value: newValue
});

export const savePseudo = () => ({
    type: SAVE_PSEUDO,
});