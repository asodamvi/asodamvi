import React from "react";
import { Link } from 'react-router-dom';
import { AccountCircle } from '@material-ui/icons';

// Firebase
import { useAuth } from "../contexts/AuthContext";

// Assets
import logo from "../assets/img/logo_asodamvi.png";
import "../assets/css/topbar.css";

// Components
import Logout from './Logout';

export default function Topbar() {
  const { currentUser } = useAuth();

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <Link to="/dashboard" className="topLogo">
            <img className="topLogoImg" src={logo} alt="Asodamvi Popayán" />
            <span className="topLogoTxt">Asodamvi</span>
        </Link>

        <div className="topInfo">
          <AccountCircle />
          <p>
            { currentUser.usuario && `${currentUser.nombres} ${currentUser.apellidos}`}
            { !currentUser.usuario && "Administrador"}
          </p>
          <Logout />
        </div>
      </div>
    </div>
  );
}
