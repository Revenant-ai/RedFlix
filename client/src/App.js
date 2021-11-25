import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'


//import PrivateRoute from './components/PrivateRoute'

//screens

<<<<<<< HEAD
=======

>>>>>>> wip
import LoginScreen from "./screens/Client/LoginScreen"
import RegisterScreen from "./screens/Client/RegisterScreen"
import ForgotPasswordScreen from "./screens/Client/ForgotPasswordScreen"
import ResetPasswordScreen from "./screens/Client/ResetPasswordScreen"
import Sys_Admin_Home from "./screens/System_Admin/Home"
<<<<<<< HEAD
import TheaterAdminDashboard from "./screens/Theater_Admin/dashboard"
=======
import TheaterAdminDashboard from "./screens/TheaterAdmin/dashboard"
import ScreenArrangement from './screens/TheaterAdmin/ScreenArrangement'
import Client_Home from './screens/Client/Client_Home'

>>>>>>> wip

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
            <Route exact path="/theater-screenArrangement" element={<ScreenArrangement/>}/>
           </Routes>
         </div>
     </Router>
    </div>
   
  )
}

export default App;
