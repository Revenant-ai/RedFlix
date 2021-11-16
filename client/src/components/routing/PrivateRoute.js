import {Navigate,Route} from 'react-router-dom'

const PrivateRoute = ({component: Component,...rest}) => {
    return (
        <Route
        {...rest}
        render={props =>
            localStorage.getItem('authToken') ? (
                <Component {...props} />
            ) : (
                <Navigate to={{pathname: '/login', state: {from: props.location}}} />
            )}
        />
    )
}

export default PrivateRoute
