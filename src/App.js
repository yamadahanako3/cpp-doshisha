import { Home, SignIn, SignUp, FailedAuth, Root, SendingMail, ResetPassword, InputAbility, GoalAndEvaluation, InputGoal, EvaluateGoal, AddGoal, RecordNow, YearInReview, RecordMyself, InputFiveItems, EvaluateFiveItems } from './pages/index';
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
          <Route path='/goalandevaluation' element={<GoalAndEvaluation />} />
          <Route path='/evaluategoal' element={<EvaluateGoal />} />
          <Route path='/addgoal' element={<AddGoal />} />
          <Route path='/recordnow' element={<RecordNow />} />
          <Route path='/YearInReview' element={<YearInReview />} />
          <Route path='/InputFiveItems' element={<InputFiveItems />} />
          <Route path='/RecordMyself' element={<RecordMyself />} />
          <Route path='/evaluatefiveitems' element={<EvaluateFiveItems />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
