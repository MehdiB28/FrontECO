import React,{Component} from 'react';
import { Button,Row, Col, Form, FormGroup, Label, Input} from 'reactstrap';
import {Redirect } from 'react-router-dom'

class SIForm extends Component{
    constructor(props){
        super(props);
        this.handleSubmitSignIn = this.handleSubmitSignIn.bind(this);
        this.state = {
            SignInEmail:'',
            SignInPassword:'',
            isUserExist: false
        }
    }

    handleSubmitSignIn(){

        console.log('Dans HandleSubmitIn',this.state.SignInEmail)
    
        fetch(`http://${global.IP}:3000/sign-in?email=${this.state.SignInEmail}&password=${this.state.SignInPassword}`)
        .then(response => response.json())
        .then(data => {
    
          console.log('Dans mon fetch -->',data)
    
          // NE FONCTIONNE PAS
          if(data.isUserExist){
    
            this.setState({
              isUserExist:true
            })
            
          }
    
        });
    
      }
    render() {

        if(this.state.isUserExist){
            return <Redirect to='/Homepage' />
            }

        return(
            <Form>
                <Row col>
            <Col md={12}>
                <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input onChange={(e) => this.setState({SignInEmail: e.target.value})} className="Login-input" placeholder="email" />
                </FormGroup>
            </Col>
            <Col md={12}>
                <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" onChange={(e) => this.setState({SignInPassword: e.target.value})} className="Login-input" placeholder="password" />
                </FormGroup>
            </Col>
            <Col md={12}>
                <FormGroup>
                <Button onClick={this.handleSubmitSignIn} style={{width:'80px'}} type="primary">Sign-in</Button>
                </FormGroup>
            </Col>
                </Row>
              </Form>
          )
      }
}

export default SIForm;