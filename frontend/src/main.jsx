import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Doctor from './Doctor.jsx'
import Admin from './Admin.jsx'
import LandingPage from './pages/LandingPage.jsx'
import Signup from './pages/Signup.jsx'
import LoginPage from './pages/LoginPage.jsx'
import PatientAppointment from './pages/patients/Appointment.patient.jsx'
import DoctorDashboard from './pages/doctors/Dashboard.Doctor.jsx'
import DoctorAppointments from './pages/doctors/Appointment.Doctor.jsx'
import DoctorVideoCall from './pages/doctors/VideoCall.Doctor.jsx'
import CaseStudy from './pages/doctors/CaseStudy.Doctor.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  }, {
    path: '/auth/signup',
    element: <Signup />
  }, {
    path: '/auth/signin',
    element: <LoginPage />
  }, {
    element: <App />,
    children: [
      {
        path: '/patient/home',
        element: <PatientAppointment />
      }
    ]
  },
  {
    element: <Doctor />,
    children: [
      {
        path: '/doctor/dashboard',
        element: <DoctorDashboard />
      },
      {
        path: '/doctor/appointments',
        element: <DoctorAppointments />
      },
      {
        path: '/doctor/videocall',
        element: <DoctorVideoCall />
      },
      {
        path: '/doctor/casestudy',
        element: <CaseStudy />
      }
    ]
  },
  {
    element: <Admin />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
