const logMiddleware = (store) => (next) => (action) => {
    console.log('Interception action middleware', action);
    console.log("store : ", store);


    next(action); 
};

export default logMiddleware; 