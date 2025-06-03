import './App.css';
import Weather from "./Weather";


function App() {
  return (
    <div className="App">
    <div className="container">
      <Weather defaultCity="Madrid" />
   <footer>Coded by Ida Friis-Mikkelsen, hosted on <a href="https://github.com/Ifriism/react-weather-app" rel="noopener">GitHub</a> and open-sourced on <a href="https://weatherfrenzy.netlify.app/" rel="noopener">Netlify</a></footer>
  </div>
  </div>
  );
}

export default App;
