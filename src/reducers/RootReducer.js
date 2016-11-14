import { combineReducers } from 'redux';
import departures from './DeparturesReducer';
import service from './TrainCallingPointsReducer';

export default combineReducers({
    departures,
    service
});