
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbars(){
return(
<div style={{  width:"100%"}}>

        <Navbar bg="primary" expand="xxl"  >
      
        <Navbar.Brand href="/">Movie Library</Navbar.Brand>
        <Navbar expand="lg" variant="light" bg="light">
    </Navbar>
          <Nav>
            <Nav.Link href="/">Home Movies</Nav.Link>
            <Nav.Link href="/fav">Favorite movies</Nav.Link>
          </Nav>
      
    </Navbar>
</div>

)
    
}
export default Navbars;