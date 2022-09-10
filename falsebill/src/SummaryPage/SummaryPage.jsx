import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { Button, Modal, Form, ProgressBar } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import {Navigate} from 'react-router-dom';
import TransactionTable from '../TransactionTable/TransactionTable'
import './SummaryPage.css'
function SummaryPage({accessToken}) {
    const [budget,setBudget] = React.useState(60);
    const [usedBudget, setUsedBudget] = React.useState(0);
    
    const newBudgetForm = useRef();

    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    const handleOnNewBudget = () => {
        setBudget(parseFloat(newBudgetForm.current.value));
        setShow(false);
    }

    const [transactionList,setTransactionList] = useState([
    {   id: 0,
        cost: 12.50,
        name: "Netflix",
        createdAt: '10-5-5'},
    {   id: 1,
        cost: 10.50,
        name: "Amazon Prime",
        createdAt: '10-5-5'},
    {   id: 2,
        cost: 15.50,
        name: "Patreon",
        createdAt: '9-10-22'},
    {   id: 3,
        cost: 9.99,
        name: "Spotify",
        createdAt: '10-5-5'},
    {   id: 4,
        cost: 5.99,
        name: "Youtube Music",
        createdAt: '10-5-5'},]);

    const calculateBudget = () => {
        setUsedBudget(0);
        transactionList.map((e) => {
            setUsedBudget((prev) => prev + e.cost)
        });
    }

    useEffect(() => {
        calculateBudget();
    },[]);

    const nowPercentage = Math.min((usedBudget/budget)*100,100);

    return (
      <div className='summary-page'>
        <div className="content">
            {(usedBudget > budget) && <Alert variant={'danger'}>
                You have gone over your budget this month!
            </Alert>}

            
            <div className="heading summary-heading">
                
                <div className="section">
                <h1>Summary</h1>
                <h4>Total budget ${budget.toFixed(2)}</h4>
                <h4>Total used ${usedBudget.toFixed(2)}</h4>
                </div>
                <div className="section">
                    <Button onClick={() => handleShow('md-down')}>Set budget</Button> <Button>Delete</Button>
                </div>
            </div>
            
            <div className="progressbar-container">
                <ProgressBar variant={(usedBudget/budget)*100 > 85 ? 'danger' : 'info'} now={nowPercentage} label={`${nowPercentage.toFixed(0)}%`} />
            </div>

            <TransactionTable calculateBudget={calculateBudget} transactionList={transactionList} setTransactionList={setTransactionList}/>
            {/* modal */}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                <Modal.Title>Set new budget</Modal.Title>
                </Modal.Header>
                <Modal.Body>Please input new budget<br></br>
                    <Form.Group className="mb-3" controlId="formBudget">
                        <Form.Label>New Budget</Form.Label>
                        <Form.Control type="number" ref={newBudgetForm} placeholder="1234" />
                    </Form.Group>
                    <Button onClick={(e) => handleOnNewBudget()} variant="primary" type="submit">
                        Submit
                    </Button>
                </Modal.Body>
            </Modal>
        </div>
    </div>
  )
}

export default SummaryPage