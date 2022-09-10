import React from 'react'
import Table from 'react-bootstrap/Table';
import TransactionTableElement from './TransactionTableElement';

function TransactionTable({transactionList, setTransactionList, calculateBudget}) {
  const handleOnRemove = (id) => {
    const idx = transactionList.findIndex(obj => {
      return obj.id === id;
    })

    let temp = transactionList;
    temp.splice(idx,1)
    setTransactionList(temp);
  }
  
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Detail</th>   
          <th>Billed at</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        {transactionList?.map((e, idx) => {
            return (
                <TransactionTableElement key={idx} calculateBudget={calculateBudget} handleOnRemove={handleOnRemove} data={e}/>
            )
        })}
      </tbody>
    </Table>
  );
}

export default TransactionTable;