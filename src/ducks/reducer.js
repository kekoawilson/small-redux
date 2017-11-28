/* 
    STEP ONE - set initial state & 
    add type constants 
*/
const initialState = {
        num: 0
    }
    , NEW_NUM = 'NEW_NUM'

/*
    STEP TWO - create action creaters
*/
export function makeNewNum(){
    return {
        type: NEW_NUM,
        payload: ~~(Math.random()*10)
    }
}

/*
    STEP THREE - create reducer function
    --ALL LOGIC FOR REDUX LIVES HERE--
*/
export default function(state = initialState,  action){
    /*
        @param {Object} action = {
            type: '',
            payload: 0
        }
    */
    switch (action.type) {
        case NEW_NUM:
            return Object.assign({}, state, {num: action.payload})
    
        default:
            return state
    }
}