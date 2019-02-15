import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const {branding} = props;
    return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
    <div className="container">
       <a href="/" className="navbar-brand">
         {branding}
       </a>
       <div>
         <ul className="navbar-nav mr-auto">
           <li className="nav-item">
             <Link to="/" className="nav-link">
             <i className="fas fa-home" />Home</Link>
           </li>
           <li className="nav-item">
             <Link to="/contact/add" className="nav-link">
             <i className="fas fa-plus" />Add</Link>
           </li>
           <li className="nav-item">
             <Link to="/about/1" className="nav-link">
             <i className="fas fa-question" />About</Link>
           </li>
         </ul>
       </div>
     </div>
    </nav>
    );
}
Header.defaultProps = {
    branding: 'My First React App'
}
Header.propTypes = {
    branding: PropTypes.string.isRequired 
}
const headingStyle = {
    color: '#FF5733', 
    fontSize: '50px', 
    fontFamily: 'ChronicleTextG1-Roman, serif'
}
export default Header;
