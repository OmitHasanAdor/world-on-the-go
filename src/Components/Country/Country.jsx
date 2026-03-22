// import React, { use } from 'react';
import React, { useState } from 'react';
import './country.css'

const Country = ({ country,handleVisitedCountries,handleVisitedFlag }) => {

    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        // ###Basic

        // if (visited) {
        //     setVisited(false)
        // } else {
        //     setVisited(true)
        // }
        
        // ternary operator 1
        
        // visited ? setVisited(false) : setVisited(true)

        // ternary operator 2
        
        //  setVisited(visited ? false : true)

        // bang system 
        setVisited(!visited)
        handleVisitedCountries(country)

    }

    return (
        <div className={`country ${visited ? 'country-visited' :'country-not-visited'}`}>
            <h3>Name: {country.name.common}</h3>
            <div>
                <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            </div>
           <ul>
           
           </ul>
            <p>Population : {country.population.population}</p>
            <p>Area : {country.area.area} {country.area.area > 60000 ? "Big Country" : "Small Country"}</p>
            <button onClick={handleVisited} className='country'>{visited ? 'Visited' : 'Not Visited'}</button>
            <button className='country' onClick={()=>handleVisitedFlag(country)}>Add visited Flag</button>
        </div>
    );
};

export default Country;
