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
    inputPseudo :'',
};

const chatReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        default: return state;
    }
};

export default chatReducer;