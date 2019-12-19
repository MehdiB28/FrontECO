// import React,{Component} from 'react';
// import Cards from '../container/cards'
// import {Container, Row} from 'reactstrap';
// // import {connect} from 'react-redux';
// // import {setCards} from '../actions';
// // import {bindActionCreators} from 'redux';


// class CardsList extends Component{
    
//     // componentWillMount(){
//     //     this.props.setCards();
//     // }


//     render(){

//         return(
//             <div xs="12" sm="6" md="4" lg="3" style={{display:'grid',gridtemplateColumns:'repeat(3,10px)'}} >
//                 <Container>
//                     <Row>
//                 {this.props.dataCard.map((shop,i)=><Cards name={shop.name} address={shop.address} zipCode={shop.zipCode} city={shop.city} phone={shop.phone} Desc={shop.Desc} category={shop.category} key={i}/>)}
//                     </Row>
            
//                 </Container>
//             </div>
//         )
//     }
// };

// // function mapDispatchToProps(dispatch){
// //     return bindActionCreators (
// //         {setCards:setCards},
// //         dispatch
// //     );
// // }

// // function mapStateToprops(state){
// //     return {
// //         dataCard:state.dataCard
// //     }
// // }

// export default CardsList;
// // export default connect (mapStateToprops,mapDispatchToProps)(CardsList);
