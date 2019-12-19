import React,{Component} from 'react';
import {Container, Row,Col} from 'reactstrap';
import Header from "./component/header";
import Switch from './container/switches';
import Mapp from './container/map';
import Footerf from './component/footer';
import Cards from './container/cards';
import Choice from './container/choice';
import {connect} from 'react-redux'; 


import './index.css'

 
class App extends Component{
    constructor(props){
      super(props)
      this.state={
        DataCard:[]
      }
      global.IP='10.2.4.48'
      //192.168.1.13
      //10.2.4.48
  }

  componentDidMount(){

    const findDataCard = async () => {
      
        // Fetching the data 
        const data = await fetch(`http://${global.IP}:3000/activites`);
      
        // Json format
        const body = await data.json();
      
        console.log('liste des shops ->', body)
      
            // Uploading the state
        this.setState({
         DataCard: body
        })
      
    }
        findDataCard()
    }


render(){
  var cardList=[];
  console.log('props datacard:',this.props.choice.length)
  if (this.props.choice.length == 0) {
    console.log("hello DT",this.state.DataCard);
    var all=this.state.DataCard.map(function(shop,i){
      return <Cards name={shop.name} address={shop.address} zipCode={shop.zipCode} city={shop.city} phone={shop.phone} Desc={shop.Desc} category={shop.category} latitude={shop.latitude} longitude={shop.longitude} pictures={shop.pictures} key={i}/>

    });
    cardList = all;
  } else {
    var selected=this.props.choice.map(function(shop,i){
      return <Cards name={shop.name} address={shop.address} zipCode={shop.zipCode} city={shop.city} phone={shop.phone} Desc={shop.Desc} category={shop.category} latitude={shop.latitude} longitude={shop.longitude} pictures={shop.pictures} key={i}/>

    });
    cardList = selected;
  }
  

return (

  <div>
        <div>
          <Header/>
        </div>

        
        <div>
          <Mapp/>
        </div>
        

        <Container style={{marginTop:25}}>
          <Row>
             
                        <Col xs={3}>
                          <Switch/>
                          <Choice/>
                          
                        </Col>
        
                        <Col>
                          <Row xs={{offset:3}}>
                            {cardList}
                          </Row>
                        
                        </Col>
            
              </Row>  
        </Container>
        <div>
          <Footerf/>
        </div>
  </div>
)

}}


var mapStateToProps = (state) => {
  return {
    choice: state.dataCard
  };
};


export default connect(mapStateToProps, null)(App);
