/**
 * Created by jolaadeadewale on 15/09/2017.
 */

import {combineReducers} from 'redux';
import user from './userReducer';

const rootReducer = combineReducers({
    user
});

export default rootReducer;

