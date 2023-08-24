import './today.css'

function Today(){
    return (
        <div className="today-board">
            <h1>Ho Chi Minh City</h1>
            <p>Wednessday 1 April</p>
            <div className="temp-board">
                <div className="icon"></div>
                <div>
                    <p style={{fontSize: '50px', margin:'0'}}>5°</p>

                    <p>Overcast Clouds</p>
                </div>
                
            </div>
        </div>
    )
}

export default Today