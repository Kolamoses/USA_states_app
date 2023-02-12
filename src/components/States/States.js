import React from "react";
import StateCard from "../UI/StateCard";
import data from "../../states.json"


function States() {
    return ( 
        <React.Fragment>
        <div className="statecardContainer" >
         {data.states.map((state) =>{
            return (
                <StateCard 
                flag={state.flag}
                name={state.name}
                capital={state.capital}
                abbreviation={state.abbreviation}
                ratification={state.ratification}
                population={state.population}
                totalarea={state.totalarea}
                numberofreps={state.numberofreps}
                />
            )
        })

        }
           
        </div>
        </React.Fragment>
     );
}

export default States;