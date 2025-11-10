import './App.css';
import { BrowserRouter as Router , Routes ,Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import SearchSchool from './components/SearchSchool';
import Verify from './components/Verify';
import Payment from './components/Payment';
import Processing from './components/Processing';
import PinInput from './components/Auth/Verification';
import Receipt from './components/receipt';


function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route path='/' element = {<Dashboard/>}/>
              <Route path='/Dashboard' element = {<Dashboard/>}/>
              <Route path='/Search' element={<SearchSchool/>}/>
              <Route path='/Verify' element={<Verify/>}/>
              <Route path='/Payment' element={<Payment/>}/>
              <Route path='/Processing' element={<Processing/>}/>
              <Route path='/verification' element={<PinInput/>}/>
              <Route path='/receipt' element={<Receipt/>}/>
          </Routes>
      </Router>
    </>
  )
}


export default App
