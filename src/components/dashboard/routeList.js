import React from "react";
import {Route, Switch} from "react-router-dom";
import Pacientes from "../pacientes/Pacientes";

export const routerList = (
    <Switch>
        <Route path={`/pacientes`} component={Pacientes}/>
    </Switch>
)