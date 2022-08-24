import { Home, SignIn, SignUp, FailedAuth, Root, SendingMail, ResetPassword, InputAbility } from './pages/index';
import { AuthProvider } from './context/Authcontext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route exact path='/' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/failedauth' element={<FailedAuth />} />
          <Route path='/root' element={<Root />} />
          <Route path='/sendingmail' element={<SendingMail />} />
          <Route path='/resetpassword' element={<ResetPassword />} />
          <Route path='/inputability' element={<InputAbility />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
