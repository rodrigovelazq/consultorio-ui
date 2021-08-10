import React from 'react';
import DataTable from "../library/data-table/DataTable";
import {dateFormat} from "../../utils/date-utils";
import {deletePaciente, getPacientesPaginate} from "./services";
import {useHistory} from 'react-router-dom';

export default function Pacientes() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [count, setCount] = React.useState(0);
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('id');
    const [filter, setFilter] = React.useState('');
    const [rows, setRows] = React.useState([]);
    const history = useHistory();

    const rowSettings = [
        {key: 'nombre', label: 'Nombre'},
        {key: 'apellido', label: 'Apellido'},
        {key: 'telefono', label: 'Teléfono'},
        {key: 'cedula', label: 'Cédula'},
        {
            key: 'fecha_nacimiento',
            label: 'Fecha de Nacimiento',
            rowDisplay: (row) => dateFormat(new Date(row.fecha_nacimiento))
        },
        {
            key: 'actions',
            label: 'Acciones',
            onDelete: (item) => deletePaciente(item.id).then(function (response) {
                getPacientesPaginate(page, rowsPerPage, order, orderBy, filter).then(function (response) {
                    setRows(response.data.rows);
                    setCount(response.data.count);
                })
                    .catch(function (error) {
                        console.log(error);
                    });
            }).catch(function (error) {
                    console.log(error);
                }),
            onEdit: (item) => history.push(`/pacientesForm/${item.id}`)
        },
    ];

    React.useEffect(() => {
        getPacientesPaginate(page, rowsPerPage, order, orderBy, filter).then(function (response) {
            setRows(response.data.rows);
            setCount(response.data.count);
        })
            .catch(function (error) {
                console.log(error);
            });
    }, []);


    const handlePageChange = (newPage) => {
        setPage(newPage);
        getPacientesPaginate(newPage, rowsPerPage, order, orderBy, filter).then(function (response) {
            setRows(response.data.rows);
            setCount(response.data.count);
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleOrderChange = (newOrder, newOrderBy) => {
        setOrder(newOrder);
        setOrderBy(newOrderBy);
        getPacientesPaginate(page, rowsPerPage, newOrder, newOrderBy, filter).then(function (response) {
            setRows(response.data.rows);
            setCount(response.data.count);
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleChangeFilter = (newFilter) => {
        setFilter(newFilter);
        getPacientesPaginate(page, rowsPerPage, order, orderBy, newFilter).then(function (response) {
            setRows(response.data.rows);
            setCount(response.data.count);
        })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <React.Fragment>
            <DataTable
                rows={rows}
                rowSettings={rowSettings}
                page={page}
                onPageChange={handlePageChange}
                rowsPerPage={rowsPerPage}
                setRowsPerPage={setRowsPerPage}
                order={order}
                orderBy={orderBy}
                onOrderChange={handleOrderChange}
                filter={filter}
                onChangeFilter={handleChangeFilter}
                count={count}
                urlForm={`/pacientesForm`}
                tableTitle={'Pacientes'}
            />
        </React.Fragment>
    );
}
