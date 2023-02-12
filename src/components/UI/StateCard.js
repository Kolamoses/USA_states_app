import React from "react";
import land from '../../assets/imgs/land.png'
import population from '../../assets/imgs/population.png'
import rep from '../../assets/imgs/rep.png'
import date from '../../assets/imgs/date.png'

function StateCard(props) {  
    return ( 
        <React.Fragment>
        <div className="stateCard" >
        <div className="stateFlag" >
            <img src={props.flag} alt="flag" />
        </div>
        <div className="stateDetails" >
            <div className="stateHeadersContainer" >
                <div>
                    <div>
                        <span className="stateName" >{props.name}</span>
                    </div>
                    <div>
                        <span className="stateCapital" >{props.capital}</span>
                    </div>
                </div>
                <div>
                    <span className="abbrevationChip" >{props.abbreviation}</span>
                </div>
            </div>
        </div>
        <div className="stateAnalytics" >
            <div className="stateAnalyticsCon" >
                <div className="stateAnalyticsImgs" >
                    <img src={date} alt="date" />
                </div>
                <div>
                    <span className="stateAnalyticstext" >{props.ratification}</span>
                </div>
            </div>
            <div className="stateAnalyticsCon" >
                <div className="stateAnalyticsImgs" >
                    <img src={population} alt="population" />
                </div>
                <div>
                    <span className="stateAnalyticstext" >{props.population}</span>
                </div>
            </div>
            <div className="stateAnalyticsCon" >
                <div className="stateAnalyticsImgs" >
                    <img src={land} alt="land" />
                </div>
                <div>
                    <span className="stateAnalyticstext" >{props.totalarea} sqKm</span>
                </div>
            </div>
            <div className="stateAnalyticsCon" >
                <div className="stateAnalyticsImgs" >
                    <img src={rep} alt="rep" />
                </div>
                <div>
                    <span className="stateAnalyticstext" >{props.numberofreps}</span>
                </div>
            </div>
        </div>
        </div>
        </React.Fragment>
     );
}

export default StateCard;