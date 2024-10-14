import { useAuth } from "../../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

import Profile from "./Profile";


export default function Account() {
	const { login, logout, currentUser } = useAuth();
	const navigate = useNavigate();

	async function handleLogin() {
		await login();
		return navigate("/account");
	}

	async function handleLogout() {
		await logout();
		return navigate("/");
	}


	return (
		<>
			<h1>ACCOUNT</h1>
			{currentUser ?
				<>
					<Profile />
					<button className="btn btn-info" onClick={handleLogout}>
						Logout
					</button>
				</>
				:
				<button className="btn btn-success" onClick={handleLogin}>
					Login w/ GitHub
				</button>
			}
		</>
	)
}