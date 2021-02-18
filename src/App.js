
import './App.css';
import React , {useState, useEffect} from "react"
import Form from './components/Form.js'
import Output from './components/Output.js'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #caf0f8;
    font-family: "Inconsolata";
  }`

const Container = styled.div
  `
  display: grid;
  grid-template-columns: 25% 50% 25%;
  grid-template-rows: 20vh 10vh 40vh;
  justify-items: center;
  `
const Greeting = styled.h3 `
grid-row:1;
grid-column: 2/3;
display: grid;
align-content: end;
padding: 1em;`

function App() {
  const [zip, setZip] = useState("");
  // const [backgroundColor, setBackgroundColor]= useState('');
  const [timeOfDay, setTimeOfDay] = useState('');
  const [appState, setAppState] = useState({
    loading: true,
    weatherTemp: null,
    weatherHigh: null,
    weatherLow: null,
    weatherCity: null,
  });

  
  
  useEffect(() => {
    let d = new Date(); 
    const time = d.getHours();
    console.log(time);
    if(time >=3 && time <12){
      setTimeOfDay('Morning')
    } else if (time >=12 && time <17){
      setTimeOfDay('Afternoon')
    } else if (time >=18 && time <= 2){
      setTimeOfDay('Evening');
    }
    });

  
  
    const convertTemp= (num) => {
  return Math.round((num - 273.15) * 9 / 5 + 32) + '°';
}

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setZip('')
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=9ed68342d5c7db25c28b073aeae7a98b`
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // const temp = Math.round((data.main.temp-273.15) * 9/5 + 32);
        setAppState({loading: false, 
                      weatherTemp : convertTemp(data.main.temp), 
                      weatherCity: data.name, 
                      weatherHigh: convertTemp(data.main.temp_max), 
                      weatherLow: convertTemp(data.main.temp_min)})})
      .catch((err) => console.log(err));
      
}

  return (
    <Container className='container'>
      <Greeting>Good {timeOfDay}</Greeting>
      <GlobalStyle/>
     <Form onSubmit = {handleSubmit} onChange={e => {setZip(e.target.value)}} zip={zip}/>
     <Output loading={appState.loading} weatherTemp={appState.weatherTemp} weatherCity={appState.weatherCity} weatherHigh={appState.weatherHigh} weatherLow={appState.weatherLow}/>
    </Container>
  );
}

export default App;
