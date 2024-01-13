import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../assets/img/Sahara Graphics.png";

const NavbarComponent = () => {
   return (
      <div>
         <Navbar expand="lg">
            <Container>
               <Navbar.Brand href="/" className="fw-bold">
                  <img
                  src={Logo}
                  alt="React Bootstrap logo"
                  />
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mx-auto gap-4">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/catalog">Catalog</NavLink>
                  <NavLink to="/freebies">Freebies</NavLink>
                  <NavLink to="/about">About</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                  </Nav>
                  <div>
                     <Button variant="dark" size="lg">Sign In</Button>
                  </div>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </div>
   ); 
}

export default NavbarComponent