import React from 'react'

import './TransactionTable.css';

function TransactionTableElement({data, handleOnRemove, calculateBudget}) {
    // console.log(data.data);
  const [isDeleted, setIsDeleted] = React.useState(false);

    const handleOnDelete = () => {
      setIsDeleted(true);
      handleOnRemove(data.id);
      calculateBudget();
  }

  return (
    <tr className={isDeleted ? 'hidden' : ''}>
        <td>{data?.name}</td>
        <td>{data?.createdAt}</td>
        <td>${data?.cost.toFixed(2)}</td>
        <td><span className="table-highlight" onClick={handleOnDelete}>Delete</span></td>
    </tr>
  )
}

export default TransactionTableElement