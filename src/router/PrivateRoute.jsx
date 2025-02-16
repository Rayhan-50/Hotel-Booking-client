
import { useContext } from "react"
import AuthContext from "../context/AuthContext/AuthContext"
import { Navigate, useLocation } from "react-router-dom"
import { ClipLoader } from "react-spinners"

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)

  const location = useLocation()

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader size={50} color={"#4A90E2"} loading={loading} />
      </div>
    );
  }
  if (user) return children
  return <Navigate to='/login' state={location.pathname} />
}

export default PrivateRoute