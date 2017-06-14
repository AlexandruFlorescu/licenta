import React, {Component} from 'react'
import { Grid, Header, Button,Input, Form, Label, Segment } from 'semantic-ui-react'

class RegisterForm extends Component{
constructor(props){
  super(props)
  this.state={
    username: '',
    email: '',
    password: '' }
}

 handleChange(e, {name, value}){
   this.setState( { [name]:value } )
 }

 handleSubmit(e){
   e.preventDefault();
   this.props.addUser(this.state)
 }

 render(){
  return (
    <Grid centered celled='internally'>
      <Grid.Row>
          <Grid.Column width={10} color='blue'>
          <Form>
              <Header as='h3' inverted>Username</Header>
              <Form.Input name="username" name="username" onChange={this.handleChange.bind(this)} />
              <Header as='h3' inverted>Email</Header>
              <Form.Input type="email" name="email" onChange={this.handleChange.bind(this)} />
              <Header as='h3' inverted>Password</Header>
              <Form.Input type="password" name="password" onChange={this.handleChange.bind(this)} />
          </Form>
          <br/>
          <Button primary inverted onClick={this.handleSubmit.bind(this)}> JOIN! </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>

  )
 }

}

export default RegisterForm;
