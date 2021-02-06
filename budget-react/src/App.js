import React, {useState, useEffect} from 'react';
import Header from './components/Header';

function App() {

  const [income, setIncome] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);



  return (
    <div className="App">
      <Header totalIncome = {totalIncome} />
    </div>
  );
}

export default App;
