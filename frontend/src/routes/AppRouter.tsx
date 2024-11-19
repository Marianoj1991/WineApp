import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App'
import { AddWinePage, HomePage, LandingPage, RegisterPage, LoginPage } from '../pages/'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/home',
        element: <HomePage />
      },
      {
        path: '/new-wine',
        element: <AddWinePage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/register',
        element: <RegisterPage />
      },
    ]
  }
])

export default function AppRouter (): JSX.Element {
   return <RouterProvider router={router} />
}