import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App'
import { AddWinePage, HomePage, LandingPage, RegisterPage, LoginPage, SingleWinePage } from '../pages/'

import ErrorPage from '../pages/errorPage/ErrorPage'
import { PublicRoute, ProtectedRoute } from './'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <PublicRoute />,
        children: [
          {
            path: '/',
            element: <LandingPage />
          },
          {
            path: '/login',
            element: <LoginPage />
          },
          {
            path: '/register',
            element: <RegisterPage />
          }
        ]
      },
      {
        element: <ProtectedRoute redirectPath='login' />,
        children: [
          {
            path: '/home',
            element: <HomePage />
          },
          {
            path: '/wine/:id',
            element: <SingleWinePage />
          },
          {
            path: '/add-wine',
            element: <AddWinePage />
          }
        ]
      }
    ]
  }
])

export default function AppRouter (): JSX.Element {
   return <RouterProvider router={router} />
}