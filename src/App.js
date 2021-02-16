
import './App.css';
import React , {useState, useEffect} from "react"
import Form from './components/Form.js'
import Output from './components/Output.js'

function App() {
  const [zip, setZip] = useState("");
  const [appState, setAppState] = useState({
    loading: true,
    weatherData: null,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // setAppState({loading: true})
    console.log('submitted')
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=9ed68342d5c7db25c28b073aeae7a98b`
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.main.temp);
        setAppState({loading: false, weatherData : data.main.temp})})
      .catch((err) => console.log(err));
}

  return (
    <div>
     <Form onSubmit = {handleSubmit} onChange={e => {setZip(e.target.value)}} zip={zip}/>
     <Output loading={appState.loading} weatherData={appState.weatherData}/>
    </div>
  );
}

export default App;
