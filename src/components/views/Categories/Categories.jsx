import { axiosGet } from "../../../contexts/AxiosContext"
import { useState, useEffect } from "react"
import { useAuth } from "../../../contexts/AuthContext"

import { Container, ListGroup } from "react-bootstrap"
import SingleCategory from "./SingleCategory"
import CategoryModal from "./CategoryModal"


export default function Categories() {

	const { currentUser } = useAuth();
	const [showModal, setShowModal] = useState(false);
	const [modalType, setModalType] = useState("");
	
	const [cats, setCats] = useState([]);

	useEffect(() => {
		axiosGet("Categories", setCats);
	}, []);
	
	
	return (
		<>
			{/* admin controls */}
			{currentUser.email === import.meta.env.VITE_ADMIN_EMAIL && (
				<div>
					<button onClick={() => {
						setModalType("CREATE");
						setShowModal(true);
					}}>[+]</button>
				</div>
			)}
			
			<h1><strong>CATEGORIES</strong></h1>
			<Container className="my-3">
				<ListGroup variant="flush">
					{cats.map((cat) => (
						<SingleCategory key={cat.categoryId} cat={cat} setCats={setCats}/>
					))}
				</ListGroup>
			</Container>
				
			<CategoryModal 
				showModal={showModal}
				setShowModal={setShowModal}
				modalType={modalType}
				setCats={setCats}
			/>
			
		</>
	)
}