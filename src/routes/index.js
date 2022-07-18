import  { Switch} from 'react-router-dom';
import Signin from '../pages/Signin';
import SignUp from '../pages/SingUp';
import Dashboard from '../pages/Dashboard';
import  Route from './Route';

export default function Routes () {
    return (
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route exact path="/register" component={SignUp} />
          <Route exact path="/dashboard" component={Dashboard} isPrivate/>
         </Switch>
    )
}