import './daily.css'
import DailyData from './DailyData'

function Daily(){
    return (
        <div className="daily-board">
            <h1>This week</h1>
            <div className="daily-info">
                <DailyData 
                    day={"Monday"}
                    temp={4}
                />
                <DailyData 
                    day={"Tuesday"}
                    temp={4}
                />
                <DailyData 
                    day={"Wednessday"}
                    temp={4}
                />
                <DailyData 
                    day={"Thursday"}
                    temp={4}
                />
                <DailyData 
                    day={"Friday"}
                    temp={4}
                />
                <DailyData 
                    day={"Saturday"}
                    temp={4}
                />
                <DailyData 
                    day={"Sunday"}
                    temp={4}
                />
            </div>
        </div>
    )
}

export default Daily