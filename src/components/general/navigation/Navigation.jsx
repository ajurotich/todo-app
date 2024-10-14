import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Navigation.css"


export default function Navigation() {
	return (
		<Navbar expand="md" fixed="top">
			<Container>
				<Navbar.Toggle aria-controls="basic-navbar-nav"/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="text-center d-flex justify-space-around">
						<Link className="nav-link" to="/home">HOME</Link>
						<Link className="nav-link" to="/todos">TO DOS</Link>
						<Link className="nav-link" to="/categories">CATS</Link>
						<Link className="nav-link" to="/account">ACCOUNT</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}