import { combineReducers } from 'redux'
import filmesReducer from '../dashboard/filmes/filmesReducer'
import chatReducer from '../chat/chatReducer';


const rootReducer = combineReducers({
    produtos: filmesReducer,
    chat: chatReducer
})

export default rootReducer