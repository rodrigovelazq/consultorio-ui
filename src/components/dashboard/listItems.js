import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EventIcon from '@material-ui/icons/Event';
import FaceIcon from '@material-ui/icons/Face';
import {Link} from "react-router-dom";

export const mainListItems = (
    <div>
        <ListItem component={Link} to="/pacientes">
            <ListItemIcon>
                <FaceIcon/>
            </ListItemIcon>
            <ListItemText primary="Pacientes"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <LocalHospitalIcon/>
            </ListItemIcon>
            <ListItemText primary="Consultas"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <EventIcon/>
            </ListItemIcon>
            <ListItemText primary="Calendario"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIndIcon/>
            </ListItemIcon>
            <ListItemText primary="Historial"/>
        </ListItem>
    </div>
);