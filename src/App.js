import { Home, SignIn, SignUp, FailedAuth, Root, SendingMail, ResetPassword, InputAbility, GoalAndEvaluation } from './pages/index';
import { AuthProvider } from './context/Authcontext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route exact path='/home' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/failedauth' element={<FailedAuth />} />
          <Route path='/' element={<Root />} />
          <Route path='/sendingmail' element={<SendingMail />} />
          <Route path='/resetpassword' element={<ResetPassword />} />
          <Route path='/inputability' element={<InputAbility />} />
          <Route path='/goalandevaluation' element={<GoalAndEvaluation />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
