import React from 'react'
import TransactionTable from '../TransactionTable/TransactionTable'

function SummaryPage() {
  return (
    <div>
        <div className="content">
            <div className="heading">
                <h1>Summary</h1>
            </div>

            <TransactionTable/>
        </div>
    </div>
  )
}

export default SummaryPage