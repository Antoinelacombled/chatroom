import { CHANGE_INPUT_PSEUDO, SAVE_PSEUDO } from '../actions/chat'

const initialState = {
    messages: [
        {
            id: 1,
            author: "SuperChat",
            content: "chalut cha va?",
        },
        {
            id: 1,
            author: "SuperChat",
            content: "Miaou",
        },
        {
            id: 1,
            author: "SuperChat",
            content: "croquette svp",
        },
    ],
    pseudo: 'Chat fu',
    inputPseudo: '',
};

const chatReducer = (state = initialState, action = {}) => {
    switch (action.type) {

        case CHANGE_INPUT_PSEUDO:
            return {
                ...state,
                inputPseudo: action.value,
            };
            break
        case SAVE_PSEUDO:
            return {
                ...state,
                pseudo: state.inputPseudo,
            }
            break
        default: return state;
    }
};

export default chatReducer;