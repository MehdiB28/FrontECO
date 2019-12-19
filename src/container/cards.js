
import React, {Component} from 'react';
import {Card, CardImg, CardBody,CardTitle, CardSubtitle, Button,Col,Badge,Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';



class Cards extends Component{
    constructor(props){
    super(props);
    this.state = { 
      visible: false,
      isOpen:false
    }
  }

  showModal = (name,Desc) => {

    this.setState({
      visible: true,
      name: name,
      Desc: Desc
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  toggle=()=>{
    this.setState({
      isOpen:!this.state.isOpen
    });
  }

render()
{

let style;

if(this.props.category==="AMAP"){
    style="success"
} else if(this.props.category==="Alimentation"){
    style="primary"
} else if(this.props.category==="Caritative"){
    style="warning"
} else if (this.props.category==="Prêt-à-porter"){
    style="danger"
}

    return(
      <Col xs={12} sm={9} md={6} lg={4}>
   
            <Card style={{marginBottom:30,borderRadius: 10,boxShadow: "0px 10px 30px 0px rgba(0, 0, 0, 0.1)"}}>
            <CardImg top  src={this.props.pictures} alt="Card image cap" style={{borderRadius: "10px 10px 0px 0px",width:'100%'}} />
                <CardBody>
                <CardTitle><h1>{this.props.name}</h1></CardTitle>
                <CardSubtitle style={{fontSize:20}}><h5>{this.props.city}</h5></CardSubtitle>
                <Badge href="#" color={style} pill>{this.props.category}</Badge> 
                <Button outline color="success" style={{borderRadius:25,marginLeft:25}} onClick={this.toggle}>Découvrir</Button>
                  <Modal isOpen={this.state.isOpen} onClick={this.toggle}>
                    <ModalHeader onClick={this.toggle} charCode="Y">{this.props.name}
                    {/* <Badge style={{width:'40px',height:'40px',borderRadius:'25%',backgroundImage:'url({this.props.pictures})}}></Badge> */}
                    </ModalHeader>
                    <ModalBody>
                      <h4>À propos:</h4> <p>{this.props.Desc}</p>
                      <h5>Adresse:</h5> <p>{this.props.address} <br/>
                               {this.props.city} {this.props.zipCode}</p>  
                        {this.props.phone}
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={this.toggle}>Fermer</Button>
                    </ModalFooter>
                  </Modal>
                </CardBody>
            </Card>        
    </Col>
    )};
}

// function aliStatetoprops(state){
//     return {
//         aliCard:state.aliCard
//     }
// }


// export default connect (null, aliStatetoprops)(Cards); 

export default Cards;

