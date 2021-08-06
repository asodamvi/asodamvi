import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import { ExitToApp } from '@material-ui/icons';

// Assets
import "../assets/css/topbar.css";

const Logout = () => {
    const { logout } = useAuth();
    const history = useHistory();

    const handleLogout = async () => {
        await logout().then(() => {
            history.push("/ingresar");
        });
    }

    return(
        <>
            <button type="button" onClick={handleLogout} className="topbarBtn" >
                Salir
                <ExitToApp />
            </button>
        </>
    )
}

export default Logout;