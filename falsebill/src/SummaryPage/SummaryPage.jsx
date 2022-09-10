import React from 'react'
import TransactionTable from '../TransactionTable/TransactionTable'

function SummaryPage() {
    const transactionList = [
        {id: 3,
        cost: 30,
        name: "hola",
        createdAt: '10-5-5'}]
  return (
    <div>
        <div className="content">
            <div className="heading">
                <h1>Summary</h1>
            </div>

            <TransactionTable transactionList={transactionList}/>
        </div>
    </div>
  )
}

export default SummaryPage