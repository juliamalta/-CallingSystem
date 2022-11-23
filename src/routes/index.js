import  { Switch} from 'react-router-dom';
import Signin from '../pages/Signin';
import SignUp from '../pages/SingUp';
import Dashboard from '../pages/Dashboard';
import Profile from "../pages/Profile";
import New from '../pages/New';
import Customers from '../pages/Customers';
import Logout from '../pages/Logout';
import  Route from './Route';

export default function Routes () {
    return (
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route exact path="/register" component={SignUp} />
          <Route exact path="/dashboard" component={Dashboard} isPrivate/>
          <Route exact path="/profile" component={Profile} isPrivate/>
          <Route exact path="/customers" component={Customers} isPrivate/>
          <Route exact path="/new" component={New} isPrivate/>
          <Route exact path="/logout" component={Logout} isPrivate/>
         </Switch>
    )
}