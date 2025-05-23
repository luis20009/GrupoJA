import { useState } from "react";

const Button= ({label,count,setCount}) => {
  
  return (
    <div>
      <p>{label}: {count}</p>
      <button onClick={() => setCount(count + 1)}>{label}</button>
    </div>
  );
};

const App = () => {
  const [Positive, setPositive] = useState(0);
  const [Negative, setNegative] = useState(0);
  const [Neutral, setNeutral] = useState(0);
  const total = Positive + Negative + Neutral;
  const prom = (Positive+Negative)/2;
  const m_postive = (Positive/total)*100;
  if (total==0){
    return(
      <div>
            <h1>Bienvenido a las votaciones</h1>
      <Button label ='Positive' count={Positive} setCount={setPositive}/>
      <Button label ='Negative' count={Negative} setCount={setNegative}/>
      <Button label ='Neutral' count={Neutral} setCount={setNeutral}/>
      <h2>No hay votos</h2>
      </div>
    )
  }
  return (
    <div>
      <h1>Bienvenido a las votaciones</h1>
      <Button label ='Positive' count={Positive} setCount={setPositive}/>
      <Button label ='Negative' count={Negative} setCount={setNegative}/>
      <Button label ='Neutral' count={Neutral} setCount={setNeutral}/>
      <h2>Resultados</h2>
      <p>Total de votos : {total}</p>
      <p>Promedio de votos: {prom}</p>
      <p>Porcentaje de postivos : {m_postive}%  </p>
    </div>
  );
};

export default App;