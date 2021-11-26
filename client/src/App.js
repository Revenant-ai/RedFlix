import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'


//import PrivateRoute from './components/PrivateRoute'

//screens



import LoginScreen from "./screens/Client/LoginScreen"
import RegisterScreen from "./screens/Client/RegisterScreen"
import ForgotPasswordScreen from "./screens/Client/ForgotPasswordScreen"
import ResetPasswordScreen from "./screens/Client/ResetPasswordScreen"
import Sys_Admin_Home from "./screens/System_Admin/Home"
import TheaterAdminDashboard from "./screens/Theater_Admin/dashboard"
import ScreenArrangement from "./screens/Theater_Admin/ScreenArrangement"
import Client_Home from './screens/Client/Client_Home'
import Manage_shows from './screens/Theater_Admin/manage_shows'
import Manage_screen from './screens/Theater_Admin/manage_screen'

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
            <Route exact path="/theater-show" element={<Manage_shows/>}/>
            <Route excat path="/theater-screen" element={<Manage_screen/>}/>
           </Routes>
         </div>
     </Router>
    </div>
   
  )
}

export default App;
