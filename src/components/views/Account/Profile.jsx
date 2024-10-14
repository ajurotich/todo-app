import "./Profile.css"
import { useAuth } from "../../../contexts/AuthContext"


export default function Profile() {
	const { currentUser } = useAuth();

	return (
		<span className="profile p">
			Hello {!currentUser.displayName ? currentUser.email : currentUser.displayName.split(" ")[0]}
			<img src={currentUser.photoURL} alt={currentUser.displayName} />
		</span>
	)
}