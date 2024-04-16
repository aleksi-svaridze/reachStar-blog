import { Navigate, Outlet } from "react-router-dom"

export const PrivatRoutes = ({isLoggedIn}) => {
    return isLoggedIn ? <Outlet/> : <Navigate to={'/login'}/>
}