import Layout from '../Layout';
import AdminRoute from '../../../shared/components/Route';

AdminRoute.Layout = Layout;
AdminRoute.redirectAuthTo = '/admin/dashboard';
AdminRoute.redirectGuestTo = '/admin';

export default AdminRoute;
