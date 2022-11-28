import MoneyResume from './FinancialResume'
import AddNewValues from './NewValues'
import './index.css'

const HomeMainContainer = ({ transactionsList, categoryList, addTransaction, removeTransaction, setFilter, filter  }) => {
    return(
        <div className="home-main-container">
            <AddNewValues addTransaction ={addTransaction} categoryList={categoryList} />
            <MoneyResume transactionsList={transactionsList} categoryList={categoryList} removeTransaction={removeTransaction} setFilter={setFilter} filter={filter} />
        </div>
    )
}

export default HomeMainContainer
