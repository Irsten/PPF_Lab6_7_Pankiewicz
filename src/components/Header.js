/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../logo.png";
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <Link to="Home">
          <img src={logo} className="logo" alt="logo" />
      </Link>
      <h2>Rasy psów</h2>
    </div>
  );
}


// class Header extends Component {
//     render() {
//       const {aName, aFamily} = this.props;
//       return (
//         <div className="header">
//           <img src={logo} className="logo" alt="logo" />
//           <h2>Rasy psów</h2>
//         </div>
//       );
//     }
//   }

//   export default Header