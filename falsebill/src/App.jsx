import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from "./Header/Header"
import LandingPage from './LandingPage/LandingPage';
import SubscriptionsPage from './SubscriptionsPage/SubscriptionsPage';
import SummaryPage from './SummaryPage/SummaryPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route exact path="/summary" element={<SummaryPage/>}/>
          <Route exact path="/subscriptions" element={<SubscriptionsPage/>}/>
          
          <Route exact path="/login" element={<h1>Hello login</h1>}/> 
          <Route exact path="/register" element={<h1>Hello register</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
