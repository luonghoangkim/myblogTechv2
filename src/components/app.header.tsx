'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import Image from 'next/image';

function AppHeader() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" className='navbar-brand'> 
        <div className='flex items-center'>
        <Image src={"/logorm.png"} alt='logo' width={50} height={40} /> {' '}
        <p className=' font-bold text-3xl'>Blog Tech News </p> 
        </div> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Trang chủ</Nav.Link>
            <Nav.Link href="/techNews">Tech News</Nav.Link>  
            <Nav.Link href="/futureTech">Công nghệ tương lai</Nav.Link>
            <Nav.Link href="guides_tips">Hướng dẫn & thủ thuật</Nav.Link>  
            {/* <NavDropdown title="Lập trình" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Frontend</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Backend
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Khác</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                ...
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="/admin">Admin</Nav.Link> 
          </Nav>
        </Navbar.Collapse> 
      </Container>
    </Navbar>
  );
}

export default AppHeader;