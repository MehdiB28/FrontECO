import React,{Component} from 'react';
import { CustomInput, FormGroup, Label} from 'reactstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setChoice} from "../actions";

class Choice extends Component{
        constructor(props){
                super(props);
                this.state={
                        Alicards:false,
                        Alilist:[],
                        Amacards:false,
                        Amalist:[],
                        CariCards:false,
                        CariList:[],
                        PapCards:false,
                        PapList:[],
                        RecyCards:false,
                        RecyList:[],
                        AbCards:false,
                        AbList:[]
                }
        }
       
handleClickAli=()=>{
        
        this.setState({Alicards:!this.state.Alicards})
        

        if(!this.state.Alicards){
        
        const findAlicard = async()=>{
        const data= await fetch (`http://${global.IP}:3000/activites/Alimentation`);

        const body= await data.json();
                console.log('alimentation shop',body)

                this.setState({
                        Alilist:body
                })
         }
                findAlicard()
        } else {
        return null
        }
};

handleClickAma=()=>{
        
        this.setState({Amacards:!this.state.Amacards})

        
        
        if(!this.state.Amacards){
        
        const findAmacard= async()=>{
        const data= await fetch (`http://${global.IP}:3000/activites/AMAP`);

        const body= await data.json();
                console.log('amap shop',body)

                this.setState({
                        Amalist:body
                });
                this.props.setChoice(body);
         }
                findAmacard();
                
        } else {
                this.props.setChoice([]);
        }
};

handleClickCari=()=>{
        
        this.setState({Caricards:!this.state.Caricards})
        

        if(!this.state.Caricards){
        
        const findCaricard= async()=>{
        const data= await fetch (`http://${global.IP}:3000/activites/Cari`);

        const body= await data.json();
                console.log('caritative shop',body)

                this.setState({
                        Carilist:body
                })
                this.props.setChoice(body);
         }
                findCaricard()
        } else {
                this.props.setChoice([]);
        }
};

handleClickPap=()=>{
        
        this.setState({Papcards:!this.state.Papcards})
        

        if(!this.state.Papcards){
        
        const findPapcard= async()=>{
        const data= await fetch (`http://${global.IP}:3000/activites/PAP`);

        const body= await data.json();
                console.log('pap shop',body)

                this.setState({
                        Paplist:body
                })
                this.props.setChoice(body);
         }
                findPapcard()
        } else {
                this.props.setChoice([]);
        }
};

handleClickAb=()=>{
        
        this.setState({Abcards:!this.state.Abcards})
        

        if(!this.state.Abcards){
        
        const findAbcard= async()=>{
        const data= await fetch (`http://${global.IP}:3000/activites/AB`);

        const body= await data.json();
                console.log('ab shop',body)

                this.setState({
                        Ablist:body
                })
                this.props.setChoice(body);
         }
                findAbcard()
        } else {
                this.props.setChoice([]);
        }
};

handleClickRecy=()=>{
        
        this.setState({Recycards:!this.state.Recycards})
        

        if(!this.state.Recycards){
        
        const findRecycard= async()=>{
        const data= await fetch (`http://${global.IP}:3000/activites/Recy`);

        const body= await data.json();
                console.log('recy shop',body)

                this.setState({
                        Recylist:body
                })
                this.props.setChoice(body);
         }
                findRecycard()
        } else {
                this.props.setChoice([]);
        }
};

    render(){
            
        
        return(
                <div>
                        <FormGroup style={{borderWidth:4,borderColor:"#27405C"}}>
                                <Label for="exampleCheckbox" style={{fontWeight:'bold'}}>Categories</Label>

                                        <div>
                                                <CustomInput type="switch" id="exampleCustomSwitch" name="Alimentation" label="Alimentation" onClick={this.handleClickAli}/>    
                                                <CustomInput type="switch" id="exampleCustomSwitch1" name="AMAP" label="AMAP" onClick={this.handleClickAma}/>
                                                <CustomInput type="switch" id="exampleCustomSwitch2" name="Caritative" label="Caritative" onClick={this.handleClickCari}/>
                                                <CustomInput type="switch" id="exampleCustomSwitch3" name="Prêt-à-Porter" label="Prêt-à-Porter" onClick={this.handleClickPap}/>
                                                <CustomInput type="switch" id="exampleCustomSwitch4" name="Recyclage" label="Recyclage" onClick={this.handleClickRecy}/>
                                                <CustomInput type="switch" id="exampleCustomSwitch5" name="Recyclage" label="Activité Bénévole" onClick={this.handleClickAb}/>
                                        </div>

                         </FormGroup>

                </div>
        )}
}

var mapDispatchToProps = (dispatch) => {
        return bindActionCreators(
                {
                        setChoice: setChoice
                },
                dispatch
                );
};

export default connect(null, mapDispatchToProps)(Choice);

