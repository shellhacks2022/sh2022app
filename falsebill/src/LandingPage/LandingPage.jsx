import { PlaidLink } from 'react-plaid-link';

import { Button } from 'react-bootstrap'
import React from 'react'

import './LandingPage.css'
import { Link } from 'react-router-dom';

function LandingPage() {

    const handleOnSuccess = () => {

    }

  return (
    <div className='landing-page'>
        <div className="content-center">
            <h1 className='title'>Falsebill</h1>
            <p className='slogan'>Stop using truebill this is better</p>
            <Link to='/summary'><Button large
            >
             Go to summary
            </Button>   </Link>         
        </div>
    </div>
  )
}

export default LandingPage