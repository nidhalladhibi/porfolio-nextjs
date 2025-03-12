"use client";
import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Assure-toi que Bootstrap est bien importé

export default function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand as="div">
          <Link href="/" passHref className="navbar-brand">
            Mon Portfolio
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link as="div">
                <Link href="/" className="nav-link">
                  Accueil
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as="div">
                <Link href="/about" className="nav-link">
                  À propos
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as="div">
                <Link href="/projects" className="nav-link">
                  Projets
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as="div">
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
