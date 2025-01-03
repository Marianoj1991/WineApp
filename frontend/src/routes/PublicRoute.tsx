import { Navigate, Outlet } from "react-router-dom"


export function PublicRoute(): JSX.Element {

  const token = localStorage.getItem('token')

  return !token ? <Outlet /> : <Navigate to={'/home'} />

}