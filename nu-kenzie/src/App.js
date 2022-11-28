import { useState } from 'react';
import './App.css';
import { categoryData, transactionsData } from './data/data';
import HomePage from './pages/home';
import Index from './pages/Index'
import './pages/Index/index.css'


export const App = () => {
  const [login, setLogin] = useState(true)
  const [categoryList, setCategoryList] = useState(categoryData)
  const [transactionsList, setTransactionList] = useState(transactionsData)
  const [filter, setFilter] = useState('todos')

  const filteredTransactionsList = transactionsList.filter(transaction => filter === 'todos' ? true : transaction.type === filter)



  function addTransaction (transactionsData) {
    setTransactionList([...transactionsList, transactionsData])
  }

  function removeTransaction (transactionName) {
    const newList = transactionsList.filter(transaction => transaction.description !== transactionName)
    setTransactionList(newList)
  }


  // const categoryList = [
  //   {
  //     label: 'Entradas',
  //     value: 'entradas'
  //   },
  //   {
  //     label: 'Saídas',
  //     value: 'saidas'
  //   }
  // ]


  // const transactionsList = [
  //   {
  //     description: 'Salário',
  //     amount: '1500,00',
  //     type: 'Entrada'
  //   },
  //   {
  //     description: 'Prostitutas',
  //     amount: '600,00',
  //     type: 'Saída'
  //   },
  //   {
  //     description: 'Drogas',
  //     amount: '500,00',
  //     type: 'Saída'
  //   },
  //   {
  //     description: 'Freelas',
  //     amount: '800,00',
  //     type: 'Entrada'
  //   }
  // ]





  return (
    <div className="App">

    {login ? (<Index setLogin={setLogin}/>) : (<HomePage  setLogin={setLogin} transactionsList= {filteredTransactionsList} categoryList={categoryList} addTransaction ={addTransaction } removeTransaction={removeTransaction} setFilter={setFilter} filter={filter} />)}

    {/* <HomePage  setLogin={setLogin} transactionsList={transactionsList} categoryList={categoryList} addTransaction ={addTransaction }  /> */}


    </div>
  );
}

export default App;
