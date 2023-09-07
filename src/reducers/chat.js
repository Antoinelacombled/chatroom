import {
    CHANGE_INPUT_PSEUDO,
    SAVE_PSEUDO,
    CHANGE_INPUT_MESSAGE,
    SEND_MESSAGE,
    CHANGE_INPUT_OF_LOGIN,
    LOG_USER,
    SUBMIT_LOGIN,
    SAVE_NEW_MESSAGE,
    SAVE_USER_COLOR,
} from '../actions/chat'

const initialState = {
    messages: [

    ],
    pseudo: '',
    inputPseudo: '',
    inputMessage: '',
    authentified: false,
    inputEmail: '',
    inputPassword: '',
    loarding: false,
    userColor: '',
};

const chatReducer = (state = initialState, action = {}) => {
    switch (action.type) {

        case CHANGE_INPUT_PSEUDO:
            return {
                ...state,
                inputPseudo: action.value,
            };
            break;



        case SAVE_PSEUDO:
            return {
                ...state,
                pseudo: state.inputPseudo,
                inputPseudo: ''
            };
            break;



        case CHANGE_INPUT_MESSAGE:
            return {
                ...state,
                inputMessage: action.value,
            };
            break;



        case SEND_MESSAGE:
            return {
                ...state,
                inputMessage: '',
            };
            break;



        case SAVE_NEW_MESSAGE: {
            const newMessagesArray = [
                ...state.messages,
                action.message,
            ];
            return {
                ...state,
                messages: newMessagesArray,
            };
        }



        case CHANGE_INPUT_OF_LOGIN:

            if (action.inputIdentifier === 'email') {
                return {
                    ...state,
                    inputEmail: action.newValue,
                };

            } if (action.inputIdentifier === 'password') {
                return {
                    ...state,
                    inputPassword: action.newValue,
                };
            }

        case LOG_USER:
            return {
                ...state,
                pseudo: action.nickname,
                authentified: true,
                loading: false,
            };

        case SUBMIT_LOGIN:
            return {
                ...state,
                loading: true,
            };

        case SAVE_USER_COLOR:
            return {
                ...state,
                userColor: action.color,
            };
            
        default:
            return state;
    }
};

export default chatReducer;