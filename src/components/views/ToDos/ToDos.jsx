import { axiosGet } from "../../../contexts/AxiosContext";
import { useState, useEffect } from "react"
import { useAuth } from "../../../contexts/AuthContext";

import { Container, ListGroup, Row, Col } from "react-bootstrap"
import ToDoFilters from "./ToDoFilters";
import SingleToDo from "./SingleToDo";
import ToDoModal from "./ToDoModal";


//Steps to Read functionality
//1. add an import for useState and useEffect
//2. install and import axios
//3. create the hook to store the data
//4. create the function that uses axios to get the categories
//5. create useEffect to automate retrieval of data in this component
//----- You should now have your data stored, and now on to the UI
//6. use .map to render each category to the screen (also add any supplemental UI (table and thead)...combo of Categories and SingleCategory)

//Steps to Create functionality
//1. Create validationSchema and form specific to Categories
//2. import currentUser from the context
//3. Create a react hook to show/hide the form
//4. Create and render CatCreate in the conditonal rendering, based on whether the user is an admin or not
//5. Update the create functionality in CatForm.js

export default function ToDos() {
	const { currentUser } = useAuth();
	const [showModal, setShowModal] = useState(false);
	const [modalType, setModalType] = useState("");

	const [filter, setFilter] = useState(-1);
	const [todos, setTodos] = useState([]);
	const [cats, setCats] = useState([]);


	const refreshData = () => {
		// console.log("refreshing data");
		axiosGet("ToDos/", setTodos);
		axiosGet("Categories/", setCats);
	}

	useEffect(() => {
		refreshData();
	}, []);


	return (
		<>


			<Row>
				<Col className="text-start">
					<h1><strong>TO DOS</strong></h1>
				</Col>

				<Col className="text-center">
					{/* admin controls */}
					{currentUser.email === import.meta.env.VITE_ADMIN_EMAIL && (
						<button className="btn btn-outline-success" onClick={() => {
							setModalType("CREATE");
							setShowModal(true);
						}}>[+]</button>
					)}
				</Col>

				<Col className="text-end">
					<ToDoFilters setFilter={setFilter} cats={cats} setTodos={setTodos} />
				</Col>
			</Row>


			<Container className="my-3">
				<ListGroup variant="flush">
					{/* TODO:: remove ".category" in filter once db is updated */}
					{todos
						.filter((todo) => (filter < 0 ? true : todo.category.categoryId == filter))
						.map((todo) => (
							<SingleToDo key={todo.id} todo={todo} refreshData={refreshData} />
						))
					}
				</ListGroup>
			</Container>

			<ToDoModal
				showModal={showModal}
				setShowModal={setShowModal}
				modalType={modalType}
				setTodos={setTodos}
			/>

		</>
	)
}