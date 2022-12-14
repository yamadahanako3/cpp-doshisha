import { Home, SignIn, SignUp, FailedAuth, Root, SendingMail, ResetPassword, EvaluateGoal, AddGoal, RecordNow, YearInReview, RecordMyself, InputFiveItems, EvaluateFiveItems, AboutCareerPassport, AbilityChart, Goal, CompleteCard, Complete, TeachersSignIn, Calendar, Profile, TeachersProfile, TeachersConsole,TheachersUserList, Survey } from './pages/index';
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
          <Route path='/evaluategoal' element={<EvaluateGoal />} />
          <Route path='/addgoal' element={<AddGoal />} />
          <Route path='/recordnow' element={<RecordNow />} />
          <Route path='/YearInReview' element={<YearInReview />} />
          <Route path='/InputFiveItems' element={<InputFiveItems />} />
          <Route path='/RecordMyself' element={<RecordMyself />} />
          <Route path='/evaluatefiveitems' element={<EvaluateFiveItems />} />
          <Route path='/aboutcareerpassport' element={<AboutCareerPassport />} />
          <Route path='/abilitychart' element={<AbilityChart />} />
          <Route path='/goal' element={<Goal />} />
          <Route path='/completecard' element={<CompleteCard />} />
          <Route path='/complete' element={<Complete />} />
          <Route path='/teacherssignin' element={<TeachersSignIn />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/TeachersProfile' element={<TeachersProfile />} />
          <Route path='/TeachersConsole' element={<TeachersConsole />} />
          <Route path='/TheachersUserList' element={<TheachersUserList />} />
          <Route path='/Survey' element={<Survey />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
