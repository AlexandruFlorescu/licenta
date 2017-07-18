import React, {Component} from 'react';
import jwt_decode from 'jwt-decode';
import {Grid, Label, Input, Header} from 'semantic-ui-react';

class UserDetail extends Component{
    constructor(props){
      super(props);
      this.state = {
        editingUsername : false,
        username: 'alex',
      }
    }

    startEditing(e){
      this.setState({editingUsername: true})

    }

    stopEditing(e){
      this.setState({editingUsername: false})

    }

    render(){
      return(
        <Grid centered>
          <Grid.Column color='blue' width={8}>
            <Grid.Row>
              <Label size="medium" color='blue'> Username: </Label>
               {
                this.state.editingUsername
                ? <Input name='username' placeholder = {this.state.username} onBlur={this.stopEditing.bind(this)}/>
                : <Label color='blue' onClick={this.startEditing.bind(this)}> {this.state.username} </Label>
               }
            </Grid.Row>
            <Grid.Row>
              <Label size="medium" color='blue'> First Name: </Label>
               {
                this.state.editingFirstName
                ? <Input name='username' placeholder = {this.state.firstName} onBlur={this.stopEditing.bind(this)}/>
                : <Label color='blue' onClick={this.startEditing.bind(this)}> {this.state.firstName} </Label>
               }
            </Grid.Row>
            <Grid.Row>
              <Label size="medium" color='blue'> Last Name: </Label>
               {
                this.state.editingLastName
                ? <Input name='username' placeholder = {this.state.lastName} onBlur={this.stopEditing.bind(this)}/>
                : <Label color='blue' onClick={this.startEditing.bind(this)}> {this.state.lastName} </Label>
               }
            </Grid.Row>
            <Grid.Row>
              <Label size="medium" color='blue'> Last Name: </Label>
               {
                this.state.editingAge
                ? <Input name='username' placeholder = {this.state.lastName} onBlur={this.stopEditing.bind(this)}/>
                : <Label color='blue' onClick={this.startEditing.bind(this)}> {this.state.lastName} </Label>
               }
            </Grid.Row>

          </Grid.Column>
          <Grid.Column color='red' width={8}>
          </Grid.Column>
        </Grid>
      )

    }

  }
  export default UserDetail;
