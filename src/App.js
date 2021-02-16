
import './App.css';
import React , {useState, useEffect} from "react"
import Form from './components/Form.js'
import Output from './components/Output.js'

function App() {
  const [zip, setZip] = useState("");
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('submitted')
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=9ed68342d5c7db25c28b073aeae7a98b`
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAppState({loading: false, repos : data}))
      .catch((err) => console.log(err));
}

  return (
    <div>
     <Form onSubmit = {handleSubmit} onChange={e => {setZip(e.target.value)}} zip={zip}/>
     <Output />
    </div>
  );
}

export default App;
