import './index.css'
import React from 'react'
import Header from './../../components/HomePage/Header'
import HomeMainContainer from './../../components/HomePage/MainContainer'

export const HomePage = ({ setLogin, transactionsList, categoryList, addTransaction, removeTransaction, setFilter, filter  }) => {
    return (
        <div className='home-page'>

            <Header setLogin={setLogin}/>
            <HomeMainContainer transactionsList={transactionsList} categoryList={categoryList} addTransaction ={addTransaction} removeTransaction={removeTransaction} setFilter={setFilter} filter={filter} />

        </div>

    )
}

export default HomePage