import { useContext } from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {PlaidLink } from 'react-plaid-link';

import Header from "./Header/Header"
import LandingPage from './LandingPage/LandingPage';
import SubscriptionsPage from './SubscriptionsPage/SubscriptionsPage';
import SummaryPage from './SummaryPage/SummaryPage';

function App() {
  const [accessToken,setAccessToken] = useState();

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route exact path="/summary" element={<SummaryPage accessToken={accessToken}/>}/>
          <Route exact path="/subscriptions" element={<SubscriptionsPage accessToken={accessToken}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
