import { createSwitchNavigator } from 'react-navigation';
import Home from './screens/Home';
import Details from './screens/Details';

export default createSwitchNavigator({
    Home: Home,
    Details: Details
});