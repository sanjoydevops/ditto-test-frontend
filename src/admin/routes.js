import { lazy } from 'react';

const AboutUs = lazy(() => import('./pages/AboutUs'));
const AboutUsDetail = lazy(() => import('./pages/AboutUsDetail'));
const AboutUsForm = lazy(() => import('./pages/AboutUsForm'));
const AddRestrictedLocation = lazy(() => import('./pages/AddRestrictedLocation'));
const AdminDetail = lazy(() => import('./pages/AdminDetail'));
const AdminForm = lazy(() => import('./pages/AdminForm'));
const Admins = lazy(() => import('./pages/Admins'));
const BetDetail = lazy(() => import('./pages/BetDetail'));
const Bets = lazy(() => import('./pages/Bets'));
const ChangePassword = lazy(() => import('./pages/ChangePassword'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const ContactUsDetail = lazy(() => import('./pages/ContactUsDetail'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const FrequentlyAskedQuestionDetail = lazy(() => import('./pages/FrequentlyAskedQuestionDetail'));
const FrequentlyAskedQuestionForm = lazy(() => import('./pages/FrequentlyAskedQuestionForm'));
const FrequentlyAskedQuestions = lazy(() => import('./pages/FrequentlyAskedQuestions'));
const JoinedUserReport = lazy(() => import('./pages/JoinedUserReport'));
const Login = lazy(() => import('./pages/Login'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ReferralReport = lazy(() => import('./pages/ReferralReport'));
const Referrals = lazy(() => import('./pages/Referrals'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));
const RestrictedLocations = lazy(() => import('./pages/RestrictedLocations'));
const RoleDetail = lazy(() => import('./pages/RoleDetail'));
const RoleForm = lazy(() => import('./pages/RoleForm'));
const Roles = lazy(() => import('./pages/Roles'));
const TeamDetail = lazy(() => import('./pages/TeamDetail'));
const Teams = lazy(() => import('./pages/Teams'));
const TopWinnerReport = lazy(() => import('./pages/TopWinnerReport'));
const Transactions = lazy(() => import('./pages/Transactions'));
const UserDetail = lazy(() => import('./pages/UserDetail'));
const Users = lazy(() => import('./pages/Users'));
const VideoTutorialDetail = lazy(() => import('./pages/VideoTutorialDetail'));
const VideoTutorialForm = lazy(() => import('./pages/VideoTutorialForm'));
const VideoTutorials = lazy(() => import('./pages/VideoTutorials'));

const routes = [
  {
    component: Login,
    exact: true,
    layout: false,
    path: '/admin',
    type: 'guest',
  },
  {
    component: AboutUs,
    exact: true,
    path: '/admin/about-us',
    type: 'auth',
  },
  {
    component: AboutUsDetail,
    exact: true,
    path: '/admin/about-us-detail/:aboutUsId',
    type: 'auth',
  },
  {
    component: AddRestrictedLocation,
    exact: true,
    path: '/admin/add-restricted-location',
    type: 'auth',
  },
  {
    component: AdminDetail,
    exact: true,
    path: '/admin/admin-detail/:adminId',
    type: 'auth',
  },
  {
    component: Admins,
    exact: true,
    path: '/admin/admins',
    type: 'auth',
  },
  {
    component: BetDetail,
    exact: true,
    path: '/admin/bet-detail/:betId',
    type: 'auth',
  },
  {
    component: Bets,
    exact: true,
    path: '/admin/bets',
    type: 'auth',
  },
  {
    component: ChangePassword,
    exact: true,
    path: '/admin/change-password',
    type: 'auth',
  },
  {
    component: ContactUs,
    exact: true,
    path: '/admin/contact-us',
    type: 'auth',
  },
  {
    component: ContactUsDetail,
    exact: true,
    path: '/admin/contact-us-detail/:contactUsId',
    type: 'auth',
  },
  {
    component: AboutUsForm,
    exact: true,
    path: '/admin/create-about-us',
    type: 'auth',
  },
  {
    component: AdminForm,
    exact: true,
    path: '/admin/create-admin',
    type: 'auth',
  },
  {
    component: FrequentlyAskedQuestionForm,
    exact: true,
    path: '/admin/create-frequently-asked-question',
    type: 'auth',
  },
  {
    component: VideoTutorialForm,
    exact: true,
    path: '/admin/create-video-tutorial',
    type: 'auth',
  },
  {
    component: RoleForm,
    exact: true,
    path: '/admin/create-role',
    type: 'auth',
  },
  {
    component: Dashboard,
    exact: true,
    path: '/admin/dashboard',
    type: 'auth',
  },
  {
    component: AboutUsForm,
    exact: true,
    path: '/admin/edit-about-us/:aboutUsId',
    type: 'auth',
  },
  {
    component: AdminForm,
    exact: true,
    path: '/admin/edit-admin/:adminId',
    type: 'auth',
  },
  {
    component: FrequentlyAskedQuestionForm,
    exact: true,
    path: '/admin/edit-frequently-asked-question/:frequentlyAskedQuestionId',
    type: 'auth',
  },
  {
    component: RoleForm,
    exact: true,
    path: '/admin/edit-role/:roleId',
    type: 'auth',
  },
  {
    component: VideoTutorialForm,
    exact: true,
    path: '/admin/edit-video-tutorial/:videoTutorialId',
    type: 'auth',
  },
  {
    component: ForgotPassword,
    exact: true,
    layout: false,
    path: '/admin/forgot-password',
    type: 'guest'
  },
  {
    component: FrequentlyAskedQuestionDetail,
    exact: true,
    path: '/admin/frequently-asked-question-detail/:frequentlyAskedQuestionId',
    type: 'auth',
  },
  {
    component: FrequentlyAskedQuestions,
    exact: true,
    path: '/admin/frequently-asked-questions',
    type: 'auth',
  },
  {
    component: Referrals,
    exact: true,
    path: '/admin/referrals',
    type: 'auth',
  },
  {
    component: JoinedUserReport,
    exact: true,
    path: '/admin/report/joined-user',
    type: 'auth',
  },
  {
    component: ReferralReport,
    exact: true,
    path: '/admin/report/referral',
    type: 'auth',
  },
  {
    component: TopWinnerReport,
    exact: true,
    path: '/admin/report/top-winner',
    type: 'auth',
  },
  {
    component: ResetPassword,
    exact: true,
    layout: false,
    path: '/admin/reset-password',
    type: 'guest',
  },
  {
    component: RestrictedLocations,
    exact: true,
    path: '/admin/restricted-locations',
    type: 'auth',
  },
  {
    component: RoleDetail,
    exact: true,
    path: '/admin/role-detail/:roleId',
    type: 'auth',
  },
  {
    component: Roles,
    exact: true,
    path: '/admin/roles',
    type: 'auth',
  },
  {
    component: TeamDetail,
    exact: true,
    path: '/admin/team-detail/:teamId',
    type: 'auth',
  },
  {
    component: Teams,
    exact: true,
    path: '/admin/teams',
    type: 'auth',
  },
  {
    component: Transactions,
    exact: true,
    path: '/admin/transactions',
    type: 'auth',
  },
  {
    component: UserDetail,
    exact: true,
    path: '/admin/user-detail/:userId',
    type: 'auth',
  },
  {
    component: Users,
    exact: true,
    path: '/admin/users',
    type: 'auth',
  },
  {
    component: VideoTutorialDetail,
    exact: true,
    path: '/admin/video-tutorial-detail/:videoTutorialId',
    type: 'auth',
  },
  {
    component: VideoTutorials,
    exact: true,
    path: '/admin/video-tutorials',
    type: 'auth',
  },
  {
    component: NotFound,
    layout: false,
  },
];

export default routes;
