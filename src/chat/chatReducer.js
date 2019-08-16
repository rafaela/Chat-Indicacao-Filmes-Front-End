import consts from '../main/consts'

const INICIAL_STATE = {
    user: localStorage.getItem(consts.USER_SESSION),
    message: '',
    messages: [],
    movie: []
}

export default function (state = INICIAL_STATE, action){
    switch (action.type) {
        case 'MESSAGE_CHANGED':
            return { ...state, message: action.payload }
        case 'NEW_MESSAGE':
            let messages = state.messages || [];
            return { ...state, messages: messages.concat({ message: action.payload || state.message, base: 'sent'})}
        case 'MESSAGE_SENT':
            return { ...state, message: '' }
        case 'CHAT_MESSAGES_FETCHED':
            return { ...state, messages: (action.payload.data) ? action.payload.data.messages : []}
        case 'USER_OBTAINED':
            localStorage.setItem(consts.USER_SESSION, action.payload.data.session_id)
            return { ...state, messages: action.payload.data.messages }
        case 'MOVIES_FETCHED':
            let moviesItems = action.payload.data.context ?
            action.payload.data.context.filmes || [] : [];
            
            return { ...state, movie: moviesItems }
        default:
            return state  
    }
}