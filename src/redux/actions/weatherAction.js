import {actionTypes} from "./index";
import axios from "axios";

export const weatherItem = (city) => (dispatch) =>{


    axios
        .get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=98390fa28fc9048167e42fc1a2ce1fa4`)
        .then(weather => {
            const lat = weather.data[0].lat;
            const lon = weather.data[0].lon;

            axios
                .get(`https://api.openweathermap.org/data/2.5/forecast?appid=98390fa28fc9048167e42fc1a2ce1fa4&q&units=metric&lat=${lat}&lon=${lon}`)
                .then((tasks)=>{
                    dispatch({
                        type:actionTypes.WEATHER_ITEM,
                        payload:tasks.data //burası önemli burada datayı alıyoruz ve payloada atıyoruz.
                    });
                })
                .catch(err => console.log(err)) //hata olursa konsola yazdır
        })
        .catch(console.log)
}