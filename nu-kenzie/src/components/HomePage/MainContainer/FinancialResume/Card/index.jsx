import React from 'react'
import './index.css'
import trashButton from './../../../../../img/trash.png'




const Card = ( { transaction, removeTransaction } ) => {
  return (
    // console.log(transaction)
    <li>
      <div className='card-container'>
          <div className='card-texts'>
              <h2>
                {transaction.description}
              </h2>
              <>
                {transaction.type}
              </>
          </div>
          <div className='card-amount-and-button'>
              <span>
                {transaction.amount}
              </span>
              <button onClick={() => removeTransaction(transaction.description)  } ><img src={trashButton} alt="" /></button>
          </div>
      </div>
    </li>
  )
}

export default Card