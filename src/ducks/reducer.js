import axios from 'axios'
/* 
    STEP ONE - set initial state & 
    add type constants 
*/
const initialState = {
        num: 0,
        quote: ''
    },
    NEW_NUM = 'NEW_NUM',
    QUOTE = 'QUOTE'

/*
    STEP TWO - create action creaters
*/
export function makeNewNum() {
    return {
        type: NEW_NUM,
        payload: ~~(Math.random() * 10)
    }
}

export function getNewQuote() {
    /*
        to utilize redux-promise middleware, you make the payload your promise. 
        middlware will fire and resolve the promise for you, and will update
        the payload each step of the way.
    */
    return {
        type: QUOTE,
        payload: axios.get('https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en').then(q => q.data)
    }
}

/*
    STEP THREE - create reducer function
    --ALL LOGIC FOR REDUX LIVES HERE--
*/
export default function (state = initialState, action) {
    /*
        @param {Object} action = {
            type: '',
            payload: 0
        }
    */
    switch (action.type) {
        case NEW_NUM:
            return Object.assign({}, state, {
                num: action.payload
            })

        case QUOTE + '_PENDING':
            return Object.assign({}, state, {
                quote: 'pending'
            })

        case QUOTE + '_FULFILLED':
            return Object.assign({}, state, {
                quote: action.payload.quoteText
            })
        
        case QUOTE + '_REJECTED':
            return Object.assign({}, state, {
                quote: "Turn on CORS!"
            })

        default:
            return state
    }
}