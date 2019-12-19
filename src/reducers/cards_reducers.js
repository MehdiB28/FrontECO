export default (currentState = [], action) => {
    // if (currentState === undefined) {
    //     return [];
    // }
    console.log('dans reducer')
    switch(action.type) {
        case "SET_CHOICE":
            console.log('setchoice',action.payload)
            return action.payload;
        default:
            console.log('default',currentState)
            return currentState;
    }
};