import Layout from '../Layout';
import BettorRoute from '../../../shared/components/Route';

BettorRoute.Layout = Layout;
BettorRoute.redirectAuthTo = '/profile';
BettorRoute.redirectGuestTo = '/login';

export default BettorRoute;
