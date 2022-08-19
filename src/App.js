import { Home, SignIn, SignUp } from './pages/index';
import { AuthProvider } from './context/Authcontext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/' element={<SignIn />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
