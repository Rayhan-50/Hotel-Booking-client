
import { useContext } from "react"
import AuthContext from "../context/AuthContext/AuthContext"
import { Navigate, useLocation } from "react-router-dom"

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)

  const location = useLocation()

  if (loading) return <h1>loading</h1>
  if (user) return children
  return <Navigate to='/login' state={location.pathname} />
}

export default PrivateRoute