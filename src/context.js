import React,{ Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
          return {
            ...state,
            contacts: state.contacts.filter(contact => contact.id !== action.payload)
          };
          case 'Add_CONTACT':
          return {
            ...state,
            contacts: [action.payload, ...state.contacts]
          };
        default:
         return state
    }
}
export class Provider extends Component {
    state = {
        contacts: [
          {
            id: 1,
            name: "Vijaya",
            email: "Vijaya@mailinator.com",
            phone: "222 - 222 - 2222"
          },
          {
            id: 2,
            name: "Swetha",
            email: "Swetha@mailinator.com",
            phone: "333 - 333 - 3333"
          },
          {
            id: 3,
            name: "Athiya",
            email: "Athiya@mailinator.com",
            phone: "444 - 444 - 4444"
          }
        ],
        dispatch: action => this.setState(state =>
            reducer(state, action))
     };

    render() {
      return(
          <Context.Provider value={this.state}>
            {this.props.children}
          </Context.Provider>
      )  
    }
}

export const Consumer = Context.Consumer;
 