// import { useState } from "react";
// import { Link, Routes, Route } from "react-router-dom";
// import {
//   Container,
//   Navbar,
//   NavbarBrand,
//   NavbarToggler,
//   Collapse,
//   Nav,
//   NavItem,
//   NavLink,
// } from "reactstrap";

// import About from "./About";
// import Projects from "./Projects";
// import Contact from "./Contact";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// function App() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div>
//       <Navbar dark expand="md">
//         <NavbarBrand tag={Link} to="/">
//           <img src="/logo.png" alt="Logo" width="40" height="40" />
//         </NavbarBrand>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="ml-auto" navbar>
//             <NavItem>
//               <NavLink tag={Link} to="/">
//                 About
//               </NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink tag={Link} to="/projects">
//                 Projects
//               </NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink tag={Link} to="/contact">
//                 Contact
//               </NavLink>
//             </NavItem>
//           </Nav>
//         </Collapse>
//       </Navbar>

//       <Container fluid>
//         <Routes>
//           <Route path="/" element={<About />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </Container>
//     </div>
//   );
// }

// export default App;



import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar dark expand="md">
        <NavbarBrand tag={Link} to="/">
          <img src="/logo.png" alt="Logo" width="40" height="40" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/projects">
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/contact">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <Container fluid style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;

