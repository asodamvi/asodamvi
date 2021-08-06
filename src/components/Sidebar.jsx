import { NavLink } from "react-router-dom";
import { Home, Group, Poll, Image, CheckBox, NotificationsActive, AccountCircle } from '@material-ui/icons'
import { useAuth } from '../contexts/AuthContext';

// CSS Styles
import "../assets/css/sidebar.css";

export default function Sidebar() {
    const { validateRole } = useAuth();
    const role = validateRole();

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Menu</h3>
                    <ul className="sidebarList">
                        <NavLink exact to="/dashboard" className="link">
                            <li className="sidebarListItem ">
                                <Home className="sidebartListIcon"/>
                                Inicio
                            </li>
                        </NavLink>
                        <NavLink exact to="/dashboard/perfil" className="link">
                            <li className="sidebarListItem ">
                                <AccountCircle className="sidebartListIcon"/>
                                Perfil
                            </li>
                        </NavLink>
                        { role === 'admin' && (
                            <>
                                <NavLink exact to="/dashboard/asociados" className="link">
                                    <li className="sidebarListItem ">
                                        <Group className="sidebartListIcon"/>
                                        Asociados
                                    </li>
                                </NavLink>
                                <NavLink exact to="/dashboard/encuestas" className="link">
                                    <li className="sidebarListItem ">
                                        <Poll className="sidebartListIcon"/>
                                        Encuestas
                                    </li>
                                </NavLink>
                                <NavLink exact to="/dashboard/galeria" className="link">
                                    <li className="sidebarListItem ">
                                        <Image className="sidebartListIcon"/>
                                        Galeria
                                    </li>
                                </NavLink>
                            </>
                            )
                        }
                        { (role === "asociado") && (
                            <NavLink exact to="/dashboard/mis-encuestas" className="link">
                                <li className="sidebarListItem ">
                                    <Poll className="sidebartListIcon"/>
                                    Encuestas
                                </li>
                            </NavLink>
                        )}
                        <NavLink exact to="/dashboard/buzon-sugerencias" className="link">
                            <li className="sidebarListItem ">
                                <CheckBox className="sidebartListIcon"/>
                                Buzón de Sugerencias
                            </li>
                        </NavLink>
                        <NavLink exact to="/dashboard/anuncios" className="link">
                            <li className="sidebarListItem ">
                                <NotificationsActive className="sidebartListIcon"/>
                                Anuncios
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
}