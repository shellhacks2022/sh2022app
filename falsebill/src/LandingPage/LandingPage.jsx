import { Button } from 'react-bootstrap'
import React from 'react'

import './LandingPage.css'

function LandingPage() {
  return (
    <div className='landing-page'>
        <div className="content-center">
            <h1 className='title'>Falsebill</h1>
            <p className='slogan'>Stop using truebill this is better</p>
            <Button>Get started!</Button>
        </div>
    </div>
  )
}

export default LandingPage