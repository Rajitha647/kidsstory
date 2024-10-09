import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Modal from 'react-bootstrap/Modal';
import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Register from './register';
import Login from './login';
import CommentContext from './commentprovider';


function Headernav() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [open, setOpen] = useState(false);
  const HandleClose = () => setOpen(false);
  const HandleOpen = () => setOpen(true);

  const { comment, setComment } = useContext(CommentContext);

  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">KeralaTour
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link onClick={handleShow}>Register</Nav.Link>
            <Nav.Link onClick={HandleOpen}>Login</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            
          <input
            type="text"
            name="sch"
            onChange={(e) => {
              setComment(e.target.value);
            }}
            className="form-control"
            placeholder="search"
          />
            <Button variant="danger" onClick={() => setComment("test")}>
              Test
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registration Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Register />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={open} onHide={HandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={HandleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={HandleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
}

export default Headernav;