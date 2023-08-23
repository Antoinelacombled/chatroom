import {
    CHANGE_INPUT_PSEUDO,
    SAVE_PSEUDO,
    CHANGE_INPUT_MESSAGE,
    SEND_MESSAGE
} from '../actions/chat'

const initialState = {
    messages: [
    ],
    pseudo: 'Chat fu',
    inputPseudo: '',
    inputMessage: '',
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
                inputPseudo: ''
            };
            break
        case CHANGE_INPUT_MESSAGE:
            return {
                ...state,
                inputMessage: action.value,
            };
            break
        case SEND_MESSAGE: {
            const newId = state.messages.length + 1;

            const newMessage = {
                id: newId,
                author: state.pseudo,
                content: state.inputMessage,
                isMine: true,
            };
            const newMessageArray = [
                ...state.messages,
                newMessage
            ]

            return {
                ...state,
                messages: newMessageArray,
                inputMessage: '',
            };
        }


        default: return state;
    }
};

export default chatReducer;