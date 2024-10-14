import axios from "axios";


const apiURL = "https://localhost:7118/api/";


export async function axiosGet(schema, outputSetter) {
	axios.get(apiURL + schema).then(
		(response) => outputSetter(response.data)
	)
}

export async function axiosPost(schema, values) {
	axios.post(apiURL + schema, values);
}

export async function axiosPut(schema, id, newObj){
	axios.put(apiURL + schema + id, newObj);
}

export async function axiosDelete(schema, id){
	axios.delete(apiURL + schema + id);
}