import React from 'react'
import styled from 'styled-components'
import { keyframes } from "styled-components"

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const fadeIn = keyframes `
from{
    opacity:0;
}
to{
    opacity:1;
}`

const P = styled.p `
animation: ${rotate} 2s linear infinite;`


const DataDiv = styled.div`
padding: 2em;
grid-column: 2/3;
grid-row: 3;
text-align: center;
`

const WeatherInfo = styled.h3`
animation : ${fadeIn} 1s 1;
`

function Output(props) {
   
    if (props.loading) return <DataDiv><P>☀️   🌩️   ❄️ </P></DataDiv>
    return (
        <DataDiv>
        <WeatherInfo>It's currently {props.weatherTemp} in {props.weatherCity}</WeatherInfo>
        <WeatherInfo>The high today will be {props.weatherHigh}</WeatherInfo>
        <WeatherInfo>The low today will be {props.weatherLow}</WeatherInfo>
      </DataDiv>
    
    )
}

export default Output


