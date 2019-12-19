import React,{Component} from 'react';
import { Button,Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';


class IDForm extends Component{

  constructor(props){
    super(props)
    this.handleSubmitSignUp = this.handleSubmitSignUp.bind(this)
    this.handleSubmitSignIn = this.handleSubmitSignIn.bind(this)
    this.state = {
      SignUpFirstName: '',
      SignUpLastName: '',
      SignUpEmail: '',
      SignUpPassword: '',
      SignInEmail:'',
      SignInPassword:'',
      isUserExist: false
    }
  }

  handleSubmitSignUp(){

    console.log('BOUTTON OK')

    fetch(`http://${global.IP}:3000/sign-up`, {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `first_name=${this.state.SignUpFirstName}&last_name=${this.state.SignUpLastName}&email=${this.state.SignUpEmail}&password=${this.state.SignUpPassword}`
    }
    ).then(function(res, err){
      return res.json()
    }).then(data => {

      console.log('Dans mon fetch -->',data)
 
        this.setState({
          isUserExist:true
        })

    })
  
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


    return (
      <Form>
      <Row form>
      <Col md={12}>
          <FormGroup>
            <Label for="exampleLastName">Nom</Label>
            <Input onChange={(e) => this.setState({SignUpLastName: e.target.value})} className="Login-input" placeholder="Name" />
          </FormGroup>
        </Col>
      <Col md={12}>
          <FormGroup>
            <Label for="exampleFirstName">Prénom</Label>
            <Input onChange={(e) => this.setState({SignUpFirstName: e.target.value})} className="Login-input" placeholder="FirstName" /> 
          </FormGroup>
        </Col>
        <Col md={12}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input onChange={(e) => this.setState({SignUpEmail: e.target.value})} className="Login-input" placeholder="email" />
          </FormGroup>
        </Col>
        <Col md={12}>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" onChange={(e) => this.setState({SignUpPassword: e.target.value})} className="Login-input" placeholder="password" />
          </FormGroup>
        </Col>
        <Col md={12}>
          <FormGroup>
          <Button onClick={this.handleSubmitSignUp} style={{width:'100px'}} type="primary">Sign-up</Button>
          </FormGroup>
        </Col>
        </Row>
      </Form>
    );
  }
}

export default IDForm;