import {actionTypes} from "../actions";

const initialState = {
    weatherTasks: [],
    weatherTask: {},

}
export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.WEATHER_ITEM:
            return {
                ...state,
                weatherTasks: action.payload
            }



            case actionTypes.CLEAR: //stateleri sıfırlamak için
            return {
                ...state,
                weatherTasks: [],
                weatherTask: {},
            }


        default:
            return state;
    }
}