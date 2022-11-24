import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const PublicRoutes = ({children}) => {

  const { infoContextUser } = useContext(AuthContext)
  
  return infoContextUser.isLogged
          ? <Navigate to='/Home' />
          : children
}
