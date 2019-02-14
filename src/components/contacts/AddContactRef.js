import React, { Component } from 'react'

class AddContact extends Component {
constructor(props) {
    super(props)
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
}
 static defaultProps = {
     name:'vijaya',
     email:'vijaya@olive.com',
     phone: '999-999-999'
 }

//  onChangeData = (e) => {
//     this.setState({[ e.target.name ]: e.target.value})
//  }

 onSubmitData = (e) => {
    e.preventDefault();
    const contact = {
        name: this.nameInput.current.value,
        email: this.emailInput.current.value,
        phone: this.phoneInput.current.value
    }
    console.log('contact',contact)
}
  render() {
      const {name, email, phone} = this.props;
    return (
      <div className="card md-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
            <form onSubmit={this.onSubmitData}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" 
                            name="name"
                            className="form-control form-control-lg"
                            defaultValue={name}
                            ref={this.nameInput}
                            placeholder="Enter name.."/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" 
                            name="email"
                            className="form-control form-control-lg"
                            defaultValue={email}
                            ref={this.emailInput}
                            placeholder="Enter email.."/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" 
                            name="phone"
                            className="form-control form-control-lg"
                            defaultValue={phone}
                            ref={this.phoneInput}
                            placeholder="Enter phone number.."/>
                </div>
                <input type="submit"
                        value="Add Contact"
                        className="btn btn-light btn-block" />
            </form>
        </div>
      </div>
    )
  }
}
export default AddContact;