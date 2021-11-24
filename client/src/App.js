import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import PrivateScreen from './components/routing/PrivateRoute'


//import PrivateRoute from './components/PrivateRoute'

//screens
import PrivateRoute from "./components/screens/PrivateScreen"
import LoginScreen from "./components/screens/LoginScreen"
import RegisterScreen from "./components/screens/RegisterScreen"
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen"
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen"
import Client_Home  from './components/screens/Client/Client_Home'
import Sys_Admin_Home from "./components/screens/System_Admin/Home"
import TheaterAdminDashboard from "./components/screens/Theater_Admin/dashboard"

const App=()=>{
  return (
    <div>
      <Router>
         <div className="App">
         <Routes>
             <Route exact path="/login" element={<LoginScreen/>}/>
             <Route exact path="/register" element={<RegisterScreen/>}/>
             <Route exact path="/forgot-password" element={<ForgotPasswordScreen/>}/>
             <Route exact path="/" element={<Client_Home/>}/>
            <Route exact path="/passwordreset/:res_token" element={<ResetPasswordScreen/>}/>
            <Route exact path="/admin-dashboard" element={<Sys_Admin_Home/>}/>
            <Route exact path="/theater-dashboard" element={<TheaterAdminDashboard/>}/>
           </Routes>
         </div>
     </Router>
    </div>
   
  )
}

export default App;
