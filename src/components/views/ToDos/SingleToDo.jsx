import { useAuth } from "../../../contexts/AuthContext";
import { useState } from "react";

import { ListGroup, Row, Col } from "react-bootstrap"
import ToDoModal from "./ToDoModal";


export default function SingleToDo({ todo, setTodos }) {

	const { currentUser } = useAuth();
	const [showModal, setShowModal] = useState(false);
	const [modalType, setModalType] = useState("");

	const { done, name, description } = todo;


	return (
		<>
			<ListGroup.Item className="mt-4">
				<Row>
					<Col><h3 className="fw-bold text-start">{name}</h3></Col>
					<Col>{done}</Col>
					<Col className="text-end">
						{currentUser.email === import.meta.env.VITE_ADMIN_EMAIL && (
							<>
								<button className="m-1 btn btn-warning" id="editLink" onClick={() => {
									setModalType("EDIT");
									setShowModal(true);
								}}>[EDIT]</button>
								<button className="m-1 btn btn-danger" id="deleteLink" onClick={() => {
									setModalType("DELETE");
									setShowModal(true);
								}}>[DELETE]</button>
							</>
						)}
					</Col>
				</Row>
				<Row>
					<p className="fs-4 text-muted">
						<em>{description}</em>
					</p>
				</Row>

			</ListGroup.Item>

			{showModal &&
				<ToDoModal
					todo={todo}
					showModal={showModal}
					setShowModal={setShowModal}
					modalType={modalType}
					setTodos={setTodos}
				/>
			}

		</>
	)
}