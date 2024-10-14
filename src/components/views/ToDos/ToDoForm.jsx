import { useState, useEffect } from "react";
import { todoSchema } from "../../../utilities/validationSchema"
import { axiosGet, axiosPost, axiosPut } from "../../../contexts/AxiosContext"

import { Formik, Form, Field } from "formik"


export default function ToDoForm({ todo = "", setShowModal, setTodos }) {

	const { id, name, description, categoryId } = todo || "";
	const [cats, setCats] = useState([]);

	const handleSubmit = (values) => {
		values.done = false;

		//if todo exists, edit it. otherwise post new
		if (todo) {
			const newObj = {
				id: id,
				name: values.name,
				categoryId: values.categoryId,
				description: values.description,
				done: false
			}

			console.log(newObj);

			axiosPut("ToDos/", id, newObj).then(
				setTimeout(axiosGet("ToDos/", setTodos), 750)
			);
		}
		else {
			const newObj = values;
			axiosPost("ToDos/", newObj).then(
				setTimeout(axiosGet("ToDos/", setTodos), 750)
			);
		}

		setShowModal(false);
	}

	useEffect(() => {
		axiosGet("Categories/", setCats);
	}, []);


	return (
		<>
			<Formik
				initialValues={{
					name: todo ? name : "",
					categoryId: todo ? categoryId : "",
					description: todo ? description : ""
				}}
				validationSchema={todoSchema}
				onSubmit={(values) => handleSubmit(values)}
			>
				{({ errors, touched }) => (
					<Form id="todoForm">
						<div className="form-group">
							<Field name="name" className="form-control" placeholder="name" />
							{(errors.name && touched.name) &&
								<div className="text-danger">{errors.name}</div>
							}
						</div>
						<div className="form-group">
							<Field name="categoryId" as="select" className="form-control" >
								<option value={-1}>{"[Select Category]"}</option>
								{cats.map((cat) => (
									<option key={cat.categoryId} value={cat.categoryId}>
										{cat.name}
									</option>
								))}
							</Field>
						</div>
						<div className="form-group">
							<Field name="description" className="form-control" placeholder="description" />
							{(errors.description && touched.description) &&
								<div className="text-danger">{errors.description}</div>
							}
						</div>
						<button type="submit" className="btn btn-sm btn-success">
							{todo ? "[Edit]" : "[Add]"}
						</button>
						<button className="btn btn-sm btn-warning" onClick={() => setShowModal(false)}>
							[Cancel]
						</button>
					</Form>
				)}

			</Formik>
		</>

	)
}
