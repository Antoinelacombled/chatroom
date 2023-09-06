import {
    CHANGE_INPUT_PSEUDO,
    SAVE_PSEUDO,
    CHANGE_INPUT_MESSAGE,
    SEND_MESSAGE,
    CHANGE_INPUT_OF_LOGIN,
    LOG_USER,
    SUBMIT_LOGIN,
} from '../actions/chat'

const initialState = {
    messages: [
        {
            id: 1,
            author: 'Super Chat',
            content: 'Chalut ça va?',
            ismine: true,
        },
        {
            id: 2,
            author: 'Super Chat',
            content: 'g faim',
            ismine: true,
        },
        {
            id: 3,
            author: 'Super Chat',
            content: 'g trop faim',
            ismine: true,
        },
        {
            id: 4,
            author: 'Super Chat',
            content: 'Croquette',
            ismine: true,
        },
        {
            id: 5,
            author: 'Super Chat',
            content: 'Croquette',
            ismine: true,
        },
        {
            id: 6,
            author: 'Super Chat',
            content: 'Croquette',
            ismine: true,
        },
        {
            id: 7,
            author: 'Super Chat',
            content: 'Croquette',
            ismine: true,
        },
    ],
    pseudo: '',
    inputPseudo: '',
    inputMessage: '',
    authentified: true,
    inputEmail: '',
    inputPassword: '',
    loarding: false,
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
            }
        default:
            return state;
    }
};

export default chatReducer;