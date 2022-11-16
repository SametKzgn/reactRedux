import {Wrapper,Items,Img,Div,P,H,Ul,Detail,Input} from "./style";
import {weatherItem} from "../redux/actions/weatherAction";
import {useDispatch, useSelector} from "react-redux";
import {FaSearch} from "react-icons/fa";
import {useEffect} from "react";


function Weather() {

    const dispatch = useDispatch();
    const {weatherTasks}=useSelector((state)=>state.weatherr) // amk copolıtuna dıkakt et her seferınde aynısı oluyor amk weartherin yanına bısı eklıo ekletme

    useEffect(() => {
        dispatch(weatherItem("reyhanlı")); //burada action a gidiyor ve reducer a gidiyor ve reducer da state i degistiriyor ve burada degistiriyor

        return () => { //component ekrandan kalkacağı zaman çalışacak olan alan
            dispatch({type: 'CLEAR'}) //dispatch ile state'i temizliyor
        }
    }, [])
    console.log(weatherTasks)
    return (
        <Wrapper>

            <button className="btn-search"> <FaSearch/></button>
            <input type="text" className="input-search" placeholder="Type to Search..."/>

    <Items>

                <Img src={` http://openweathermap.org/img/wn/${weatherTasks?.list?.[0]?.weather?.[0]?.icon}@4x.png` }/>
                <Div>
                    <P>Today</P>
                    <H>{weatherTasks?.city?.name}</H>
                    <P> { Math.round(weatherTasks?.list?.[0]?.main?.temp) }° </P>
                    <P> {weatherTasks?.list?.[0]?.weather?.[0]?.description }</P>
                </Div>
            </Items>
            <Ul>
                <li>
                    <Detail>
                        <p>{weatherTasks?.list?.[0]?.dt_txt}</p>
                        <img src={` http://openweathermap.org/img/wn/${weatherTasks?.list?.[0]?.weather?.[0]?.icon}@2x.png` } />
                        <P> { Math.round(weatherTasks?.list?.[0]?.main?.temp) }°C </P>
                    </Detail>
                </li>
                <li>
                    <Detail>
                        <p>{weatherTasks?.list?.[1]?.dt_txt}</p>
                        <img src={` http://openweathermap.org/img/wn/${weatherTasks?.list?.[1]?.weather?.[0]?.icon}@2x.png` }/>
                        <P> { Math.round(weatherTasks?.list?.[1]?.main?.temp) }°C </P>
                    </Detail>
                </li>
                <li>
                    <Detail>
                        <p>{weatherTasks?.list?.[2]?.dt_txt}</p>
                        <img src={` http://openweathermap.org/img/wn/${weatherTasks?.list?.[2]?.weather?.[0]?.icon}@2x.png` }/>
                        <P> { Math.round(weatherTasks?.list?.[2]?.main?.temp) }°C </P>
                    </Detail>
                </li>
                <li>
                    <Detail>
                        <p>{weatherTasks?.list?.[3]?.dt_txt}</p>
                        <img src={` http://openweathermap.org/img/wn/${weatherTasks?.list?.[3]?.weather?.[0]?.icon}@2x.png` }/>
                        <P> { Math.round(weatherTasks?.list?.[3]?.main?.temp) }°C </P>
                    </Detail>
                </li>
            </Ul>
        </Wrapper>
    );
}

export default Weather;