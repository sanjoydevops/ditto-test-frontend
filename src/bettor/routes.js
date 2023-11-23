import { lazy } from 'react';

const AboutUs = lazy(() => import('./pages/AboutUs'));
const Bets = lazy(() => import('./pages/Bets'));
const ChangePassword = lazy(() => import('./pages/ChangePassword'));
const Chat = lazy(() => import('./pages/Chat'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
// const Dashboard = lazy(() => import('./pages/Dashboard'));
const EmailVerified = lazy(() => import('./pages/EmailVerified'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const Home = lazy(() => import('./pages/Home'));
const HowItWorks = lazy(() => import('./pages/HowItWorks'));
const JoinTeam = lazy(() => import('./pages/JoinTeam'));
const LeaderBoard = lazy(() => import('./pages/LeaderBoard'));
const Live = lazy(() => import('./pages/Live'));
const Login = lazy(() => import('./pages/Login'));
const Matches = lazy(() => import('./pages/Matches'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Offers = lazy(() => import('./pages/Offers'));
const Payment = lazy(() => import('./pages/Payment'));
const Profile = lazy(() => import('./pages/Profile'));
const ProfileEdit = lazy(() => import('./pages/ProfileEdit'));
const RegisteredWelcomeView = lazy(() => import('./pages/RegisteredWelcomeView'));
const Registration = lazy(() => import('./pages/Registration'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));
const Teams = lazy(() => import('./pages/Teams'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const Trending = lazy(() => import('./pages/Trending'));
const VerificationMail = lazy(() => import('./pages/VerificationMail'));
const ViewProfile = lazy(() => import('./pages/ViewProfile'));

const routes = [
  {
    component: Home,
    exact: true,
    path: '/',
  },
  {
    component: AboutUs,
    exact: true,
    path: '/about-us',
  },
  {
    component: Bets,
    exact: true,
    path: '/bets',
    type: 'auth',
  },
  {
    component: ChangePassword,
    exact: true,
    path: '/change-password',
    type: 'auth',
  },
  {
    component: Chat,
    exact: true,
    path: '/chat',
    type: 'auth',
  },
  {
    component: Chat,
    exact: true,
    path: '/chat/:messageableType/:messageableId',
    type: 'auth',
  },
  {
    component: ContactUs,
    exact: true,
    path: '/contact-us',
  },
  /* {
    component: Dashboard,
    exact: true,
    path: '/dashboard',
    type: 'auth',
  }, */
  {
    component: EmailVerified,
    exact: true,
    path: '/email-verified',
  },
  {
    component: ForgotPassword,
    exact: true,
    path: '/forgot-password',
    type: 'guest'
  },
  {
    component: HowItWorks,
    exact: true,
    path: '/how-it-works',
  },
  {
    component: JoinTeam,
    exact: true,
    layout: false,
    path: '/join-team/:teamId',
    type: 'auth',
  },
  {
    component: LeaderBoard,
    exact: true,
    path: '/leader-board',
  },
  {
    component: Live,
    exact: true,
    path: '/live',
  },
  {
    component: Login,
    exact: true,
    layout: false,
    path: '/login',
    type: 'guest'
  },
  {
    component: Matches,
    exact: true,
    path: '/matches',
    type: 'auth',
  },
  {
    component: Offers,
    exact: true,
    path: '/offers',
    type: 'auth',
  },
  {
    component: Payment,
    exact: true,
    path: '/payment',
    type: 'auth',
  },
  {
    component: Profile,
    exact: true,
    path: '/profile',
    type: 'auth',
  },
  {
    component: ProfileEdit,
    exact: true,
    path: '/profile-edit',
    type: 'auth',
  },
  {
    component: RegisteredWelcomeView,
    exact: true,
    path: '/registered-welcome-view',
    type: 'guest',
  },
  {
    component: Registration,
    exact: true,
    layout: false,
    path: '/registration',
    type: 'guest',
  },
  {
    component: ResetPassword,
    exact: true,
    path: '/reset-password',
    type: 'guest',
  },
  {
    component: TermsAndConditions,
    exact: true,
    path: '/terms-and-conditions',
  },
  {
    component: Teams,
    exact: true,
    path: '/teams',
    type: 'auth',
  },
  {
    component: Trending,
    exact: true,
    path: '/trending',
  },
  {
    component: VerificationMail,
    exact: true,
    layout: false,
    path: '/verification-mail',
    type: 'guest',
  },
  {
    component: ViewProfile,
    exact: true,
    path: '/view-profile/:userId',
    type: 'auth',
  },
  {
    component: NotFound,
    layout: false,
  },
];

export default routes;
