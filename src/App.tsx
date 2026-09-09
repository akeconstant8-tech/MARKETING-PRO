import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';
import ProtectedRoute from './components/ProtectedRoute';
import RouteLoader from './components/RouteLoader';
import OfflineBanner from './components/OfflineBanner';

const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Students = lazy(() => import('./pages/Students'));
const Classes = lazy(() => import('./pages/Classes'));
const Subjects = lazy(() => import('./pages/Subjects'));
const Courses = lazy(() => import('./pages/Courses'));
const Evaluations = lazy(() => import('./pages/Evaluations'));
const Grades = lazy(() => import('./pages/Grades'));
const Performance = lazy(() => import('./pages/Performance'));
const Calendar = lazy(() => import('./pages/Calendar'));
const Resources = lazy(() => import('./pages/Resources'));
const Contacts = lazy(() => import('./pages/Contacts'));
const Settings = lazy(() => import('./pages/Settings'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <BrowserRouter>
          <OfflineBanner />
          <Suspense fallback={<RouteLoader />}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/students" element={<Students />} />
                <Route path="/classes" element={<Classes />} />
                <Route path="/subjects" element={<Subjects />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/evaluations" element={<Evaluations />} />
                <Route path="/grades" element={<Grades />} />
                <Route path="/performance" element={<Performance />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/settings" element={<Settings />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </ToastProvider>
  );
}
