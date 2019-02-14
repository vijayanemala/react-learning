import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context"

class Contacts extends Component {
//   deleteContact = (id) => {
//       console.log('id',id);
//       const { contacts } = this.state;
//       const newContact = contacts.filter(contact => contact.id !== id);
//       this.setState({contacts: newContact})
//   }
  render() {
      return(
        <Consumer>  
            {value => {
                const {contacts} = value;
                return(
                    <React.Fragment>
                    {contacts.map(contact => (
                      <Contact
                        key={contact.id}
                        id={contact.id}
                        contact={contact}
                      />
                    ))}
                  </React.Fragment>
                );
            }}
        </Consumer>
      );
    // const { contacts } = this.state;
  }
}
export default Contacts;