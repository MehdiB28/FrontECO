import React,{Component} from 'react';
import {FormGroup,Input,Button,Col} from 'reactstrap';



class Switch extends Component{
    

    render(){

        return(
        <Col>
            <div style={{margin:"auto",display:"flex", flexDirection:"column",alignItems:"center"}}>
                <FormGroup>
                    <Input type="text" name="name" id="exampleName" placeholder="Amap..." ></Input>
                </FormGroup>

                <FormGroup>
                    <Input type="text" name="name" id="exampleNameA" placeholder="Ville..." ></Input>
                </FormGroup>

                <Button color="danger">Rechercher</Button>
            
            </div>
       
        </Col>
        )};
};

export default Switch;