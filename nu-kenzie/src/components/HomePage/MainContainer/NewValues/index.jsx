import { useState } from 'react'
import './index.css'
import Total from './Total'



const AddNewValues = ({ addTransaction, categoryList, }) => {
    
    const [formData, setFormData] = useState({
      description: '',
      amount: '',
      type: categoryList[0].value
    })
    
    function handleSubmit (event) {
        event.preventDefault()
        addTransaction(formData)
    }




    return (
        
        
        <>
        {/* <form action="" className='form' onSubmit={(event) => handleSubmit(event)} > */}
        <div className='form-container'>
        <form action="" className='form' onSubmit={handleSubmit} >

            <h2>Descrição</h2>
            <input className='input-description' type="text" placeholder='Digite aqui sua descrição' onChange={(event) => setFormData({...formData, description: event.target.value})} />
            <span>Ex: Compra de roupas</span>
            <div className="values-container">
                <div className="value"> 
                    <h2>Valor</h2>
                    <input className='input-value' type="text" onChange={(event) => setFormData({...formData, amount: event.target.value})} />
                </div>
                <div className="value-type">
                    <h2>Tipo de Valor</h2>
                    <select className='select-type' name="types" id="" onChange={(event) => setFormData({...formData, type: event.target.value})} >

                        {categoryList.map(category => (
                            <option key={category.value} value={category.value}>{category.label}</option>
                        ))}

                        {/* <option value="entry">
                            Entrada
                        </option>
                        <option value="expense">Saída</option> */}
                    </select>
                </div>
            </div>
            <button className='button-insert-value' type='sumbit'>Inserir Valor</button>
        </form>
        <Total/>
        </div>
        </>


    )
}

export default AddNewValues