import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setRotate(state => state === 354 ? 0 : state + 6);
    }, 1000);
  }, [rotate]);

  return (
    <div className="App">
      <header className="App-header">
        <h1> {rotate.toString()} </h1>
        <div className="relogio">
          <div className="riscos">
            <div className="risco" style={{ transform: "rotate(0deg)" }}>
              <div className="ponto"></div>
              <div className="ponto"></div>
            </div>
            <div className="risco" style={{ transform: "rotate(45deg)" }}>
              <div className="ponto"></div>
              <div className="ponto"></div>
            </div>
            <div className="risco" style={{ transform: "rotate(90deg)" }}>
              <div className="ponto"></div>
              <div className="ponto"></div>
            </div>
            <div className="risco" style={{ transform: "rotate(135deg)" }}>
              <div className="ponto"></div>
              <div className="ponto"></div>
            </div>
          </div>
          <div className="area-ponteiro">
            <div className="ponteiro" style={{ rotate: `${rotate + 90}deg` }}>
              <div className='ponta'></div>
            </div>
            <div className="encaixe"></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
