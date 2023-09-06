import { SUBMIT_LOGIN, logUser } from "../actions/chat";
import axios from "axios";

// const authMiddleware = (store) => (next) => (action) => {
//     console.log('Interception action authmiddleware', action);

//     switch (action.type) {
//         case SUBMIT_LOGIN: {
//             console.log('trigger')
//             const { inputEmail, inputPassword } = store.getState();

//             axios.post('http://localhost:3001/login', {
//                 email: inputEmail,
//                 password: inputPassword,
//             })
//                 .then((response) => {
//                     console.log(response);
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 });
//             next(action);
//             break;
//         }

//         default:
//             next(action);
//     }
// };

const authMiddleware = (store) => (next) => (action) => {
    // console.log('On a intercepté une action dans authMiddleware', action);
    switch (action.type) {
        case SUBMIT_LOGIN: {
            // on a accès au store, donc au state
            const { inputEmail, inputPassword } = store.getState();
            // envoi d'une requête POST vers le serveur d'authentification
            // on fournit des informations sous forme d'objet
            axios.post('http://localhost:3001/login', {
                email: inputEmail,
                password: inputPassword,
            })
                .then((response) => {
                    console.log(response.data);
                    // on voudrait mettre à jour le state par rapport à la réponse
                    const actionToDispatch = logUser(response.data);
                    store.dispatch(actionToDispatch);
                    // console.log(response.data);
                })
                .catch((error) => {
                    console.warn(error);
                });
            next(action);
            break;
        }
        default:
            // on passe l'action au voisin (le middleware suivant, ou le store si on est le
            // dernier middleware)
            next(action);
    }
};

export default authMiddleware; 