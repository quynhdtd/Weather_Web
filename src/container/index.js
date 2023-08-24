import './container.css'

import Today from './Today';
import Detail from './Detail';
import Daily from './Daily';

function Container(){
    return(
        <div className="container">
            <div className='weather-detail'>
                <Today/>
                <Detail/>
            </div>
            <Daily/>
        </div>
    )
}

export default Container