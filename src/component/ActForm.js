import React,{Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input,Row, FormText } from 'reactstrap';
// import ReactDOM from 'react-dom';
// import ImageUploader from 'react-images-upload';



class ActForm extends Component {

  constructor(props){
    super(props);
    this.handleSubmitNewAct = this.handleSubmitNewAct.bind(this);
    this.state = {
      category: '',
      name: '',
      address: '',
      zipCode: '',
      city: '',
      phone: '',
      Desc: '',
      pictures:'',
      // setImage:'',
      loading:false,
      setLoading:false,
    };
    // this.form = React.createRef();
  }
  
  handleSubmitNewAct() {

    console.log('bouton ok')


    fetch(`http://${global.IP}:3000/newAct`, {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `category=${this.state.category}&name=${this.state.name}&address=${this.state.address}&zipCode=${this.state.zipCode}&city=${this.state.city}&phone=${this.state.phone}&Desc=${this.state.Desc}&pictures=${this.state.pictures}`
    })
    .then(function(res, err){
      return res.json()
      })
    .then(data => {
      console.log('dans mon fetch', data)
    })

    
    .catch(function(error){
      console.log('request failed', error)
    });
  
    // var data = new FormData(ReactDOM.findDOMNode(this.form.current));

    // fetch(`http://${global.IP}:3000/newAct`, {
    //   method: 'POST',
    //   body: data
    // })

    // console.log(data)   
    window.location.reload() 
  }

uploadImage = async (e) => {
    const files=e.target.files 
    var data =new FormData()
    data.append('file',files[0]);
    data.append('upload_preset','zuhfna9a')
    this.setState({setLoading:true})
    const res = await fetch('https://api.cloudinary.com/v1_1/dsnbfizry/image/upload',{
      method :'POST',
      body:data
}
    )

    const file = await res.json()
    this.setState({pictures:file.secure_url})
    this.setState({setLoading:false})
    console.log(file.secure_url)
  }


  render (){
      return(
        <div>
                <Form ref={this.form}>

                <FormGroup >
                    <Label for="exampleSelectMulti">Catégorie *</Label>
                    <Col sm={10} style={{padding:0}}>
                    <Input type="select" name="category" onChange={(e) => this.setState({category: e.target.value})} required>
                        <option>Activités bénévoles</option>
                        <option>Alimentation</option>
                        <option>AMAP</option>
                        <option>Caritatif</option>
                        <option>Prêt-à-porter</option>
                        <option>Recyclage</option>
                    </Input>
                    </Col>
                </FormGroup>

                <FormGroup>
                <Label for="Name">Nom *</Label>
                  <Col sm={10} style={{padding:0}}>
                      <Input type="name" name="name" id="nameModal" placeholder="Nom de l'activité" 
                      onChange={(e) => this.setState({name: e.target.value})} required/>
                   </Col>
                 </FormGroup>

                 <FormGroup>
                <Label for="Name">Téléphone *</Label>
                  <Col sm={10} style={{padding:0}}>
                      <Input type="phone" name="phone" id="phoneModal" 
                      onChange={(e) => this.setState({phone: e.target.value})} required/>
                   </Col>
                 </FormGroup>

                  
                <FormGroup>
                  <Label for="exampleAddress">Adresse *</Label>
                  <Input type="text" name="address" id="exampleAddress" placeholder="128 rue Saint-Denis..."
                  onChange={(e) => this.setState({address: e.target.value})} required/>
                </FormGroup>

                <Row form>
                  <Col md={5}>
                    <FormGroup>
                      <Label for="exampleCity">Ville *</Label>
                      <Input type="text" name="city" id="exampleCity"
                      onChange={(e) => this.setState({city: e.target.value})} required/>
                    </FormGroup>
                  </Col>

                  <Col md={4}>
                    <FormGroup>
                      <Label for="exampleState">Région *</Label>
                      <Input type="text" name="state" id="exampleState" required/>
                    </FormGroup>
                  </Col>
                  
                  <Col md={3}>
                    <FormGroup>
                      <Label for="exampleZip">Code Postal *</Label>
                      <Input type="text" name="zipCode" id="exampleZip"
                      onChange={(e) => this.setState({zipCode: e.target.value})} required/>
                    </FormGroup>  
                  </Col>
                </Row>

                <FormGroup>
                     <Label for="exampleText">Description de l'activité *</Label>
                        <Col sm={10} style={{padding:0}}>
                    <Input type="textarea" name="Desc" id="exampleText" placeholder="Décrivez votre projet de la mainière la plus précise afin que l'activité soit validée par l'équipe ;)" 
                    onChange={(e) => this.setState({Desc: e.target.value})} required/>
                    </Col>
                </FormGroup>
                </Form>                

                  <FormGroup>
                    <Input type="file" name="pictures" onChange={this.uploadImage} />
                    {/* onChange={(e) => this.setState({pictures: e.target.files})}/> */}
                  </FormGroup>
                  
                  <FormGroup>
                  <Button onClick={this.handleSubmitNewAct} style={{width:'100px',marginLeft:'40%',borderRadius:25}} type="button" color="primary">Valider</Button>
                  </FormGroup>
                
                <FormText>
                (*) Champs à remplir pour une meilleure information
                </FormText>
                </div>
            );
          }}
          
export default ActForm;

  