import { Navigate, Outlet } from "react-router-dom"

interface Props {
  redirectPath: string
}

export function ProtectedRoute({redirectPath = '/login'}: Props): JSX.Element {

  const token = localStorage.getItem('token')

  return token ? <Outlet /> : <Navigate to={redirectPath} />

}