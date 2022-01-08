import './App.css';
import AboveScreen from './components/AboveScreen/AboveScreen';
import Screen from './components/Screen/Screen'
import BelowScreen from './components/BelowScreen/BelowScreen';
import Footer from './components/Footer/Footer';


function App() {
  


  return (
    <div className="App">
      <AboveScreen />
      <Screen />
      <BelowScreen />
      <Footer />
    </div>
  );
}

export default App;
