import {forecast} from "../forecast.js"
import {DayForecast} from "./DayForecast.jsx"

export const WeekForcast = () => {
    return forecast.map((day) =>
        <DayForecast day={day.weekday} sky={day.weather} temDay={day.tempDay} temNight={day.tempNight}/>
    )
}