import Login from "./Components/Login"
import Registration from "./Components/Registration"
import Home from "./Components/Home"
import ForgetPassword from './Components/ForgetPassword';
import ResetPassword from './Components/ResetPassword';
import { Routes,Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="registration" element={<Registration/>}/>
        <Route path="forgetPassword" element={<ForgetPassword/>}/>
        <Route path="resetPassword" element={<ResetPassword/>}/>
      </Routes>
    </div>
  );
}

export default App;
