
import './App.css';
import React , {useState, useEffect} from "react"
import Form from './components/Form.js'
import Output from './components/Output.js'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #caf0f8;
  }`

const Container = styled.div
  `
  display: grid;
  grid-template-columns: 25% 50% 25%;
  grid-template-rows: 30vh 40vh;
  justify-items: center;
  `

function App() {
  const [zip, setZip] = useState("");
  const [appState, setAppState] = useState({
    loading: true,
    weatherData: null,
  });

  useEffect(() => console.log(appState.weatherData));

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setZip('')
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=9ed68342d5c7db25c28b073aeae7a98b`
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const temp = Math.round((data.main.temp-273.15) * 9/5 + 32);
        setAppState({loading: false, weatherData : temp})})
      // .catch((err) => console.log(err));
      
}

  return (
    <Container className='container'>
      <GlobalStyle/>
     <Form onSubmit = {handleSubmit} onChange={e => {setZip(e.target.value)}} zip={zip}/>
     <Output loading={appState.loading} weatherData={appState.weatherData}/>
    </Container>
  );
}

export default App;
