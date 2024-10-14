import * as yup from "yup";

//This file will house the schemas for both resources and categories for the create/edit form.
//To bring in a simple validation implementation, we are going to use Yup by installing it in
//our app (npm install yup) see implementation below

//Yup will work in tandem with Formik, which is an npm package that creates and stores form
//inputs for each item (categoryName, categoryDescription) that we need to capture in our forms.
//npm install formik//This file will house the schemas for both resources and categories for the create/edit form.
//To bring in a simple validation implementation, we are going to use Yup by installing it in
//our app (npm install yup) see implementation below

//Yup will work in tandem with Formik, which is an npm package that creates and stores form
//inputs for each item (categoryName, categoryDescription) that we need to capture in our forms.
//npm install formik


const todoSchema = yup.object().shape({
	name: yup.string().max(50, "50 character maximum.").required(),
	description: yup.string().max(300, "300 character maximum."),
	categoryId: yup.number().min(1, "Select a category.").required(),
})

const catSchema = yup.object().shape({
	name: yup.string().max(50, "50 character maximum.").required(),
	description: yup.string().max(250, "250 character maximum.").required(),
})


export { todoSchema, catSchema }