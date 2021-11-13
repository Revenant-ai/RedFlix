import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './components/screens/System_Admin/Home';


//import PrivateRoute from './components/PrivateRoute'

//screens
// import PrivateRoute from "./components/screens/PrivateScreen"
// import PrivateRoute from "./components/screens/LoginScreen"
// import PrivateRoute from "./components/screens/RegisterScreen"
// import PrivateRoute from "./components/screens/ForgotPasswordScreen"
// import PrivateRoute from "./components/screens/ResetPasswordScreen"

const App=()=>{
  return (
    <Home/>
    // <Router>
    //     <div className="App">
    //     <Switch>
    //         <PrivateRoute exact path="/" component={PrivateScreen}/>
    //         <Route exact path="/login" component={LoginScreen}/>
    //         <Route exact path="/register" component={RegisterScreen}/>
    //         <Route exact path="/forgotpassword" component={ForgotPasswordScreen}/>
    //         <Route exact path="/passwordreset/:resetToken" component={ResetPasswordScreen}/>
    //       </Switch>
    //     </div>
    // </Router>
   
  )
}

export default App;
