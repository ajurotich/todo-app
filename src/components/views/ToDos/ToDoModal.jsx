import { axiosDelete, axiosGet } from "../../../contexts/AxiosContext";

import { Modal } from "react-bootstrap"
import ToDoForm from "./ToDoForm"


export default function ToDoModal({ todo = "", showModal, setShowModal, modalType, setTodos }) {

	const { name, id } = todo || "";

	if (modalType == "") setShowModal(false);


	return (
		<>
			<Modal show={showModal} onHide={() => setShowModal(false)}
				size="lg" centered
				aria-labelled-by="contained-modal-title-vcenter"
			>
				<Modal.Header className='bg-success' closeButton>
					<h3>{modalType} {name && " "}TODO</h3>
				</Modal.Header>

				<Modal.Body>
					{modalType == "CREATE" &&
						<ToDoForm setShowModal={setShowModal} setTodos={setTodos} />}
					{modalType == "EDIT" && 
						<ToDoForm todo={todo} setShowModal={setShowModal} setTodos={setTodos} />}
					{modalType == "DELETE" &&
						<>
							<h5 className="pb-2">
								Are you sure you want to delete [{(todo.name).toUpperCase()}]?
							</h5>
							<div>
								<button className="btn btn-sm btn-danger" onClick={() => {
									axiosDelete("ToDos/", id).then(()=> {
										setShowModal(false);
										setTimeout(axiosGet("ToDos/", setTodos), 750);
									});
								}}>[Delete]</button>
								<button className="btn btn-sm btn-warning" onClick={() =>
									setShowModal(false)
								}>[Cancel]</button>
							</div>
						</>
					}
				</Modal.Body>
			</Modal>
		</>
	)
}