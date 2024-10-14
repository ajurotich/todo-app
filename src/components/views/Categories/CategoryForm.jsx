import { catSchema } from "../../../utilities/validationSchema"
import { axiosGet, axiosPost, axiosPut } from "../../../contexts/AxiosContext"

import { Formik, Form, Field } from "formik"


export default function CategoryForm({ cat = "", setShowModal, setCats }) {

	const { categoryId, name, description } = cat || "";

	const handleSubmit = (values) => {
		console.log(values);

		//if todo exists, edit it. otherwise post new
		if (cat) {
			const newObj = {
				categoryId: categoryId,
				name: values.name,
				description: values.description,
			}

			axiosPut("Categories/", categoryId, newObj).then(
				setTimeout(axiosGet("Categories/", setCats), 750)
			);
		}
		else {
			const newObj = values;
			axiosPost("Categories/", newObj).then(
				setTimeout(axiosGet("Categories/", setCats), 750)
			);
		}

		setShowModal(false);
	}


	return (
		<>
			<Formik
				initialValues={{
					name: cat ? name : "",
					description: cat ? description : ""
				}}
				validationSchema={catSchema}
				onSubmit={(values) => handleSubmit(values)}
			>
				{({ errors, touched }) => (
					<Form id="catForm">
						<div className="form-group">
							<Field name="name" className="form-control" placeholder="name" />
							{(errors.name && touched.name) &&
								<div className="text-danger">{errors.name}</div>
							}
						</div>
						<div className="form-group">
							<Field name="description" className="form-control" placeholder="description" />
							{(errors.description && touched.description) &&
								<div className="text-danger">{errors.description}</div>
							}
						</div>
						<div className="form-control">
							<button type="submit" className="btn btn-success">
								{cat ? "[Edit]" : "[Add]"}
							</button>
							<button className="btn btn-warning" onClick={() => setShowModal(false)}>
								[Cancel]
							</button>
						</div>
					</Form>
				)}

			</Formik>
		</>
	)
}