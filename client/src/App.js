import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'


//import PrivateRoute from './components/PrivateRoute'

//screens
import LoginScreen from "./screens/Client/LoginScreen"
import RegisterScreen from "./screens/Client/RegisterScreen"
import ForgotPasswordScreen from "./screens/Client/ForgotPasswordScreen"
import ResetPasswordScreen from "./screens/Client/ResetPasswordScreen"
import Client_Home  from './screens/Client/Client_Home'
import Sys_Admin_Home from "./screens/System_Admin/Home"

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
           </Routes>
         </div>
     </Router>
    </div>
   
  )
}

export default App;
