import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './contact.css';
import { Consumer }  from '../../context';

class Contact extends Component {
//  static propTypes = {
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     phone: PropTypes.string.isRequired
//   }
state = {
  showContactinfo: true
};
showClick = () => {
  this.setState({showContactinfo: !this.state.showContactinfo})
}
onDeleteClick = (id, dispatch) => {
  // this.props.deleteClickHandler();
  dispatch({type: 'DELETE_CONTACT', payload: id})
}
  render() {
    const {id,name, email, phone} = this.props.contact;
    const {showContactinfo} = this.state;
    return (
      <Consumer>
        {value => {
          const {dispatch} = value;
          return(
            <div className="card card-body mb-3">
            <h4>{name}
            <i onClick={this.showClick} style={{cursor: 'pointer '}}className="fas fa-sort-down" />
            <i onClick={this.onDeleteClick.bind(this, id, dispatch)} style={{cursor:'pointer',float: 'right',color: 'red'}} className="fas fa-times" />
            </h4>
            {!showContactinfo ? (<ul className="list-group">
              <li className="list-group-item">Email: {email}</li>
              <li className="list-group-item"> Phone: {phone}</li>
            </ul>): null}
            
          </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  // deleteClickHandler: PropTypes.func.isRequired
}
export default Contact;
