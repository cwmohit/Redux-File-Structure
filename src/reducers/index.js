import {combineReducers} from 'redux';
import {postList} from './postList';
export default combineReducers({
    posts:postList
});