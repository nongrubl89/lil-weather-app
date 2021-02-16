import React from 'react'

function Output(props) {
   
    if (props.loading) return <p>waiting for weather data</p>
    return (
        <div>
        <p>{props.weatherData}</p>
      </div>
    
    )
}

export default Output
