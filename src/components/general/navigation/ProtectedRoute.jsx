import { useAuth } from "../../../contexts/AuthContext";
import { Navigate } from "react-router-dom"

//component redirects unauthenticated user to login screen
//pass in children in params as a prop which refers to any nested component
export default function ProtectedRoute({ children }) {

	const { currentUser } = useAuth();

	//if theres a currentuser, show children, otherwise redirect to login
	return currentUser ? children : <Navigate to="/account" />
}