import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup'

class AddContact extends Component {
 state = {
     name: '',
     email: '',
     phone: '',
     errors: {}
 }
 onSubmitData = (dispatch,e) => {
     e.preventDefault();
     const {name, email, phone, errors} = this.state;
     //check for errors

     if(name === "") {
         this.setState({errors: {name:'Name is required'}});
         return;
     }
     if(email === "") {
        this.setState({errors: {email:'email is required'}});
        return;
    }
    if(phone === "") {
        this.setState({errors: {phone:'phone number is required'}});
        return;
    }
     const newContact = {
        id: uuid(), 
        name,
        email,
        phone
     }
     dispatch({type:'Add_CONTACT', payload:newContact})
     // clear state
     this.setState({
         name:'',
         email: '',
         phone: '',
         errors: {}
     })
 }
 onChangeData = (e) => {
    this.setState({[ e.target.name ]: e.target.value})
 }
  render() {
      const {name, email, phone, errors} = this.state;
      return(
          <Consumer>
              {value => {
                const { dispatch } = value;
                  return (
                    <div className="card md-3">
                    <div className="card-header">Add Contact</div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmitData.bind(this,dispatch)}>
                            <TextInputGroup label="Name"
                                        type="text" 
                                        name="name"
                                        value={name}
                                        onChange={this.onChangeData}
                                        error={errors.name}
                                        placeholder="Enter name..">
                            </TextInputGroup>
                            <TextInputGroup label="Email"
                                        type="email" 
                                        name="email"
                                        value={email}
                                        onChange={this.onChangeData}
                                        error={errors.email}
                                        placeholder="Enter email..">
                            </TextInputGroup>
                            <TextInputGroup label="phone"
                                        type="text" 
                                        name="phone"
                                        value={phone}
                                        onChange={this.onChangeData}
                                        error={errors.phone}
                                        placeholder="Enter phone number..">
                            </TextInputGroup>
                            <input type="submit"
                                    value="Add Contact"
                                    className="btn btn-light btn-block" />
                        </form>
                    </div>
                  </div>
                  );
              }}
          </Consumer>
      );
  }
}
export default AddContact;