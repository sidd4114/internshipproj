import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/landingPage'; // Use uppercase 'LandingPage'
import Signin from './pages/Signin/Signin';
import EnterDetails from './pages/EnterDetails/EnterDetails';
import AccountSettings from './pages/AccountSettings/AccountSettings';

function App() {
  return (
    <div>
      <Routes>
        <Route  path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/details" element={<EnterDetails/>}/>
        <Route path="/settings" element={<AccountSettings/>}/>
      </Routes>
    </div>
  );
}

export default App;
