import './styles.css';
import Infocomponent from './components/Infocomponent';
import Aboutcomponent from './components/Aboutcomponent';
import Interestscomponent from './components/Interestscomponent';


function App() {
  return (
    <div className="App">
      <Infocomponent />
      <Aboutcomponent />
      <Interestscomponent />
    </div>
  );
}

export default App;
