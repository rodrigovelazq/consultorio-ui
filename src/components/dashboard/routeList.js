import React from "react";
import {Route, Switch} from "react-router-dom";
import Pacientes from "../pacientes/Pacientes";
import PacientesForm from "../pacientes/PacientesForm";

export const routerList = (
    <Switch>
        <Route path={`/pacientes`} component={Pacientes}/>
        <Route path={`/pacientesForm`} component={PacientesForm}/>
    </Switch>
)