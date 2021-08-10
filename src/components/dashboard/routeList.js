import React from "react";
import {Route, Switch} from "react-router-dom";
import Pacientes from "../pacientes/Pacientes";
import PacientesForm from "../pacientes/PacientesForm";

export const routerList = (
    <Switch>
        <Route exact path={`/pacientes`} component={Pacientes}/>
        <Route exact path={`/pacientesForm`} component={PacientesForm}/>
        <Route exact path={`/pacientesForm/:id`} component={PacientesForm}/>
    </Switch>
)