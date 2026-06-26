import logo from './logo.svg';
import './App.css';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';

function App() {
  return (
    <div className="App">
      <main className='py-11 justify-center items-center'>
        <Section1 />
        <Section2 />
      </main>
    </div>
  );
}

export default App;
