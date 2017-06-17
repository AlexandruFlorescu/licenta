import React, {Component} from 'react'
import { Grid, Header, Button,Input, Form, Label, Segment } from 'semantic-ui-react'
import {validate, initValidation} from 'react-custom-validation'

class RegisterForm extends Component{
constructor(props){
  super(props)
  this.state={
    username: '',
    email: '',
    password: '',
    errors: {}
  }
}

 handleChange(e, {name, value}){
   this.setState( { [name]:value } )
   console.log(this.state);
 }

 handleSubmit(e){
   e.preventDefault();
   this.props.addUser(this.state)
 }

 render(){
  return (
    <div>
      <Validate > </Validate>
      <Grid centered celled='internally'>
        <Grid.Row>
            <Grid.Column width={10} color='blue'>
            <Form>
              <Form.Field>
                <input placeholder="Username" name="username"  onChange={this.handleChange.bind(this)}/>
                <Label basic color='red' pointing='left'>{this.state.errors['username']}</Label>
              </Form.Field>
              <Form.Field>
                <Form.Input type="email" placeholder="Email" name="email" onChange={this.handleChange.bind(this)} />
              </Form.Field>
              <Form.Field>
                <Form.Input type="password" placeholder ="Password" name="password" onChange={this.handleChange.bind(this)} />
              </Form.Field>
            </Form>
            <br/>
            <Button primary inverted onClick={this.handleSubmit.bind(this)}> JOIN! </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
 }

}

export default RegisterForm;
