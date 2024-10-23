import React, { useState } from 'react';
import Home from '../Components/Home';

const Invoice = () => {
    const [items, setItems] = useState([{ title: "", description: "", qty: "", amount: "", total: "" }]);

    const handleInput = (e, indexLine) => {
        const { name, value } = e.target;
         const updatedItems = items.map((item, index) =>
             index === indexLine ? { ...item, [name]: value } : item   
        );
        setItems(updatedItems);
    };

    const handleAddRow = () => {
        setItems([...items, { items }]);
    };

    const qtyTotal = () => { 
        let sum = 0;
        for (let i = 0; i < items.length; i++){
            let qtyItem = items[i]
            sum += +qtyItem.qty || 0;
        }
        return sum
    };

    const amountTotal = () => { 
        let sum = 0;
        for (let i = 0; i < items.length; i++){
            let amountItem = items[i]
            sum += +amountItem.amount || 0;
        }
        return sum;
    };

    const total = () => {
        let sum = 0;
        for (let i = 0; i < items.length; i++){
            let totalItem = items[i]
            sum += +totalItem.qty * totalItem.amount || 0;
        }
        return sum;
    };
   


    return (
        <>
            {/* <Home /> */}
            <div className="container">
                <div className='p-5'></div>
                <div className='mt-5'>
                    <h1 className='text-center'>Invoice</h1>
                </div>
                <div>
                    <table className="table table-hover mt-5">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Total</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <input
                                            className='form-control'
                                            type="text"
                                            placeholder='Title'
                                            name='title'
                                            value={item.title}
                                            onChange={(e) => handleInput(e, index)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            className='form-control'
                                            type="text"
                                            placeholder='Description'
                                            name='description'
                                            value={item.description}
                                            onChange={(e) => handleInput(e, index)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            className='form-control'
                                            type="number"
                                            placeholder='Qty'
                                            name='qty'
                                            value={item.qty}
                                            onChange={(e) => handleInput(e, index)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            className='form-control'
                                            type="number"
                                            placeholder='Amount'
                                            name='amount'
                                            value={item.amount}
                                            onChange={(e) => handleInput(e, index)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            className='form-control'
                                            type="text"
                                            placeholder='Total'
                                            value={item.qty ? item.qty * item.amount : 0}
                                            readOnly
                                        />
                                    </td>
                                    <td>
                                        <div className="d-flex">
                                            {/* <button
                                                className='btn btn text-danger' 
                                            >
                                                <i className="fa-solid fa-trash-can"></i>
                                            </button> */}
                                            
                                            {index === items.length - 1 && (
                                                <button
                                                    className='btn btn text-primary'
                                                    onClick={handleAddRow}
                                                >
                                                    <i className="fa-solid fa-plus"></i>
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <th>Total</th>
                                <td></td>
                                <td>{qtyTotal()}</td>
                                <td>{amountTotal()}</td>
                                <td>{total()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Invoice;
