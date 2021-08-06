import React from 'react'
import { HashRouter, Switch, Route } from "react-router-dom"

// Containers
import Inicio from '../containers/Inicio'
import Nosotros from '../containers/Nosotros'
import Galeria from '../containers/Galeria'
import Documentos from '../containers/Documentos'
import Ingresar from '../containers/Ingresar'
import Registrarse from '../containers/Registrarse'
import Dashboard from '../containers/Dashboard'
import PrivateRoute from '../components/PrivateRoute'
import PublicRoute from '../components/PublicRoute'
import RestaurarPassword from '../containers/RestaurarPassword'

const App = () => {

    return (
        <HashRouter basename='/'>
            <Switch>
                <Route exact path="/" component={Inicio}/>
                <Route exact path="/acerca-de" component={Nosotros}/>
                <Route exact path="/galeria" component={Galeria}/>
                <Route exact path="/documentos" component={Documentos}/>
                <PublicRoute exact path="/ingresar" component={Ingresar}/>
                <PublicRoute exact path="/registrarse" component={Registrarse}/>
                <PublicRoute exact path="/restaurar-contrasena" component={RestaurarPassword}/>

                <PrivateRoute path="/dashboard" component={Dashboard}/>
                <Route component={Inicio}/>
            </Switch>
        </HashRouter>
    )
}

export default App;