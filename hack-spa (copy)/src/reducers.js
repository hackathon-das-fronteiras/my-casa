import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import TesteReducer from './Components/Teste/reducers'
import MarketsReducer from './Components/Market/reducers'

const rootReducer = combineReducers({
    mercados: TesteReducer,
    market: MarketsReducer,
    form: formReducer,
})

export default rootReducer