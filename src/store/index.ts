import reducer from "./reducers";
import { legacy_createStore as createStore, combineReducers} from 'redux';

const store = createStore(combineReducers({
    notification: reducer,
}));

export default store;
