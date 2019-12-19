import React,{Component} from 'react';
import {Button} from 'reactstrap';
import ReactMapboxGl, {Feature, Marker } from 'react-mapbox-gl';
// import {connect} from 'react-redux';


class Mapp extends Component{
      constructor(){
            super();
            this.state={open:false}
      }

render(){

const Map = ReactMapboxGl({
            accessToken:
              'pk.eyJ1IjoiZW1tYW51ZWxyZXVyZSIsImEiOiJjazN6dnBmN20wOGtvM2ZxdW1udTI0YnZjIn0.JvglM9MuCO2biQkfAT0UyQ'
          });
var style;

if(this.state.open){
      style={height: '75vh',width: '100vw'}
}else{
      style={height:'20vh',width:'100vw',opacity:0.5,WebkitFilter:'contrast(50%)'}
}      
return(
      <div>
            <Button color='success'onClick={()=>{this.setState({open:!this.state.open})}} style={{position:'absolute',zIndex:15,marginTop:40,marginLeft:10}}>Accès à la map </Button>
            <Map style={{}} style="mapbox://styles/emmanuelreure/ck4ctbq3q0uq61cpf843kye13" containerStyle={style}>
                  
                  
            <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
                  {/* {this.props.dataCard.map((shop,i)=>(
                  
                  <Marker
                  key={i}
                  latitude={this.props.dataCard.latitude}
                  longitude={this.props.dataCard.longitude}>
                  <button className="marker-btn">
                        <img src='/seedling-solid.svg' alt='pin'></img>
                  </button>
                  </Marker>
                  ))} */}
                  
            </Map>
      </div>
)


}};

// var mapStateToProps = (state) => {
//       return {
//         choice: state.dataCard
//       };
//     };

export default Mapp;

// export default connect (mapStateToProps) (Mapp);