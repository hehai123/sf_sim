import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function Navigate() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="ps-3">
        <Navbar.Brand as={Link} to={"/sf_sim"}>
          Star Force Simulator
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to={"/sf_sim"}>
            Simulator
          </Nav.Link>
          <Nav.Link as={Link} to={"/sf_sim/data"}>
            Data/Results
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
