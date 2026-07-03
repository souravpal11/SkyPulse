import React from "react";

import {

WiDaySunny,
WiCloud,
WiRain,
WiSnow,
WiThunderstorm

} from "react-icons/wi";

const WeatherIcon=({code,size=100})=>{

if(code===0)
return <WiDaySunny size={size}/>

if(code<=3)
return <WiCloud size={size}/>

if(code>=61&&code<=67)
return <WiRain size={size}/>

if(code>=71&&code<=77)
return <WiSnow size={size}/>

if(code>=95)
return <WiThunderstorm size={size}/>

return <WiCloud size={size}/>

}

export default WeatherIcon;