import img404 from "../../../assets/images/404.jpg"
import "./NotFound.css"


export default function NotFound() {
	return (
		<>
			<div className="not-found text-center">
				<img src={img404} alt="404" />
				<h1>ERROR: PAGE NOT FOUND</h1>
			</div>
		</>
	)
}