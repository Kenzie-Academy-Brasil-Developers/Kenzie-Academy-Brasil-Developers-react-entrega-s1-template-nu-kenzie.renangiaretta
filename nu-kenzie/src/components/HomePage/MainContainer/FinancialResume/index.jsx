import Card from './Card'
import './index.css'


const MoneyResume = ({ transactionsList, categoryList, removeTransaction, setFilter, filter }) => {
    return (

        <div className='list-container'>
            <div className="filter-container">
                <h2>Resumo Financeiro</h2>
                <div className="container-buttons">
                    <ul className='ul-categories'>
                        <li className='all' onClick={() => setFilter  ('todos') } >Todas</li> 
                        {categoryList.map((category, index) => (
                            <li className='categories' onClick={() => setFilter(category.value)} key={index}>{category.label}</li>
                            ))}



                    </ul>
                            {/* {filter} */}
                        {/* <button>
                            Todos
                        </button>
                        <button>
                            Entradas
                        </button>
                        <button>
                            Despesas
                        </button> */}
                </div>
            </div>

            <div className="cards-container">
                <h2>Você ainda não possui nenhum lançamento</h2>
                {/* <Card/> */}

                <ul className='ul-cards'>
                    {transactionsList.map((transaction, index) => (
                        <Card key={index} transaction={transaction} removeTransaction={removeTransaction} />
                    
                    ))}
                </ul>
            </div>


        </div>

    )
}

export default MoneyResume