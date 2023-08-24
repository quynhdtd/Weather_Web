function DailyData ({day, wth, temp}) {
    return (
        <div className="daily-box">
            <p>{day}</p>
            <div className="weather-pic"></div>
            <p>{temp}</p>
        </div>
    )
}

export default DailyData