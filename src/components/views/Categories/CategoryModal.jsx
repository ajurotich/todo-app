import { Modal } from "react-bootstrap"
import CategoryForm from "./CategoryForm"


export default function CategoryModal({ cat = "", showModal, setShowModal, modalType, setCats }) {

	const { name } = cat || "";
	
	
	return (
		<Modal show={showModal} onHide={() => setShowModal(false)}
			size="lg" centered
			aria-labelledby="contained-modal-title-vcenter"
		>
			<Modal.Header className='bg-success' closeButton>
				<h3>{modalType} {name && " "}CATEGORY</h3>
			</Modal.Header>

			<Modal.Body>
				{modalType == "CREATE" &&
					<CategoryForm setShowModal={setShowModal} setCats={setCats} />
				}
				{modalType == "EDIT" &&
					<CategoryForm cat={cat} setShowModal={setShowModal} setCats={setCats} />
				}
				{modalType == "DELETE"}
			</Modal.Body>
		</Modal>
	)
}