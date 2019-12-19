import React,{Component} from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


class Footerf extends Component{

    render(){
        return(
    
<MDBFooter style={{color:'white',backgroundColor:'green', opacity:"0.7",marginTop:'30px', paddingTop:"10px",borderTop:"1 solid grey",justifyContent:'space-between'}}>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="4">
            <h5>ECOMAP</h5>
            <p>
              L'agriculture seine à côté de chez vous.
            </p>
            <h3>Adresse</h3>
            <p>126 Rue Saint-Denis 75 002 Paris</p>
          </MDBCol>
          <MDBCol md="4">
              <img src="./logoEco.png" alt="logo Ecomap"/>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}}


export default Footerf;