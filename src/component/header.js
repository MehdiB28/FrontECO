import React,{Component} from 'react';
import {Container,Navbar,Nav,NavLink,Jumbotron} from 'reactstrap';
import ActModal from './ActModal'
import IDModal from './IDModal'
import SIModal from './SIModal'


class Header extends Component{
render(){
return(
    <div>
      <Navbar expand="md" color="ligth">
            <img src="./logoEco.png" alt="logo Ecomap"/>
              <Nav className="mr-auto" navbar style={{color:"dark"}}>
                <ActModal/>
              </Nav>
              
              <NavLink><IDModal/></NavLink>
              <NavLink><SIModal/></NavLink>
      </Navbar>
      <Jumbotron fluid style={{backgroundImage:'url("./home.jpg")',backgroundSize:'cover',color:'white',fontWeight:'bold',marginBottom:0}}>
                    <Container fluid>
                    <h1 className="display-3">ECOMAP:L'ANNUAIRE DE L'ECOLOGIE EN FRANCE</h1>
                    </Container>
       </Jumbotron>
     


    </div>


)

}};

export default Header;


