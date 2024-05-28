export const DayForecast = ({day, sky, temDay, temNight}) => {
    return <div className="day-forecast">
        <div className="day-forecast__header">{day}</div>
        <div className="day-forecast__body">
            <div className={"day-forecast__image weather-" + sky}>
            </div>
            <div className="day-forecast__temps">
                <span className="temp-day">{temDay}</span>
                <span className="temp-night">{temNight}</span>
            </div>
        </div>
    </div>
}