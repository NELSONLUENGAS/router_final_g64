import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export const Header = () => {
	return (
		<Navbar className="bg-body-tertiary">
			<Container fluid>
				<Navbar.Brand>Pokedex</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						<NavLink
							to="/"
							className={({ isActive, isPending }) =>
								isPending ? 'pending' : isActive ? 'active' : ''
							}
						>
							Home
						</NavLink>

						<NavLink
							to="/power"
							className={({ isActive, isPending }) =>
								isPending ? 'pending' : isActive ? 'active' : ''
							}
						>
							Power Zone
						</NavLink>
					</Nav>

					<Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
						/>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
