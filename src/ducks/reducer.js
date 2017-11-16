const initialState = {
        num: 0
    }
    , NEW_NUM = 'NEW_NUM'

export function makeNewNum(){
    return {
        type: NEW_NUM,
        payload: ~~(Math.random()*10)
    }
}

export default function(state = initialState,  action /* {type: NEW_NUM, payload: 3} */){
    switch (action.type) {
        case NEW_NUM:
            return Object.assign({}, state, {num: action.payload})
    
        default:
            return state
    }
}