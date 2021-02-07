import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import IncomeForm from './components/incomeForm';

function App() {

  const [income, setIncome] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);



  return (
    <div className="App">
      <Header totalIncome = {totalIncome} />
      <IncomeForm income={income} setIncome={setIncome}/>

      {(income.length > 0) ? income[0].desc : ''}
    </div>
  );
}

export default App;
