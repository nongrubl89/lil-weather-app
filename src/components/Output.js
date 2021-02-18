import React from 'react'
import styled from 'styled-components'

const DataDiv = styled.div`
grid-column: 2/3;
grid-row: 2;
`

function Output(props) {
   
    if (props.loading) return <DataDiv><p>waiting for weather data</p></DataDiv>
    return (
        <DataDiv>
        <h3>It's {props.weatherTemp} in {props.weatherCity}</h3>
        <h3>The high today will be {props.weatherHigh}</h3>
        <h3>The low today will be {props.weatherLow}</h3>
      </DataDiv>
    
    )
}

export default Output


