import { useAuth } from "../../../contexts/AuthContext";
import { useState } from "react";

import { ListGroup, Row, Col } from "react-bootstrap"
import CategoryModal from "./CategoryModal";


export default function SingleCategory({ cat, setCats }) {

	const { currentUser } = useAuth();
	const [showModal, setShowModal] = useState(false);
	const [modalType, setModalType] = useState("");

	const { name, description } = cat;


	return (
		<>
			<ListGroup.Item className="mt-4">
				<Row>
					<Col><h3 className="fw-bold text-start">{name}</h3></Col>
					<Col className="text-end">
						{currentUser.email === import.meta.env.VITE_ADMIN_EMAIL && (
							<>
								<button className="m-1 btn btn-warning" id="editLink" onClick={() => {
									setShowModal(true);
									setModalType("EDIT");
								}}>[EDIT]</button>
								<button className="m-1 btn btn-danger" id="deleteLink" onClick={() => {
									setShowModal(true);
									setModalType("DELETE");
								}}>[DELETE]</button>
							</>
						)}
					</Col>
				</Row>
				<Row>
					<p className="fs-4 text-muted">
						{description}
					</p>
				</Row>
			</ListGroup.Item>

			{showModal &&
				<CategoryModal
					cat={cat}
					showModal={showModal}
					setShowModal={setModalType}
					modalType={modalType}
					setCats={setCats}
				/>
			}

		</>
	)
}