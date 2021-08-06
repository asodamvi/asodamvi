import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import AdminRoute from '../components/AdminRoute';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Home from '../components/Home';
import Perfil from '../components/Perfil';
import Asociados from '../components/Asociados';
import Encuestas from '../components/Encuestas';
import ResponderEncuestas from '../components/ResponderEncuestas';
import GaleryAdmin from '../components/GaleryAdmin';
import Buzon from '../components/Buzon';
import Anuncios from '../components/Anuncios'
import { useAuth } from '../contexts/AuthContext';

import "../assets/css/app.css"

const Dashboard = () => {
    const { validateRole } = useAuth();
    const role = validateRole();

    return(
        <>
            <Topbar />
            <div className="container__app">
                <Sidebar />
                <div className="content__app">
                    <Switch>
                        <Route exact path="/dashboard" component={Home}/>
                        <Route exact path="/dashboard/perfil" component={Perfil}/>
                        <AdminRoute exact path="/dashboard/asociados" component={Asociados}/>
                        <AdminRoute exact path="/dashboard/encuestas" component={Encuestas}/>
                        <Route exact path="/dashboard/mis-encuestas" component={ResponderEncuestas}/>
                        <AdminRoute exact path="/dashboard/galeria" component={GaleryAdmin}/>
                        <Route exact path="/dashboard/buzon-sugerencias" component={Buzon}/>
                        <Route exact path="/dashboard/anuncios" component={Anuncios}/>
                        <Route component={Home}/>
                    </Switch>
                </div>
            </div>
        </>
    )
}

export default Dashboard;