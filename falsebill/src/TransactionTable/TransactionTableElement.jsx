import React from 'react'

function TransactionTableElement({data}) {
    // console.log(data.data);
  return (
    <tr>
        <td>{data?.id}</td>
        <td>{data?.name}</td>
        <td>{data?.createdAt}</td>
        <td>{data?.cost}</td>
    </tr>
  )
}

export default TransactionTableElement